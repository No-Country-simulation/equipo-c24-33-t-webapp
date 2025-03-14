import { Router } from "express";
import { prisma } from "../db.js";
import { body, validationResult } from "express-validator";
import { hash, compare } from "bcrypt";
import pkg from "jsonwebtoken";
const { sign } = pkg;

import { authentication } from "../middlewares/auth.js";


const router = Router();
const generateJWT = (User) => {
    return sign({ id: User.id, email: User.email}, process.env.JWT_SECRET, {expiresIn: "1h"});
}

router.post("/auth/register", [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const hashPassword = await hash(req.body.password, 10);
        const user = await prisma.user.create({
            data: { ...req.body, password: hashPassword }
        });
        const { password, ...userWithoutPassword } = user;
        res.status(201).json({ ...userWithoutPassword, token: generateJWT(user) });
    } catch (error) {
        if (error.code === 'P2002') { // Prisma unique constraint violation
            return res.status(400).json({ error: "Email or username already exists" });
        }
        res.status(500).json({ error: "Error creating user" });
    }
});

router.post("/auth/login", async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { email: req.body.email }
        });
        if (!user) {
            return res.json({ error: "User not found" });
        }
        const isPasswordValid = await compare(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.json({ error: "Invalid password" });
        }
        const { password, ...userWithoutPassword } = user;
        res.json({ ...userWithoutPassword, token: generateJWT(user) });
    } catch (error) {
        res.json({ error: "Error logging in" });
    }
})

router.get("/auth/me", authentication, async (req, res, next) => {
    try {
      if (!req.user) {
        return res.sendStatus(401); 
      }
      const { password: _password, ...userWithoutPassword } = req.user;
  
      res.json(userWithoutPassword);
    } catch (err) {
      next(err);  
    }
  });
  

export default router;
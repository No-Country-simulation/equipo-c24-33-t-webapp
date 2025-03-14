import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();

router.post("/categories", async (req, res, next) => {
	try {
	  const { name } = req.body; // Suponiendo que el body contiene solo el nombre
	  if (!name) {
		return res.status(400).json({ message: "El nombre es obligatorio" });
	  }
  
	  const category = await prisma.category.create({
		data: {
		  name,
		},
	  });
  
	  res.status(201).json(category);
	} catch (error) {
	  next(error);
	}
  });
  


  router.put("/categories/:id", async (req, res, next) => {
	try {
	  const { id } = req.params;
	  const { name } = req.body;
  
	  if (!name) {
		return res.status(400).json({ message: "El nombre es obligatorio" });
	  }
  
	  const category = await prisma.category.update({
		where: { id: parseInt(id) },
		data: { name },
	  });
  
	  res.json(category);
	} catch (error) {
	  next(error);
	}
  });
  

  router.delete("/categories/:id", async (req, res, next) => {
	try {
	  const { id } = req.params;
  
	  // Intentamos eliminar la categoría
	  const category = await prisma.category.delete({
		where: { id: parseInt(id) },
	  });
  
	  res.json({ message: "Categoría eliminada", category });
	} catch (error) {
	  next(error);
	}
  });
  


router.get("/categories", async (req, res, next) => {
	try {
		const categories = await prisma.category.findMany({
			include: {
				products: true,
			},
		});
		res.json(categories);
	} catch (error) {
		next(error);
	}
});






export default router;
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Home() {
  return (
    <Card id='card_Stocker' sx={{ minWidth: 275,  maxWidth: 500, backgroundColor: "#f5f6ff", boxShadow: 0, paddingTop: 20, paddingLeft: 20}}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{fontWeight: "bold", fontSize: 35}}>
        Organiza tu inventario de una forma sencilla
        </Typography>
        <Typography variant="body2" sx={{color: "#505F98", paddingTop: 3, fontSize: 15}}>
        En Stocker podrás organizar el inventario de tu empresa, visualizar su estado en tiempo real y optimizar los procesos para una gestión más eficiente.          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{marginLeft: 6,paddingX: 3, backgroundColor: "#97D9E4", color: "black", fontSize: 12}}>Iniciar Sesión</Button>
        <Button size="small" sx={{paddingX: 3, backgroundColor: "#f5f6ff", outline: 1, color: "black", fontSize: 12}}>Más Información</Button>

      </CardActions>
    </Card>
  );
}
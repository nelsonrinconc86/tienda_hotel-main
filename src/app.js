//importamos el server
const express = require("express");
//creamos el server
const app = express();
//se crea el puerto del servidor
const port = 3000;
app.use(express.json()); //middleware 
//se crea la ruta URL
app.get("/", (req , res)=>{
    res.status(200).send("pagina principal");
});

app.get("/cliente" , (req , res)=>{
    res.send("modulo de clientes");
});

app.get("/producto/info", (req, res) =>{
    res.send("modulo de producto -- info");
});

app.get("/contacto", (req , res)=>{
    res.redirect("https://web.whatsapp.com/");
})
//activamos escucha del servidor
app.listen(port , ()=>{
    console.log("servidor activo");
})
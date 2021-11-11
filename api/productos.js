var express= require("express");
var router= express.Router();      
var funciones=require("./funciones");

router.get("/", (req,res) => {
    funciones.listadoProductos()
    .then(productos => {
        res.json(productos)
    })
    .catch(err => {
        console.error(err)
        res.json({error:'hubo un error Al consultar la DB'})
    })    
})

router.get("/:id",(req,res) => {
    console.log(req.params.id)
    const id = parseInt(req.params.id)
    if(isNaN(id)) {return false}
    funciones.prodPorId(id)
    .then(productos => {
        res.json(productos[0])
    })
    .catch(err => {
        console.error(err)
        res.json({error:'hubo un error Al consultar la DB'})
    })    
})


module.exports=router;

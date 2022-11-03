const router = require('express').Router()
const Produit = require("../models/produit.model")

router.get('/', async (req, res) => {

    try{
        const pr = await Produit.find()
        res.status(200).json(pr)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get('/byCat/:id', async (req, res) => {
    try{
        const pr = await Produit.find({idCataloge : req.params.id})
        res.status(200).json(pr)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try{
        const pr = await Produit.findById({_id : req.params.id})
        res.status(200).json(pr)
    }catch(err){
        res.status(500).json(err)
    }
})

router.delete('/:id' , async (req ,res)=>{
    try{
        const pr = await Produit.findById({_id : req.params.id})
        if(pr){
            Produit.findByIdAndDelete({_id : req.params.id} , (err , data)=>{

                res.status(200).json({data : data , message : "vous avez supprimé un produit"})
            })
        }
    }catch(err){
        res.status(500).json(err)
    }
})

router.put('/:id' , async (req ,res)=>{
    try{
        const pr = await Produit.findById({_id : req.params.id})
        if(pr){
            Produit.findByIdAndUpdate({_id : req.params.id} , req.body , (err , data)=>{

                res.status(200).json({data : data , message : "vous avez modifié un produit"})
            })
        }
    }catch(err){
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    const pr = new Produit(req.body)

    try {
       const newPr =  await pr.save()
       res.status(200).json({data : newPr , message : "vous avez ajouté un produit"})
    } catch (err) {
        res.status(500).json(err)
    }


})



module.exports = router
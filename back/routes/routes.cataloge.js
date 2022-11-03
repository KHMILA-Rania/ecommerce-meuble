const router = require('express').Router()
const Cataloge = require("../models/cataloge.model")

router.get('/', async (req, res) => {
    try{
        const cat = await Cataloge.find()
        res.status(200).json(cat)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try{
        const cat = await Cataloge.findById({_id : req.params.id})
        res.status(200).json(cat)
    }catch(err){
        res.status(500).json(err)
    }
})


router.put('/:id' , async (req ,res)=>{
    try{
        const cat = await Cataloge.findById({_id : req.params.id})
        if(cat){
            Cataloge.findByIdAndUpdate({_id : req.params.id} , req.body , (err , data)=>{

                res.status(200).json({data : data , message : "vous avez modifié une cataloge"})
            })
        }
    }catch(err){
        res.status(500).json(err)
    }
})

router.delete('/:id' , async (req ,res)=>{
    try{
        const cat = await Cataloge.findById({_id : req.params.id})
        if(cat){
            Cataloge.findByIdAndDelete({_id : req.params.id} , (err , data)=>{

                res.status(200).json({data : data , message : "vous avez supprimé une cataloge"})
            })
        }
    }catch(err){
        res.status(500).json(err)
    }
})

router.post('/get/name', async (req, res) => {
    console.log('here')
    try{
        const nav = await Cataloge.findOne({name : req.body.name})
        res.status(200).json(nav)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get('/byCat/:id', async (req, res) => {
    try{
        const cat = await Cataloge.find({idNav : req.params.id})
        res.status(200).json(cat)
    }catch(err){
        res.status(500).json(err)
    }
})

router.post('/', async (req, res) => {
    const cat = new Cataloge(req.body)

    try {
       const newCat =  await cat.save()
       res.status(200).json({data : newCat , message : "vous avez ajouté une cataloge"})
    } catch (err) {
        res.status(500).json(err)
    }


})

module.exports = router
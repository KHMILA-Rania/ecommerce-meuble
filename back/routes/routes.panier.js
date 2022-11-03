const router = require('express').Router()
const Panier = require("../models/panier.model")
const Produit = require("../models/produit.model")


router.post('/', async (req, res) => {
    const p = new Panier(req.body)
    try {
        const data = await p.save()
        res.status(200).json(data)

    } catch (err) {
        res.status(500).json(err)
    }

})

router.get('/:id', async (req, res) => {
    const arr = [];
    try {
        console.log(req.params.id)
        const pn = await Panier.find({ idClient: req.params.id })
        for (var i = 0; i < pn.length; i++) {
            try {
               var prod = await Produit.findById({_id : pn[i].idProduit})
               arr.push({produit : prod , panier : pn[i]})
            } catch (err) {
                console.log(err)
            }
            
        }
        res.status(200).json(arr)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/:id' , async (req ,res)=>{
    try{
        const pn = await Panier.findById({_id : req.params.id})
        if(pn){
            Panier.findByIdAndDelete({_id : req.params.id} , (err , data)=>{

                res.status(200).json({data : data , message : "vous avez supprimé un panier"})
            })
        }
    }catch(err){
        res.status(500).json(err)
    }
})




module.exports = router
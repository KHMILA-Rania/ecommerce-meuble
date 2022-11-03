const router = require('express').Router()
const Commande = require("../models/commande.model")
const Produit = require("../models/produit.model")
const Panier = require("../models/panier.model")



router.post('/', async (req, res) => {
    const c = new Commande(req.body)
    console.log(c)
    try {
        const idP = c.idProduit
        console.log(idP)
        const data = await c.save()
        res.status(200).json(idP)

    } catch (err) {
        res.status(500).json(err)
    }

})

router.get('/:id', async (req, res) => {
    const arr = [];
    try {
        console.log(req.params.id)
        const pn = await Commande.find({ idDeClinet: req.params.id })
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
        const pn = await Commande.findById({_id : req.params.id})
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
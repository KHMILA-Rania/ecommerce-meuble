const router = require('express').Router()
const Msg = require("../models/communication.model")

router.post('/', async (req, res) => {
    const p = new Msg(req.body)
    console.log(p)
    try {
        const data = await p.save()
        res.status(200).json(data)

    } catch (err) {
        res.status(500).json(err)
    }

})

router.get('/', async (req, res) => {
    try{
        const cat = await Msg.find()
        res.status(200).json(cat)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router
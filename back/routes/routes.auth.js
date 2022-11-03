const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/users.model')


router.post('/register', async (req, res) => {
    console.log(req.body)
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)


    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        genre : req.body.genre,
        phone : req.body.phone,
        dateNaissance : req.body.dateNaissance,
        nom : req.body.nom,
        prenom : req.body.prenom,
        cin : req.body.cin,
        role : req.body.role
    })

    const result = await user.save()

    const {password, ...data} = await result.toJSON()

    res.send(data)
})

router.post('/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email})

    if (!user) {
        return res.status(404).send({
            message: 'user not found'
        })
    }

    if (!await bcrypt.compare(req.body.password, user.password)) {
        return res.status(400).send({
            message: 'invalid credentials'
        })
    }

    const token = jwt.sign({_id: user._id}, "secret")

    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    })

    res.send({
        message: 'success',
        user : user
    })
})

router.post('/byemail', async (req, res) => {
   User.findOne({email : req.body.email} , (err , data)=>{
    if (data){
        res.status(200).json('exist')
    }
   })
})

router.get('/:id' , (req , res )=>{
    User.findById({_id : req.params.id} , (err , user)=>{
        if(user){
            res.send({
                message: 'success',
                user : user
            })
        }
    })
})

router.get('/' , (req , res )=>{
    User.find({} , (err , user)=>{
        if(user){
            res.send({
                message: 'success',
                user : user
            })
        }
    })
})

router.post('/logout', (req, res) => {
    res.cookie('jwt', '', { maxAge: 0 })

    res.send({
        message: 'success'
    })
})

module.exports = router
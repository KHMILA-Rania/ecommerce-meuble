const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
require('dotenv').config();
const mongo=process.env.db;

mongoose.connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to the database')
})

const auth = require('./routes/routes.auth')
const cataloge = require('./routes/routes.cataloge')
const produit = require('./routes/routes.produit')
const panier = require('./routes/routes.panier')
const commande = require('./routes/routes.commande')
const msg = require('./routes/routes.communication')

app = express()
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))

app.use(express.json())

app.use('/api/auth', auth)
app.use('/api/cataloge', cataloge)
app.use('/api/produit', produit)
app.use('/api/panier', panier)
app.use('/api/commande', commande)
app.use('/api/communication', msg)

app.listen(3000 , ()=>{
    console.log('server work')
})
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config({path:'/Users/harshraj/Desktop/E-pay/.env'});
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

console.log(stripeSecretKey,stripePublicKey)

const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/index', function(req, res){
    if(error){
        res.status(500).end()
    } else{
        res.render('store.ejs',{
            stripePublicKey:stripePublicKey
        })
    }
})

app.listen(3000)
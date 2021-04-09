const {Router} = require('express');
const Instagram = require('../models/instagramModel')
const router = Router();
const mongoose = require("mongoose")

var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded());
// // in latest body-parser use like below.
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/' ,  async(req,res) => {
    const instagram  = await Instagram.find({})
    res.render('index' , {
        title: 'Instagram',
        isInstagram: true,
        instagram
    })
})
router.get('/login' , (req,res)=>{
    res.render('login' , {
        title: 'Login',
        isLogin: true
    })
})
router.get('/register' , (req,res)=> {
    res.render('register' , {
        title: 'Register',
        isRegister: true
    })
})

router.post('/register' , async (req , res) => {
    console.log(req.body);

    // const instagram = new ({
    //     title: req.body.title
    // })
    // console.log("sended")

    // await  instagram.save()
    // console.log("seved")
    // res.redirect('/')

})

module.exports = router;
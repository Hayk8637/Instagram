const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const instaRoutes = require('./routes/instagram')

const PORT = process.env.PORT  || 3000;


const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main', 
    extname: 'hbs'
})

app.engine('hbs' , hbs.engine);
app.set('view engine' , 'hbs');
app.set('views' , 'views');

app.use(instaRoutes);
app.use(express.urlencoded({extended: true}))


async function start() {
    try {
        await mongoose.connect('mongodb+srv://sargsyan1998hayk:Ha1998yk@cluster0.v37ae.mongodb.net/instagram' , {
            useNewUrlParser: true,
            useFindAndModify: false 
        })
        app.listen(PORT , ()=> {
            console.log("Server is running.")
    })
    } catch(e) {
        console.log("error");
    }
}


start()


const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const todoRoutes = require("./routes/todos")
const path = require("path")
const PORT = process.env.PORT || 3000;
const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set('views', 'views');

app.use(express.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, "public")))

app.use(todoRoutes)

async function start() {
    try{
      await mongoose.connect("mongodb+srv://vitenko:1q2w3e4r@cluster0.d3tic4v.mongodb.net/todos", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
        })
    app.listen(PORT, ()=>{
        console.log(`server start on port ${PORT}`);
    })

    }catch(e){
        console.log(e);
    }
}

start();
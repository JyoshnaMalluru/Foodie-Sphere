const express = require("express");
const app = express();
const foodItems = require("./init/data.js");
const path = require("path");
const ejsMate = require("ejs-mate");
const { v4: uuidv4 } = require('uuid');
// const mongoose = require('mongoose');
// const FoodItem = require('./models/foodItem'); // Adjust the path accordingly
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")));
// console.log("Views Path:", path.join(__dirname, "views"));

const multer = require('multer');
const upload = multer({ dest: 'items/new.ejs' });

// console.log(foodItems);
app.get("/food",(req,res)=>{
    // console.log("Inside route handsler:", foodItems);
    let food= foodItems.data;
    res.render("items/index.ejs", { food });
})

app.get("/food/new",(req,res) => {
    res.render("items/new.ejs");
})

app.get("/food/:id",(req,res)=>{
    let {id} = req.params;
    let item = foodItems.data.find((p)=> id === p.id);
    res.render("items/show.ejs", { item });
})
app.post("/food",upload.single('food[image]'),(req,res) => {
    let {name,description} = req.body.food;
    let id = uuidv4();
    let image = req.body.food.image;
    foodItems.data.push({id,name,description,image});
    res.redirect("/food");
});
app.patch("/food/:id",(req,res)=>{
    let { id }= req.params;
    // console.log(req.body);
    let newContent = req.body.food;
    // console.log(newContent);
    let item = foodItems.data.find((p) => id === p.id);
    // console.log(foodItems.data.find((p) => id === p.id));
    item.name = newContent.name;
    item.description = newContent.description;
    item.image = newContent.image;
    // console.log("Updated item:", item);
    res.redirect(`/food`);
});

app.get("/food/:id/edit",(req,res)=>{
    let {id} = req.params;
    let item = foodItems.data.find((p)=> id === p.id);
    res.render("items/edit.ejs", { item });
})

app.delete("/food/:id",(req,res)=>{
    let { id }= req.params;
    if (Array.isArray(foodItems)) {
        foodItems = foodItems.filter((p) => id !== p.id);
      } else {
        foodItems.data = foodItems.data.filter((p) => id !== p.id);
      }    
    res.redirect("/food");
});

app.listen(8080,()=>{
    console.log("Listening on port 8080");
})
const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

// Agar hum simple run kare tab agar navbar ya kisi bhi hbs mn change karein toh wo tab ki tab change nhi hota isliye hume run karte time
//  :-> nodemon src/app.js -e js,hbs   
// is se sari hbs and js file bhi include ho gyi


// When we host then it require a port no. so we have to writte in this way the port should always be in capital letter
const port = process.env.PORT || 8000;



// public static path
const staticPath =path.join(__dirname,"../public");

const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);


app.use(express.static(staticPath));


 
app.get("",(req,res)=>{
     res.render('index');
});

app.get("/about",(req,res)=>{
     res.render('about');
});

app.get("/Weather",(req,res)=>{
     res.render("weather");
});
 
app.get("*",(req,res)=>{
    res.render("404error",{
     errorMsg :'Opps! Page Not Found'
    });
}); 

// To show this type of msg in hbs we have to writte :->
//   {{errorMsg}}  (  without >)


app.listen(port,()=>{
    console.log(`Listening on port No. ${port}`);
}); 


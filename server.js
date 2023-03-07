const express = require("express")
const app = express()

require("dotenv").config()


app.set("view engine", "ejs")

//  connect css files and js files 
app.use(express.static('public'))
// Parse data to work with ejs (req.body)
app.use(express.urlencoded({ extended: false }));





/* Config */
const PORT = 3000;




app.get('/',(req,res)=>{
     res.render("home.ejs")
})



// All Error Handleing Route
app.get("/*", (req, res) => {
  res.render("404.ejs");
});


app.listen(PORT,()=>{
console.log(`You are listening ${PORT}`)
})


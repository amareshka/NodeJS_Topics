const express = require("express");
const app = express();

const courses = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "Javavscript" },
  { id: 4, name: "React JS" },
  { id: 5, name: "Node JS" }
];

app.get("/", (req, res) => {
  res.send("This is from Express JS..");
});

app.get("/about", (req, res) => {
  res.send("This is from About page..");
});

app.get("/contact", (req, res) => {
  res.send("This is from Contact page..");
});

//Route Parameters

app.get("/courses/:id", (req,res)=>{
    let course = courses.find(course=> course.id === parseInt(req.params.id));
    
    if(!course) res.status(404).send("The course that you have searched does not exists..")
    res.send(course);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`We are listening to ${PORT}`));

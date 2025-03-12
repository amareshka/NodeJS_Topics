const express = require("express");
const app = express();

app.use(express.json());

//Custom middlewares
app.use(function (req, res, next) {
  console.log("Hi I am middleware");
  next(); // Next method is used to pass the control to the next middleware or function
});

app.use(function (req, res, next) {
  console.log("Hi I am second middleware");
  next(); // Next method is used to pass the control to the next middleware or function
});

let courses = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "Javavscript" },
  { id: 4, name: "React JS" },
  { id: 5, name: "Node JS" },
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

app.get("/courses/:id", (req, res) => {
  let course = courses.find((course) => course.id === parseInt(req.params.id));

  if (!course)
    res.status(404).send("The course that you have searched does not exists..");
  res.send(course);
});

// Get all the courses

app.get("/courses", (req, res) => {
  res.send(courses);
});

// Add new course

app.post("/courses/", (req, res) => {
  const newCourse = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(newCourse);
  res.send(newCourse);
});

// Update a course

app.put("/courses/:name", (req, res) => {
  let courseToBeUpdated = courses.find(
    (course) => course.name == req.params.name
  );

  if (!courseToBeUpdated)
    res.status(404).send("The course you want update doesnt exists..");
  courseToBeUpdated.name = req.body.name;
  res.send(courseToBeUpdated);
});

//Delete a course

// app.delete("/courses/:name", (req, res) => {
//   let coursesAfterDeleted = courses.filter(
//     (course) => course.name !== req.params.name
//   );

//   courses = coursesAfterDeleted;
//   res.send(courses);
// });

app.delete("/courses/:id", (req, res) => {
  let courseToBeDeleted = courses.find(
    (course) => course.id === parseInt(req.params.id)
  );
  console.log("courseToBeDeleted", courseToBeDeleted);
  if (!courseToBeDeleted)
    res.status(404).send("The course you want to delete doesn't exists..");

  let courseIndex = courses.indexOf(courseToBeDeleted);

  courses.splice(courseIndex, 1);

  res.send(courses);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`We are listening to ${PORT}`));

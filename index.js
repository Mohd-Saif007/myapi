const express = require("express");
const app = express();
app.use(express.json());

let students = [
  { id: 1, name: "Saif", course: "Backend" },
  { id: 2, name: "Aman", course: "Frontend" }
];

app.get("/", (req, res) => {
  res.json({ message: "Saif ka API VPS par chal raha hai " });
});

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.post("/api/students", (req, res) => {
  const student = { id: students.length + 1, ...req.body };
  students.push(student);
  res.status(201).json(student);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server chal raha hai port " + PORT);
});

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment,getFortune } = require('./controller')
const { getStudents, postStudent } = require('./studentController')


app.get("/api/compliment", getCompliment);

app.get("/api/fortunes",getFortune)

app.get('/api/students',getStudents)

app.post('/api/students', postStudent)

app.put('/api/students/:id', updateStudent)

app.listen(4000, () => console.log("Server running on 4000"));

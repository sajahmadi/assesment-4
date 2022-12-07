const students = [
  { id: 1, name: 'Kevin', favoriteFood: 'Chilli'},
  { id: 2, name: "Bob", favoriteFood: "Sushi" },
  { id: 3, name: "Max", favoriteFood: "Pizza" },
  { id: 4, name: "Alex", favoriteFood: "Pasta" },
  { id: 5, name: "Tim", favoriteFood: "Chips" },
];

let studentId = 6
module.exports = {
    getStudents:(req,res) => {
        res.status(200).send(students)
    },
    postStudent:(req,res) => {
        const {name,favoriteFood} = req.body
        students.push({
            id:studentId,
            name,
            favoriteFood
        })
        res.status(200).send(students)
        studentId++
    },
    
updateStudent:(req,res) => {
        const { id } = req.params
        const { newFavorite} = req.body

        const studentIndex = students.findIndex(student => student.id === +id)
        studentIndex === -1 ? res.status(400).send('there is no user with this id') : students[studentIndex].favoriteFood = newFavorite
        
        res.status(200).send(students)
    },
    deleteStudent:(req,res) => {
        const { id } = req.params
    const studentIndex = students.findIndex(student => student.id === +id)    }
}
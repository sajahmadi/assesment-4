const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn =document.querySelector('#fortuneBtn');
const studentBtn = document.querySelector('#get-student');
const displaySection = document.querySelector('#display-section')
const studentForm = document.querySelector('#add-student')
const nameInput = document.querySelector('#name-input')
const foodInput = document.querySelector("#food-input");
const updateForm = document.querySelector("#update-form");
const studentID = document.querySelector("#student-id");
const newFav = document.querySelector("#new-favorite");

const BaseURL = 'http://localhost:4000'

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {

            const data = res.data;
            alert(data);
    });
};


const getFortune = () => {
axios
.get(`{$BaseURL}/api/fortune`)
.then((res) => alert(res.data))
.catch((err) => console.log(err))
};

const displayStudents = (arr) => {
    displaySection.innerHTML = ``
    console.log(arr);
    arr.map(student => {
let cardHeading = document.createElement('div')
card.innerHTML = `
<h2>${student.name}</h2>
<h4>${student.favortieFood}</h4>
`
displaySection.appendChild(card)
    })

};

const getStudent = () => {
    axios.get(`${BaseURL}/api/students`)
    .then(res => displayStudents(res.data))
    .catch(err => console.log(err))
}

const postStudent = (event) => {
 event.preventDefault()
 let body = {
    name:nameInput.value,
    favoriteFood:foodInput.value
 }
 axios.post(`${BaseURL}/api/students`,body)
 .then(res => displayStudents(res.data))
 .catch(err => console.log(err))

 nameInput.value = ''
 foodInput.value = ''
}

const updateStudent = (event) => {
    event.preventDefault()

    axios.put('${BaseURL}/api/students/${StudentId.value}?newFavortie=${newFav.value}')
    .then(res => displayStudents(res.data))
    .catch(err => console.log(err))
}

updateForm.addEventListener('submit',updateStudent)
studentBtn.addEventListener('click', getStudent);
fortuneBtn.addEventListener('click', getFortune);
complimentBtn.addEventListener('click', getCompliment);
studentForm.addEventListener('submit',postStudent)

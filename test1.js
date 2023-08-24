// write a program to get the list of people who having hobby of sports
// write a program to get age>30 people

// -> must use functions 
// -> use below object
var students = [{
    "name": "John",
    "age": 22,
    "hobby": {
		"reading" : true,
		"gaming" : false,
		"sport" : "football"
    },
    "class" : ["JavaScript", "HTML", "CSS"]
},
{
    "name": "sandeep",
    "age": 35,
    "hobby": {
		"reading" : true,
		"gaming" : false,
		"sport" : "cricket"
    },
    "class" : ["React", "HTML", "CSS"]
},
{
    "name": "Phani",
    "age": 30,
    "hobby": {
		"reading" : true,
		"gaming" : false,
		"sport" : "cricket"
    },
    "class" : ["React"]
}]

function studentsAge(eAge){

const age = students.filter((item) => {
	 	 return item.age > eAge
	 })
	
console.log("student age grater than 30 is" , age);


}
studentsAge(30);



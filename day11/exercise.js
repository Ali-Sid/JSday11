// Exercises: Level 1

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// 1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp) // 2.72 3.14 9.81 37 100

// 2. Destructure and assign the elements of countries array to fin, est, sw, den, nor

let [fin, est, ...rem] = countries

console.log(fin, est, ...rem) // Finland Estonia Sweden Denmark Norway

/*
let [fin, est, sw, den, nor] = countries

console.log(fin, est, sw, den, nor) Output: Finland Estonia Sweden Denmark Norway
*/

// 3. Destructure the rectangle object by its properties or keys.

let {width: w, height: h, area: a, perimeter: p} = rectangle
console.log(w, h, a, p = 80) // 20 10 200 80


// Exercises: Level 2

// 1. Iterate through the users array and get all the keys of the object using destructuring

for(const {name, scores, skills, age} of users){
    console.log(`Name: ${name}, Score: ${scores}, Skills: [${skills.join(', ')}], Age: ${age}`)
}

/*
Name: Brook, Score: 75, Skills: [HTM, CSS, JS], Age: 16
Name: Alex, Score: 80, Skills: [HTM, CSS, JS], Age: 18
Name: David, Score: 75, Skills: [HTM, CSS], Age: 22
Name: John, Score: 85, Skills: [HTML], Age: 25
Name: Sara, Score: 95, Skills: [HTM, CSS, JS], Age: 26
Name: Martha, Score: 80, Skills: [HTM, CSS, JS], Age: 18
Name: Thomas, Score: 90, Skills: [HTM, CSS, JS], Age: 20
*/

// 2. Find the persons who have less than two skills

const lessThanTwoSkills = users.filter(user => user.skills.length < 2)
console.log(lessThanTwoSkills) // [ { name: 'John', scores: 85, skills: [ 'HTML' ], age: 25 } ]


// Exercises: Level 3

// 1. Destructure the countries object print name, capital, population and languages of all countries

import {countriess} from './countriesobj.js'

countriess.forEach(({name1, capital, populations, languages}) => {
    console.log(`Name: ${name1}, Capital: ${capital}, Population: ${populations}, Languages: ${languages.join(', ')}`)
})

/*
Name: India, Capital: New Delhi, Population: 1400000000, Languages: Hindi, English, Telugu, Kannada, Urdu, Tamil, Malayalam, Marathi, Gujrati, Punjabi, Bengali
Name: Singapore, Capital: Singapore City, Population: 5453566, Languages: English, Mandarin Chinese, Malay, Tamil
Name: Finland, Capital: Helsinki, Population: 5541017, Languages: Finnish, Swedish
Name: Brazil, Capital: Brasilia, Population: 214326223, Languages: Portuguese
Name: Egypt, Capital: Cairo, Population: 109262178, Languages: Arabic
Name: Russia, Capital: Moscow, Population: 11979529, Languages: Russian
*/

// 2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.


const student = ['Ali', ['HTML, CSS, JS, React'], [90, 80, 85, 95]]

const [name1, skills, [jsScore, , , reactScore]] = student

console.log(name1, skills, jsScore, reactScore) // Ali [ 'HTML, CSS, JS, React' ] 90 95

// 3. Write a function called convertArrayToObject which can convert the array to a structure object.

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

/*console.log(convertArrayToObject(students))
[
{
  name: 'David',
  skills: ['HTM','CSS','JS','React'],
  scores: [98,85,90,95]
},
{
  name: 'John',
  skills: ['HTM','CSS','JS','React'],
  scores: [85, 80,85,80]
}
]
*/


function convertArrayToObject(students){
  const result = students.map(([name2, skills, scores]) => ({
    name2,
    skills,
    scores
  }))
  return result
}

console.log(convertArrayToObject(students))

/*

[
  {
    name2: 'David',
    skills: [ 'HTM', 'CSS', 'JS', 'React' ],
    scores: [ 98, 85, 90, 95 ]
  },
  {
    name2: 'John',
    skills: [ 'HTM', 'CSS', 'JS', 'React' ],
    scores: [ 85, 80, 85, 80 ]
  }
]

*/

/* 4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?
Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets
*/

const studentObj = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}


/*
    {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        {skill: 'HTML',level: 10},
        {skill: 'CSS',level: 8},
        {skill: 'JS',level: 8},
        {skill: 'React',level: 9},
        {skill: 'BootStrap',level: 8}
      ],
      backEnd: [
        {skill: 'Node',level: 7},
        {skill: 'GraphQL',level: 8},
        {skill: 'Express',level: 9}
      ],
      dataBase: [
        { skill: 'MongoDB',level: 7.5},
        { skill: 'SQL',level: 8}
      ],
      dataScience: ['Python','R','D3.js','SQL']
    }
  }
*/

const newStudent = {
  ...studentObj,
  skills: {
    ...studentObj.skills,
    frontEnd: [
      ...studentObj.skills.frontEnd,
      { skill: 'BootStrap', level: 8},
    ],
    backEnd: [
      ...studentObj.skills.backEnd,
      { skill: 'Express', level: 9},
    ],
    dataBase: [
      ...studentObj.skills.dataBase,
      { skill: 'SQL', level: 8},
    ],
    dataScience: [
      ...studentObj.skills.dataScience,
      'SQL',
    ]
  }
}

console.dir(newStudent, {depth: null});

//  console.dir() is used to display the nested objects in a more readable format
// The depth: null option tells console.dir() to display all nested objects and arrays, without truncating the output. This should give you a more detailed view of the contents of the newStudent object.

/*
{
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 },
      { skill: 'BootStrap', level: 8 }
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 },
      { skill: 'Express', level: 9 }
    ],
    dataBase: [ { skill: 'MongoDB', level: 7.5 }, { skill: 'SQL', level: 8 } ],
    dataScience: [ 'Python', 'R', 'D3.js', 'SQL' ]
  }
}
*/


/*
console.dir() is a method in the console object in JavaScript that is used to display the properties of a JavaScript object in a tree-like format in the console. It stands for "console directory" and is commonly used to inspect complex objects, arrays, and other data structures that are not easily displayed in a simple console log statement.

The console.dir() method takes one or two arguments. The first argument is the object that you want to inspect, and the second argument (optional) is an options object that can be used to configure the output. Some of the available options include depth (which determines how many levels deep the output should display) and colors (which indicates whether to display the output with colorized syntax).

Here is an example of how to use console.dir():

const myObj = { a: 1, b: { c: 2 } };
console.dir(myObj);

This would display the following output in the console:

Object
  a: 1
  b:
    c: 2

Note that console.dir() is not supported in all browsers and environments, so it's important to test your code in multiple browsers and platforms to ensure compatibility.
*/    
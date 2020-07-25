const fs = require('fs');

// Grab the string from the JSON file.
const data = fs.readFileSync('../students.json', 'utf8')

const obj = JSON.parse(data)
console.log(obj.students[0])


const getStudentByIndex = function(obj){
  for (let i= 0; i < obj.length; i++){
  const newObj = obj.students;
  return newObj
  
  }
}
// console.log(newObj)

const getStudentByName = function(obj){
  for (let i= 0; i < obj.length; i++){
  if (obj.students[i].name === 'Mesuara' || obj.students[i].name === 'JD' || obj.students[i].name === 'Colin'){
    return obj.students[i].name;
  } else {
    return -1;
}
  }
}

// fs.writeFileSync('../students.json', backToJSON)

const graduateStudent = function(){

} 








if (typeof getStudentByIndex === 'undefined') {
  getStudentByIndex = undefined;
}

if (typeof getStudentByName === 'undefined') {
  getStudentByName = undefined;
}

if (typeof graduateStudent === 'undefined') {
  graduateStudent = undefined;
}


module.exports = {
  getStudentByIndex,
  getStudentByName,
  graduateStudent,
}


const fs = require('fs');

// Grab the string from the JSON file.
// const data = fs.readFileSync('../students.json', 'utf8')

// const obj = JSON.parse(data);


const getStudentByIndex = function(index){
  const data = fs.readFileSync('../students.json', 'utf8')
  const obj = JSON.parse(data);

 return obj.students[index]
  
}


const getStudentByName = function(string){
  const data = fs.readFileSync('../students.json', 'utf8')
  const obj = JSON.parse(data);
//  console.log(obj);

  for (let i= 0; i < string.length; i++){
    if (string === 'Mesuara' || string === 'JD' || string === 'Colin'){
      return obj.students[string];
    } else {
      return -1;
    }
  }
}
// console.log(obj.students[0])


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

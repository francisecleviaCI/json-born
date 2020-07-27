const fs = require('fs');


const getStudentByIndex = function(index){
  const data = fs.readFileSync('../students.json', 'utf8')
  const obj = JSON.parse(data);

 return obj.students[index]
  
}


const getStudentByName = function(string){
  const data = fs.readFileSync('../students.json', 'utf8')
  const obj = JSON.parse(data);

// console.log(obj.students[0])

  for (let i= 0; i < string.length; i++){
    if (string === 'Mesuara' || string === 'JD' || string === 'Colin'){
      return obj.students[i];
    } else {
      return -1;
    }
  }
}



const graduateStudent = function(string){
  const data = fs.readFileSync('../students.json', 'utf8')
  const obj = JSON.parse(data);
  const backToJSON = JSON.stringify(obj)
  fs.writeFileSync('../students.json', backToJSON)
  
  
  for (let i= 0; i < backToJSON.length; i++){
    const newJSON = backToJSON[i];
    if (newJSON === 'Mesuara' || newJSON === 'JD' || newJSON === 'Colin'){
      return newJSON[0][1];
    } 
    // console.log(newJSON);


    }
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

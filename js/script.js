const $ = (id) => document.getElementById(id)
let EmpID, FName, Ext,Email, Department, Submit

EmpID = $('id')
FName= $('name')
Ext= $('ext')
Email= $('email')
Department= $('department')
Submit= $('submit')

function GetDataInputed(EmpID,FName, Ext,Email,Department){

}

Submit.addEventListener('click', function(e) {
e.preventDefault()
console.log(`ID : ${EmpID}`)
console.log(`Name : ${FName}`)
console.log(`Extension : ${Ext}`)
console.log(`Email : ${Email}`)
console.log(`Department : ${Department}`)
})

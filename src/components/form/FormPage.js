import React from 'react'
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const FormPage = () => {
    const[studentData,setStudentData]=useState({
        name:'',
        age:'',
        contactNo:'',
        address:'',
        parentName:'',
        parentNo:'',
        class:'',
        previousSchool:''
    })
    const submitForm=(e)=>{
e.preventDefault()
console.log(studentData)
    }
  return (
    <div style={{margin:'3rem 20rem'}}>
    <Form.Label htmlFor="name">Name</Form.Label>
      <Form.Control
        type="text"
        id="name"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>setStudentData({...studentData,name:e.target.value})}
      />
<Form.Label htmlFor="age">Age</Form.Label>
      <Form.Control
        type="number"
        id="age"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>setStudentData({...studentData,age:e.target.value})}
      />
<Form.Label htmlFor="contactNo">contact No</Form.Label>
      <Form.Control
        type="number"
        id="contactNo"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>setStudentData({...studentData,contactNo:e.target.value})}
      />
      <Form.Label htmlFor="address">Address</Form.Label>
      <Form.Control
        type="text"
        id="address"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>setStudentData({...studentData,address:e.target.value})}
      />
      <Form.Label htmlFor="parentName">Parent Name</Form.Label>
      <Form.Control
        type="text"
        id="parentName"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>setStudentData({...studentData,parentName:e.target.value})}
      />
      <Form.Label htmlFor="parentNo">Parent Number</Form.Label>
      <Form.Control
        type="number"
        id="parentNo"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>setStudentData({...studentData,parentNo:e.target.value})}
      />
      <Form.Label htmlFor="className">Class</Form.Label>
      <Form.Control
        type="text"
        id="className"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>setStudentData({...studentData,class:e.target.value})}
      />
      <Form.Label htmlFor="previousSchool">Previous School</Form.Label>
      <Form.Control
        type="text"
        id="previousSchool"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>setStudentData({...studentData,previousSchool:e.target.value})}
      />
 <Button className='mt-3' variant="primary" onClick={(e)=>submitForm(e)}>Submit</Button>
    </div>
  )
}

export default FormPage

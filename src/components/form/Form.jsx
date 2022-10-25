import { useState } from "react"
import './Form.css'
export default function Form(){
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
    return(
        <>
        <form id="formContainer"onSubmit={(e)=>submitForm(e)}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={(e)=>setStudentData({...studentData,name:e.target.value})}/>
            <br/>
            <label htmlFor="age">Age</label>
            <input type="number" id="age"  onChange={(e)=>setStudentData({...studentData,age:e.target.value})}/>
            <br/>
            <label htmlFor="contactNo">Contact No</label>
            <input type="number" id="contactNo"  onChange={(e)=>setStudentData({...studentData,contactNo:e.target.value})}/>
            <br/>
            <label htmlFor="address">Address</label>
            <input type="text" id="address"  onChange={(e)=>setStudentData({...studentData,address:e.target.value})}/>
            <br/>
            <label htmlFor="parentName">Parent Name</label>
            <input type="text" id="parentName"  onChange={(e)=>setStudentData({...studentData, parentName:e.target.value})}/>
            <br/>
            <label htmlFor="parentNo">Parent No</label>
            <input type="number" id="parentNo"  onChange={(e)=>setStudentData({...studentData, parentNo:e.target.value})}/>
            <br/>
            <label htmlFor="class">Class</label>
            <input type="text" id="class"  onChange={(e)=>setStudentData({...studentData,class:e.target.value})}/>
            <br/>
            <label htmlFor="previousSchool">Previous School</label>
            <input type="text" id="previousSchool"  onChange={(e)=>setStudentData({...studentData,previousSchool:e.target.value})}/>
            <br/>
            <button>Submit</button>
        </form>
        </>
    )
}
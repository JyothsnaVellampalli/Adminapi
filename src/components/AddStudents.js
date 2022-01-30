import React, { useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';



function AddStudents() {
    const url="https://61ee2070d593d20017dbac63.mockapi.io/students/";
    let navigate = useNavigate();
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [mobile,setMobile]=useState("");
    let [cls,setCls]=useState("");

   let obj={name,email,mobile,"class":cls};
   console.log(obj);
   
    // let add= async()=>{
    //     await fetch(url,{
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify({name,email,mobile,"class":cls})
    //     })
    //     .then(response=>response.json())
    //     .then(response=>console.log(response))
    //     .then(res=>navigate('/allstudents'))
    //     .catch(err=>{console.log(err)})
    // }

    //using axios
    let handleSubmit= async()=>{
      try {
        let response = await axios.post(url,{
            name,
            email,
            mobile,
            "class":cls
        })
        console.log(response);
        // if(response.status===201)
            navigate('/allstudents')
        // else
        //     alert("Internal server error!")
        
    } catch (error) {
        console.log(error)
    }
    }
    
    return <>
      <Form>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Name" onChange={b=>setName(b.target.value)} />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="Email" placeholder="Email" onChange={b=>setEmail(b.target.value)}/>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicmobile">
      <Form.Label>mobile</Form.Label>
      <Form.Control type="text" placeholder="mobile" onChange={b=>setMobile(b.target.value)}/>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicclass">
      <Form.Label>Class</Form.Label>
      <Form.Control type="text" placeholder="Class" onChange={b=>setCls(b.target.value)} />
    </Form.Group>
    
    <Button variant="primary" type="submit" onClick={handleSubmit}>
      Submit
    </Button>
  </Form>
    </>
  
}

export default AddStudents

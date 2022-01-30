import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';



function EditStudent() {

    const url="https://61ee2070d593d20017dbac63.mockapi.io/students/" 
     let navigate=useNavigate("");
      let params=useParams();

      let [name,setName]=useState("");
      let [email,setEmail]=useState("");
      let [mobile,setMobile]=useState("");
      let [cls,setCls]=useState("");

    //   let getdata=async()=>{
    //     await fetch(url+params.id)
    //     .then(response=>response.json())
    //     .then(res=>{
    //       setName(res.name)
    //     setEmail(res.email)
    //     setMobile(res.mobile)
    //     setCls(res.class)
    // })
    // .catch(err=>{console.log(err)});
    // }

    let getdata=async()=>{
      try{
        let response=await axios.get(url+params.id)
      setName(response.data.name)
      setEmail(response.data.email)
      setMobile(response.data.mobile)
      setCls(response.data.class)
      }catch(err) {console.log(err)}
    }

    useEffect(()=>{
    getdata()},[])
    
    // let update= async()=>{
    //     await fetch(url+params.id,{
    //         method:'PUT',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify({name,email,mobile,"class":cls})
    //     })
    //     .then(response=>response.json())
    //     .then(res=>navigate('/allstudents'))
    //     .catch(err=>{console.log(err)});
    // }

    let update= async()=>{
      try{
        let response=await axios.put(url+params.id,
          {name,email,mobile,"class":cls}) 
         navigate("/allstudents")
          
      }
      catch(err){console.log(err)}
    }
      
      
      return (
        <div>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} placeholder="Enter Name" onChange={b=>setName(b.target.value)} />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="Email" value={email} placeholder="Email" onChange={b=>setEmail(b.target.value)}/>
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicmobile">
        <Form.Label>mobile</Form.Label>
        <Form.Control type="text" value={mobile} placeholder="mobile" onChange={b=>setMobile(b.target.value)}/>
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicclass">
        <Form.Label>Class</Form.Label>
        <Form.Control type="text" value={cls} placeholder="Class" onChange={b=>setCls(b.target.value)} />
      </Form.Group>
        </Form> 
        
        <Button variant="primary" onClick={update}>
        Update
      </Button>
     
        </div>
      )
  
}

export default EditStudent

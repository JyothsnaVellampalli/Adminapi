import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import axios from 'axios';


const url="https://61ee2070d593d20017dbac63.mockapi.io/students/"
function AllStudents() {
    let [students, setStudents]=useState([]);

    // let getdata=async()=>{
    //     await fetch(url)
    //     .then(response=>response.json())
    //     .then(response=>setStudents(response))
    //     .catch(err=>console.log(err))
    // }

    let getdata= async()=>{
      try{
        let response= await axios.get(url)
        setStudents(response.data)
      }catch(err){console.log(err)}
    }

    useEffect(()=>{
        getdata();
    },[])

    // let DeleteStudent=async(i)=>{
    //     await fetch(url+i,{
    //         method:"DELETE"})
    //         .then(response=>response.json())
    //         .then(response=>getdata())
    // }
    
    let DeleteStudent= async(i)=>{
      try{
        let response=await axios.delete(url+i);
        if(response.status===200)
        getdata()
      }
      catch(error)
      {
         console.log(error)
      }
      
    }
   
      return<>
       <Table hover >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>email</th>
            <th>mobile</th>
            <th>class</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((b)=>{
              return <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{b.mobile}</td>
                <td>{b.class}</td>
                <td>
                <Button variant="danger" size="sm" onClick={()=>DeleteStudent(b.id)}>DELETE</Button>
                <span>  </span>
                <Link to={`/editstudent/${b.id}`}>
                <Button variant="primary" size="sm">EDIT</Button>
                </Link>
                </td>
               
              </tr>
            })
          }
        </tbody>
      </Table>
      </>
  
}

export default AllStudents

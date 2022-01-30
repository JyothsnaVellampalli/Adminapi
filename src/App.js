
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/dashboard';
import AllStudents from './components/AllStudents';
import AddStudents from './components/AddStudents';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import EditStudent from './components/EditStudent';

export const StudentContext=React.createContext();
function App() {
  
  let data = {
    earning:"40,000",
    annual:"2,40,000",
    task:20,
    pending:26
  };
  
  return<>  
    <BrowserRouter>
    <div style={{display:"grid",gridTemplateColumns:"18% 82%"}}>
          <div><Sidebar/></div>
          <div>
            
            <Routes>
              <Route path="/dashboard" element={<Dashboard data={data}/>}/>
              <Route path="/allstudents" element={<AllStudents/>}/>
              <Route path="/addstudents" element={<AddStudents/>}/>
              <Route path='/editstudent/:id' element={<EditStudent/>}/>
              <Route path="/" element={<Dashboard data={data}/>}/>
            </Routes>
           
          </div>
    </div>
    </BrowserRouter>
  </>
  
  
}

export default App;

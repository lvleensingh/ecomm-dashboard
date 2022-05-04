
import React from "react";
import './App.css';
import { Routes, Route}  from "react-router-dom";
import Header from './Header'
import Login from './Login'
import Registration from './Registration'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
 
function App() {
  return (
    <div className="App">
       <Header/>
     <Routes>
       
     <Route path="/" element={<Registration/>}/>

     <Route path="/login" element={<Login/>}/>
     <Route path="/add" element={<AddProduct/>}/>
     <Route path="/update" element={<UpdateProduct/>}/>
    
     </Routes>
    </div>
  );
 

}

export default App;

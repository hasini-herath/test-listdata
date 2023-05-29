import React, { useState } from 'react';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import { ToastContainer } from 'react-toastify';



function App() {
  // const [currentForm, setCurrentForm] = useState('login')
  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  return (

    <div className="App">
      {/* { currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/> } */}
      
      <ToastContainer></ToastContainer>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

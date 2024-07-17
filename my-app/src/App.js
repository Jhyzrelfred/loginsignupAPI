import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import Login from'./loginsignup/Login'
import Signup from'./loginsignup/Signup'

function App() {
  return (


        <div className="App">
          <Login/>
             <Signup/>

        </div>

  );
}

export default App;

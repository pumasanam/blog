import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Form from './Final Project/Form';
import "./App.css";
import Card from './Final Project/Card';
import SingleData from './Final Project/SingleData';
import CreateData from './Final Project/CreateData';
import Admin from './Final Project/Admin';

const App = () => {
  return (
    <>
    <Routes>
      <Route path ="/" element={<Form/>}/>
      <Route path ="/card" element={<Card/>}/>
      <Route path ="/:id" element={<SingleData/>}/>
      <Route path ="/createData" element={<CreateData/>}/>
      <Route path ="/createData/:id" element={<CreateData/>}/>
      <Route path ="/admin" element={<Admin/>}/>
    </Routes>
      
    </>
  );
};

export default App;

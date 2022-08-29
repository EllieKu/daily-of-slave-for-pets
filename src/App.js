import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login'
import Home from './pages/Home';
import RecordList from "./pages/RecordList";
import Reminder from './pages/Reminder'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path=":user" element={<Home />}></Route>
        <Route path=":user/:pet" element={<RecordList />}></Route>
        <Route path="/reminder" element={<Reminder />}></Route>
      </Routes>
    </div>
  )
}

export default App;

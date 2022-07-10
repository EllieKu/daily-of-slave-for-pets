import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RecordList from "./pages/RecordList";
import Reminder from './pages/Reminder'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/record-list" element={<RecordList />}></Route>
        <Route path="/reminder" element={<Reminder />}></Route>
      </Routes>
    </div>
  )
}

export default App;

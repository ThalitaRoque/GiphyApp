import React from 'react';
import {
    BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import "../App.css"
import UploadButton from '../components/UploadButton/UploadButton';
import HomePage from '../pages/HomePage/HomePage';

const GiphysRouter = () => {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/uploadButton" element={<UploadButton />} />
        </Routes>
      </Router>
      </>
  )
}

export default GiphysRouter
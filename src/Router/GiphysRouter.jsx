import React from 'react';
import {
    BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import "../App.css"
import UploadButton from '../components/UploadButton/UploadButton';
import ArtistsPage from '../pages/ArtistsPage/ArtistsPage';
import HomePage from '../pages/HomePage/HomePage';
 import LoginPage from '../pages/Login/LoginPage';
import ReactionPage from '../pages/ReactionPage/ReactionPage';
import SearchPage from '../pages/SearchPage/SearchPage';

const GiphysRouter = () => {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/uploadButton" element={<UploadButton />} />
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/Reaction" element={<ReactionPage />} />
          <Route path="/Artists" element={<ArtistsPage />} />
        </Routes>
      </Router>
      </>
  )
}

export default GiphysRouter
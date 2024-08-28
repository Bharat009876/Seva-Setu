import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct component names
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Notification from './utility/notification';
import { hideNotification } from './reducer/notificationReducer';
import Navbar from './controller/navbar/Navbar';
import Footer from './controller/footer/Footer';
import HomePage from './controller/homePage/HomePage';
import Login from './controller/user/Login';
import TermService from './controller/term/TermService';
import PrivacyPolicy from './controller/term/PrivacyPolicy';

function App() {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector((state) => state.notification);

  const handleClose = () => {
    dispatch(hideNotification());
  };

  return (
    <>
      <Router> {/* Corrected component name */}
        <Navbar />
        <Routes> {/* Corrected component name */}
          <Route path='/' element={<HomePage />} />
          <Route path='/term' element={<TermService />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/signup' element={<Sign />} /> */}
        </Routes>
      </Router>
      <Footer />

      <Notification open={open} handleClose={handleClose} message={message} severity={severity} />
    </>
  )
}

export default App;

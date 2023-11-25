import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Login from './Pages/Login'
import SearchEngine from './Pages/SearchEngine';
import SentimentForm from './Components/Form';
import Signin from './Pages/Signin';
import SignupNew from './Pages/SignupNew';
import ResetPassword from './Pages/ResetPassword';
import SearchEngineNew from './Pages/SearchEngineNew';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" caseSensitive={false} element={<Login />} />
        <Route path="/signupnew" caseSensitive={false} element={<SignupNew />} />
        <Route path="/signup" caseSensitive={false} element={<Signup />} />
        <Route path="/signin" caseSensitive={false} element={<Signin />} />
        <Route path="/resetPassword" caseSensitive={false} element={<ResetPassword />} />
        <Route path="/" caseSensitive={false} element={<SearchEngineNew />} />

        <Route path="/SearchEngine" caseSensitive={false} element={<SearchEngine />} />
        <Route path="/SearchEngineNew" caseSensitive={false} element={<SearchEngineNew />} />
        <Route path="/" caseSensitive={false} element={<SearchEngine />} />
        <Route path="/Home" caseSensitive={false} element={<Home />} />
        <Route path="/Products" caseSensitive={false} element={<Products />} />
        <Route path="/Products/:id" caseSensitive={false} element={<Products />} />


      </Routes>
    </Router>



  );

}

export default App


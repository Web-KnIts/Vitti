import { useEffect, useState } from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from  "./pages/Home/Index"
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Login from "./Authcomponents/login.jsx"
import Register from "./Authcomponents/register.jsx"
import { auth } from './Authcomponents/firebase.js'
// import LocomotiveScroll from "locomotive-scroll"
function App() {
  const [user, setUser] = useState(null);
  // const Locomotive = new LocomotiveScroll();
  useEffect(() => {
    // auth.onAuthStateChanged((user) => {
    //   setUser(user);
    // });
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={user}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App

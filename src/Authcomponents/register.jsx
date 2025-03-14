import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { IoIosCloseCircle } from "react-icons/io";
import { useAuthContext } from "./useAuthContext";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const {user,setUser} = useAuthContext();
  const navigate = useNavigate();


const handleRegister = async (e) => {
  e.preventDefault();

  // Prepare the data to send
  const dataTosend = {
    password: password,
    firstname: fname,
    lastname: lname,
    email: email,
  };

  try {
    const res = await axios.post("http://localhost:4000/register", dataTosend);
  
    console.log(res.data);
    setUser(res.data.success); 
    navigate('/');

  } catch (err) {
    console.error('Error:', err.response ? err.response : err.message);
    navigate('/');
  }
    // try {
    //   await createUserWithEmailAndPassword(auth, email, password);
    //   const user = auth.currentUser;
    //   console.log(user);
    //   if (user) {
    //     await setDoc(doc(db, "Users", user.uid), {
    //       email: user.email,
    //       firstName: fname,
    //       lastName: lname,
    //       photo:""
    //     });
    //   }
    //   console.log("User Registered Successfully!!");
    //   toast.success("User Registered Successfully!!", {
    //     position: "top-center",
    //   });
    // } catch (error) {
    //   console.log(error.message);
    //   toast.error(error.message, {
    //     position: "bottom-center",
    //   });
    // }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
      <form onSubmit={handleRegister} style={{position:"relative"}}>
      <h3>Sign Up</h3>
      <Link to={"/"} style={{position:"absolute",top:"-30px",right:"-40px",}}><IoIosCloseCircle size={39}/></Link>
      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <Link to="/login">Login</Link>
      </p>
    </form>
      </div>
    </div>
  );
}
export default Register;

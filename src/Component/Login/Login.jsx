import React, { useState,createContext } from "react";
import Input from "../Input/Input";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import axios from "axios";


const Login = ({setNameandrole}) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [data,setData] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [submitdisabled, setSubmitDisabled] = useState(false);



//Handle Login Submission
  const handleSubmission = async() => {
    if (!values.username || !values.password) {
      setErrorMsg("Please Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitDisabled(true);
  
  // fetch login details
    try{
    const response = await axios.get(`http://localhost:3000/api/users/${values.username}`)

    const data = await response.data  
    setData(data)  
    setSubmitDisabled(false);
  }
  catch(err){
    console.log(err)
    setErrorMsg('Enter Valid UserName')
  }

  // check Credentials
  if(data.username){
    if(values.password==data.password){
      setNameandrole({username:data.username,role:data.role});
      navigate('/');
    }
    else{
      setErrorMsg("Enter Valid Password");
    }
  }
    
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <Input
          label="Username"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, username: event.target.value }))
          }
          placeholder="Enter Username"
        />
        <Input
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitdisabled}>
            Login
          </button>
          <p>
            Doesn't have an account?
            <span>
              <Link to="/register"> Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

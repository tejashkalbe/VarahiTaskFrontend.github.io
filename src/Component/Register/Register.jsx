import React from "react";

import styles from "./Register.module.css";
import Form from "../Form/Form";
import { Link } from "react-router-dom";


const Register = () => {

const request = 'post';



  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Register Here !</h1>
        <Form req={request} btn='Sign Up' link='/login'/>
        <p>Already have an account?
          <span>
              <Link to="/login"> Login</Link>
          </span>
        </p>
    </div>
  );
};

export default Register;
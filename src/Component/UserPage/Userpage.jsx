import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Form from '../Form/Form';
import styles from './Userpage.module.css'

const Userpage = ({nameandrole}) => {
const [profile,setProfile] = useState([])
const [show,setShow] = useState(false);
const [update,setUpdate] = useState();
const [updateform,setUpdateform] = useState(false); 
const [flag,setFlag] = useState(0)



useEffect(()=>{
  const getdata = async() => {
  const response = await axios.get(`http://localhost:3000/api/users/${nameandrole.username}`);
  const data = await response.data;
  setProfile([data])
  }
  getdata();
},[flag])
console.log(profile)
const handleFlag=()=>{
  setFlag((prev)=>prev+1)
}

const handleView = async() =>{
  setShow(true);
}

const handleUpdate = async(e) =>{
  setUpdate(profile)
  setUpdateform(true)
}

  return (
    <>

    <button onClick={(e)=>{handleView(e)}} className={styles.btn1}>View Profile</button>
    {(show)?<table>
    <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Name</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <th>{profile[0]?.firstname}</th>
            <th>{profile[0]?.lastname}</th>
            <th>{profile[0]?.username}</th>
            <th>{profile[0]?.password}</th>
            <th><button onClick={(e)=>{handleUpdate(e)}} className={styles.btn2}>Update Profile</button></th>
          </tr>
        </tbody>
    </table>:''}
    {(updateform)?<Form req='patch' updateUser={profile} btn='Update Profile' flag={handleFlag} update={setUpdateform}/>:''}
    </>
  )
}

export default Userpage
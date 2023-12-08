import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Form from '../Form/Form'
import styles from './Adminpage.module.css'

const Adminpage = () => {
  const [users,setUsers] = useState()
  const [update,setUpdate] = useState({})
  const [updateform,setUpdateform] = useState()
  const [add,setAdd] = useState()
  const [flag,setFlag] = useState(0)


  // get data for user table
useEffect(() => {
  const getData = async() =>{
    const response = await axios.get(`http://localhost:3000/api/users`);
    const data = await response.data
    // console.log(data);
    const usersdata = data.filter((user)=>{
      return (user.role == 'User')})
      setUsers(usersdata)  
  }
  getData();

},[flag])


const handleFlag=()=>{
  setFlag((prev)=>prev+1)
}

// handle delete
const handleDelete = async(e) =>{
  await axios.delete(`http://localhost:3000/api/users/${e.target.id}`)
  .then((res)=>{
  return res.data;
})
handleFlag()
}


// filter and handle update
const handleUpdate = async(e) =>{
  const updateUser = users.filter(user => {return (user._id === e.target.id)}) 
  setUpdate(updateUser)
  console.log(update);
  setUpdateform(true)
  setAdd(false);
}

// add new data
const handleAdd = async(e) => {
setAdd(true)
setUpdateform(false)
}

return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan={4} className={styles.border1}>User Data</th>
            <th className={styles.border2}><button onClick={(e)=>{handleAdd(e)}} className={styles.add}>Add Data</button></th>
          </tr>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Name</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return(
            <tr key={user._id}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td className={styles.btn}>
                <button id={user._id} onClick={(e)=>{handleUpdate(e)}} className={styles.btn1}>Update</button>
                <button id={user._id} onClick={(e)=>{handleDelete(e)}} className={styles.btn2}>Delete</button>
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
    {/* form for update */}
      {(updateform)?<Form req='patch' updateUser={update} btn='Update Data' flag={handleFlag} update={setUpdateform}/>:''}
    {/* form for add data */}
      {(add)?<Form req='post' btn='Add Data' flag={handleFlag} add={setAdd}/>:''}
    </div>


  )
}

export default Adminpage
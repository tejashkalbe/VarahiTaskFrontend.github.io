import React,{useSate} from 'react'
import Adminpage from '../AdminPage/Adminpage.jsx'
import Userpage from '../UserPage/Userpage.jsx'
import { Link } from 'react-router-dom'
import styles from './Dashboard.module.css'

const Dashboard = ({nameandrole}) => {
  return (
    <div className={styles.container}>
      {(nameandrole.username)?<button className={styles.btn}><Link to='/login' className={styles.link}>Signout</Link></button>:''}
    <h1>Welcome {nameandrole.username} to the Dashboard</h1>

    {/* render component admin and user depend on login */}
    {(nameandrole.role == 'Admin')?<Adminpage/>:(nameandrole.role == 'User')?<Userpage nameandrole={nameandrole}/>:<div className={styles.middle}>
      <h1>Please Login</h1>
      <button className={styles.btn2}><Link to='/login' className={styles.link2}>Login</Link></button>
      </div>}
    </div>
  )
}

export default Dashboard
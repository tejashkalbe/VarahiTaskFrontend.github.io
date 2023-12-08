import './App.css'
import {useState} from 'react'
import Dashboard from './Component/Dashbord/Dashboard.jsx'
import Login from './Component/Login/Login.jsx'
import Register from './Component/Register/Register.jsx'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  const [nameandrole,setNameandrole] = useState({username:"",role:""});

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard nameandrole={nameandrole}/>}/>
        <Route path='/login' element={<Login setNameandrole={setNameandrole}/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

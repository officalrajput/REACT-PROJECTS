import React, { useContext, useState } from 'react'
import userContext from '../Context/UserContext'

const Profile = () => {
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const {setUser}=useContext(userContext)
    const onHandleSubmit =(e)=> {
        e.preventDefault()
        setUser({username,password})

        
    }
  return (<>
  <input type="text"
  placeholder='username'
  value={username}
  onChange={(e)=>setUsername(e.target.value)}
   />
    <input type="text"
  placeholder='password'
  value={password}
  onChange={(e)=>setPassword(e.target.value)}
   />
   <button onClick={onHandleSubmit}>Submit</button></>
  )
}

export default Profile
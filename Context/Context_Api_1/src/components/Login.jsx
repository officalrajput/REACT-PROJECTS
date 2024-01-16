import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
  const{user}=useContext(UserContext)
  if(!user) return <div>Plese Login In The Page</div>
  return <div>Welcome:{user.username}</div>
}

export default Login
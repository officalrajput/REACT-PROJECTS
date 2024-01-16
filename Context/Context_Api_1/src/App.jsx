import React from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'
const App = () => {
  return (
    <UserContextProvider>
    <div>hello my name is Ranu Rajput</div>
    <Login></Login>
    <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
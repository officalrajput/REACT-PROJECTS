import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import "./App.css"
import SideBar from './components/SideBar';
import Header from './components/Header';
import Footer from './components/Footer';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';



const App = () => {
  const[selectedTab,setSelectedTab]=useState("Home")
  return (<div className="container">

  <SideBar  selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>
  <div className="left-section">
  <Header></Header>
  {selectedTab === "Home"?  <PostList></PostList>: <CreatePost></CreatePost>}
  <Footer></Footer>
  </div>
  </div>


  
    
  )
}

export default App
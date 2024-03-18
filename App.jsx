import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Home/Home";
import Aboutus from "./About/Aboutus";
import Course from "./Course/Course";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import {Route,Routes,Router} from "react-router-dom"


function App(){
  return(
    <div>
    <Navbar/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" elements={<Aboutus/>}/>
  <Route path="/course" element={<Course/>}/>
  <Route path="/blogs" element={<Blog/>}/>
  <Route path="/contact" element={<Contact/>}/>
</Routes> 
    </div>
  )
}
export default App 

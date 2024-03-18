import React from "react";
import {Outlet,Link} from "react-router-dom"

function Navbar (){
    return(
        <div>
            <div className="bg-slate-700 h-[700px] text-white">
<div className="flex justify-between  pt-10">
       <div className="" > <h1 className="font-bold  ml-16 text-3xl">🎓Eduford</h1></div>
        <div className="w-[600px] mr-28 flex justify-between ">
      <Link to="/"> Home</Link>
    <Link to="about">About</Link>
    <Link to="course">Course</Link>
    <Link to="blogs">Blogs</Link>
    <Link to="contact">Contact</Link>
        </div>
      </div>
<div>
<h1 className="font-bold text-5xl ml-[400px] mt-72">World's Biggest University</h1>
<p className="ml-16 mt-4">We’re a leading research university with a heart. Founded in the decade that the U.S. Constitution was signed, we’re the nation’s oldest Catholic and Jesuit university. Today we’re a forward-looking, diverse </p>
<p className="ml-80"> community devoted to social justice, restless inquiry and respect for each person’s individual needs and talents..</p>
<button className="border-white w-52 hover:bg-blue-600 h-10 border-2 ml-[600px] mt-10">visit us to no more</button>
</div>
</div>
{/* <Outlet/> */}

        </div>
    )
}

export default Navbar
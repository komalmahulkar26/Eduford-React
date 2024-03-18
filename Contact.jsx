import React from "react";
import About from "../components/About"

function Contact(){
    return(
        <div>

            <div className=" w-[1200px] ml-32 flex justify-center pt-5 pb-10" >

                <div className="w-[600px] "> 
                    <div className="flex mt-2">
                    <div className="mt-3 "> <i class="fa fa-home text-2xl  text-red-600"></i></div>
                   <div div className="ml-5"> <h2 className=" text-2xl">University of Engineering and Management, Gurukul Campus</h2>
                    <p>Jaipur, Rajasthan, India</p> </div></div>
<div className="flex mt-2 ">
<div className="mt-3 "><i class="fa fa-phone text-2xl text-red-600"></i></div>
    <div className="ml-5"><h2 className=" text-2xl">+91 6378281761</h2>
    <p>Monday to Saturday, 10AM to 6PM</p></div>
</div>
<div className="flex mt-2">
<div className="mt-3 "><i class="fa fa-envelope text-2xl  text-red-600"></i></div>
   <div className="ml-5"> <h2 className="text-2xl">email@gmail.com</h2>
    <p>Email us your queries</p></div>
</div></div>
                <div className="border-2 border-slate-400 w-[500px] pl-5 pt-5 h-[450px]" >
                    <input type="text" placeholder="Enter Your Name" className=" bg-slate-200 w-[400px] pl-3 mt-2 h-8"/><br/>
                    <input type="email" placeholder="Enter Your Email" className=" bg-slate-200 w-[400px] pl-3 mt-2 h-8"/><br/>
                    <input type="text" placeholder="Enter Your Subject" className=" bg-slate-200 w-[400px] pl-3 mt-2 h-8"/><br/>
                    <input type="text" placeholder="Your Message" className=" bg-slate-200 w-[400px] h-44 pl-3 mt-2"/>
                    <button className=" w-56 h-12 mt-5 text-blue-500 border-2 border-blue-700 ">Sent Message</button>
                </div>
            </div>
            <About/>
        </div>
    )
}
export default Contact
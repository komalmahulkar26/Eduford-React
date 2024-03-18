import React from "react";
import Course from "../Course/Course";
import Campus from "../components/Campus"
import Facilities from "../components/Facilities";
import Says from "../components/Says";
import Enroll from "../components/Enroll";
import About from "../components/About";


function Home (){
    return(
        <div>
<Course/>
<Campus/>
 <Facilities/>
<Says/>
<Enroll/>
<About/> 
        </div>
    )
}
export default Home
import React from "react";
import About from "./About";

function Facilities (){
    return(
        <div>

<h1 className="text-5xl ml-[630px] pt-14 font-bold">Our Facilities</h1>
            <p className="ml-[280px]  pt-8">We commit to meet the financial need of every admitted undergraduate student. We don’t consider your ability to pay when we review your </p>
           <p className="ml-[350px] pb-8 ">  application, and we don’t base our decision on whether you can cover the cost. If you’re accepted here, you belong here.</p>
            <div className="flex justify-between ml-28  w-[1300px]">
                <div  className="w-[400px]">
                    <img className="rounded-lg "  src="https://engeniusam.github.io/Eduford-University-Website/library.png"/>
               <h1 className="font-bold text-2xl mt-5 mb-3">Undergraduate Programs</h1>
               <p>For decades, Eduford College has improved the health of our communities, one graduate at a time. The JoAnn McGrath School of Nursing and Health Professions, as one of the largest nursing schools in Wisconsin, offers a wide array of fully accredited nursing programs, guaranteed clinical placements and a technology-rich Center for Clinical Education.</p>
                </div>
                <div  className="w-[400px]">
                    <img  className="rounded-lg " src="https://engeniusam.github.io/Eduford-University-Website/basketball.png"/>
               <h1 className="font-bold  text-2xl mt-5 mb-3">Graduate Programs</h1>
               <p>Building on our strong roots in leadership, health care and education, Eduford is proud to offer an array of coed graduate programs for women and men who are ready to advance their careers and grow as leaders. The Eduford College Community Psychology Master's program will help you to meet your goals of becoming a Licensed Professional Counselor</p>
                </div>
                <div  className="w-[400px]">
                    <img className="rounded-lg " src="https://engeniusam.github.io/Eduford-University-Website/cafeteria.png"/>
                <h1 className="font-bold text-2xl mt-5 mb-3">Post Graduation</h1>
                <p>The Eduford, as one of the largest nursing schools in Wisconsin, offers a wide array of fully accredited nursing programs, guaranteed clinical placements and a technology-rich Center for Clinical Education. The Eduford College Community Psychology Master's program will help you to meet your goals of becoming a Licensed Professional Counselor.</p>
                </div>
            </div>
            <About/>
        </div>
    )
}
export default Facilities
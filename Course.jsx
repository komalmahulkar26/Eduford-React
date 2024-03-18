import React from "react";
import Facilities from "../components/Facilities"

function  Course(){
    return(
        <div>
            <h1 className="text-5xl ml-[600px] pt-16 font-bold">Courses We Offer</h1>
            <p className="ml-[250px]  pt-5">Explore the intersection of technology and society. Learn about environmental justice. Take the famous Problem of God course. Our innovative</p>
            <p className="ml-[400px] pb-10 ">courses inspire and invite you to help solve some of today’s most pressing local, national and global issues.</p>
          <div className="flex justify-between  mt-10 ml-36 w-[1200px]"> 
            <div className="w-96 p-5 rounded-lg  h-96 bg-[#fff3f3]">
            <h1 className=" font-bold text-2xl pl-10">Undergraduate Programs</h1>
            <p className="p-5">For decades, Eduford College has improved the health of our communities, one graduate at a time. The JoAnn McGrath School of Nursing and Health Professions, as one of the largest nursing schools in Wisconsin, offers a wide array of fully accredited nursing programs, guaranteed clinical placements and a technology-rich Center for Clinical Education.</p>
          </div>
            <div className="w-96  p-5 rounded-lg  h-96 bg-[#fff3f3]">
                <h1 className="font-bold text-2xl pl-14">Graduate Programs</h1>
                <p className="p-5">Building on our strong roots in leadership, health care and education, Eduford is proud to offer an array of coed graduate programs for women and men who are ready to advance their careers and grow as leaders. The Eduford College Community Psychology Master's program will help you to meet your goals of becoming a Licensed Professional Counselor</p>
            </div>
            <div className="w-96 p-5 rounded-lg h-96 bg-[#fff3f3]">
                <h1 className="font-bold  text-2xl pl-14">Post Graduation</h1>
                <p className="p-5">The Eduford, as one of the largest nursing schools in Wisconsin, offers a wide array of fully accredited nursing programs, guaranteed clinical placements and a technology-rich Center for Clinical Education. The Eduford College Community Psychology Master's program will help you to meet your goals of becoming a Licensed Professional Counselor.</p>
                </div></div> 
               <Facilities/>
        </div>
    )
}

export default Course
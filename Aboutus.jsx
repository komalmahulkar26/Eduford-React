import React from "react";
import About from "../components/About"

function Aboutus (){
    return(
        <div>
         <div className="flex justify-center mt-20">
                <div className="w-[450px]">
                    <h1 className="text-4xl font-bold">We are the world's largest teaching platform</h1>
<p className="pt-6">Eduford University is one of the world’s leading academic and research institutions, offering a unique educational experience that prepares the next generation of global citizens to lead and make a difference in the world. We are a vibrant community of exceptional students, faculty, alumni and professionals dedicated to real-world applications of our research, scholarship, faith and service. Established in 1989, Eduford is the nation’s oldest Catholic and Jesuit university. Drawing upon the 450-year-old legacy of Jesuit education, we provide students with a world-class learning experience focused on educating the whole person through exposure to different faiths, cultures and beliefs.</p>
<button className=" w-48 text-blue-700 h-14 mt-4 border-red-600 border-2 hover:bg-blue-600 ">EXPLORE NOW</button>
                </div>
                <div> 
                    <img className="w-[500px] ml-12 mt-5" src="https://uniofeduford.netlify.app/images/about.jpg"/>
                </div>
            </div>
            <About/>
        </div>
    )
}
export default Aboutus
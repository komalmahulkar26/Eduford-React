import React from "react";

function Campus (){
    return(
        <div>
            <h1 className="text-5xl ml-[550px] pt-14 font-bold">Our Global Campus</h1>
            <p className="ml-[220px]  pt-8">The University of Hartford's main campus is located on Bloomfield Avenue. Surrounded by green space, the main campus is divided into residential </p>
            <p className="ml-[280px] pb-8">and academic buildings connected by a bridge that overlooks the north branch of the Park River, known to us as Hog River.</p>
            <div className="flex justify-between ml-28  w-[1300px]">
                <div  className="w-[400px]">
                    <img className="rounded-lg"  src="https://engeniusam.github.io/Eduford-University-Website/london.png"/>
                </div>
                <div  className="w-[400px]">
                    <img  className="rounded-lg " src="https://engeniusam.github.io/Eduford-University-Website/newyork.png"/>
                </div>
                <div  className="w-[400px]">
                    <img className="rounded-lg " src="https://engeniusam.github.io/Eduford-University-Website/washington.png"/>
                </div>
            </div>
        </div>
    )
}

export default Campus
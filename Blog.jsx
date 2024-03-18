import React from "react";
import About from "../components/About";

function Blog(){
    return(
        <div>

<div className="flex justify-center mt-20">
    <div className="w-[600px]">
        <img  className="w-[600px]" src="https://uniofeduford.netlify.app/images/certificate.jpg"  />
        <h1 className="text-4xl font-bold mt-10 mb-5">Our Certificate & Online Programs For 202</h1>
        <p>In sollicitudin elit dolor. Suspendisse lacinia vitae mi et tincidunt. Etiam magna magna, bibendum non est in, hendrerit aliquet urna. Donec elementum, lectus non tempor laoreet, nisl tellus vestibulum felis, eget ornare neque ante vel arcu. Nullam nec vulputate ligula, suscipit congue velit. Ut elementum vulputate nulla suscipit pretium. Curabitur et mi urna. Vestibulum sit amet pulvinar erat, id varius lacus. Proin nunc mi, tempus auctor euismod in, bibendum id tortor. Quisque eget hendrerit enim. Etiam consectetur sapien nisl, in porta erat placerat eu. Maecenas fermentum nisi eget mi bibendum dignissim. Integer varius interdum est, eu mollis sem euismod a. Nullam eget blandit mi.</p>

<p className="mt-4">In sollicitudin elit dolor. Suspendisse lacinia vitae mi et tincidunt. Etiam magna magna, bibendum non est in, hendrerit aliquet urna. Donec elementum, lectus non tempor laoreet, nisl tellus vestibulum felis, eget ornare neque ante vel arcu. Nullam nec vulputate ligula, suscipit congue velit. Ut elementum vulputate nulla suscipit pretium. Curabitur et mi urna. Vestibulum sit amet pulvinar erat, id varius lacus. Proin nunc mi, tempus auctor euismod in, bibendum id tortor. Quisque eget hendrerit enim. Etiam consectetur sapien nisl, in porta erat placerat eu. Maecenas fermentum nisi eget mi bibendum dignissim. Integer varius interdum est, eu mollis sem euismod a. Nullam eget blandit mi.</p>

<p className="mt-4">In sollicitudin elit dolor. Suspendisse lacinia vitae mi et tincidunt. Etiam magna magna, bibendum non est in, hendrerit aliquet urna. Donec elementum, lectus non tempor laoreet, nisl tellus vestibulum felis, eget ornare neque ante vel arcu. Nullam nec vulputate ligula, suscipit congue velit. Ut elementum vulputate nulla suscipit pretium. Curabitur et mi urna. Vestibulum sit amet pulvinar erat, id varius lacus. Proin nunc mi, tempus auctor euismod in, bibendum id tortor. Quisque eget hendrerit enim. Etiam consectetur sapien nisl, in porta erat placerat eu. Maecenas fermentum nisi eget mi bibendum dignissim. Integer varius interdum est, eu mollis sem euismod a. Nullam eget blandit mi.</p>
   
   <div className="border-2 h-[400px] mt-5 pt-4 pl-5">
    <h1 className="font-bold  pb-4 text-2xl">Leave a comments</h1>
   <input placeholder="enter your name" className="w-[550px] pl-2 bg-slate-100 h-8"/><br/>
   <input placeholder="enter your email" className="w-[550px] pl-2 bg-slate-100 h-8 mt-4"/><br/>
   <input placeholder=" your comments"  className="w-[550px] text-white pl-2 bg-slate-100  h-[150px] mt-4"/><br/>
   <button className="border-2 text-blue border-blue-600  w-36  mt-5 h-12">comment</button>
   </div>
    
    </div>
    <div className="w-[400px] h-[350px] bg-white pl-14 ">
<div className=" text-white pl-24 pt-4 font-bold text- pb-5 w-80 bg-red-400">Post Categories</div>
<div className="flex justify-between w-72 pl-5 pt-3">
<p>Buisness Analytics</p>
<p>21</p>
</div>
<div className="flex justify-between  pl-5 w-72 h-10 pt-3"><p>Technologies</p>
<p>25</p>
</div>
<div className="flex justify-between pl-5 w-72  h-10 pt-3"><p>Database Analytics</p>
<p>58</p>
</div>
<div className="flex justify-between w-72  pl-5 h-10 pt-3"><p>Artificial Intellegence</p>
<p>57</p>
</div>
<div className="flex justify-between w-72 pl-5 h-10 pt-3"><p>Machine Learning</p>
<p>69</p>
</div>
<div className="flex justify-between w-72 pl-5 h-10 pt-3"><p>Covid-19 Analytics</p>
<p>63</p>
</div>
<div className="flex justify-between w-72  pl-5 h-10 pt-3"><p>Buisness Analytics</p>
<p>78</p>
</div>
 </div>
</div>
<About/>
        </div>
    )
}

export default Blog
"use client"
import { useContext, useState } from "react";
import Image from "next/image";
import { AnimatedTooltipPreview } from "@/components/box";
import Link from "next/link";
import axios from "axios";
import {CheckContext} from "../state/ApiContext";




export default function Social() {
 const [message,getMessage] = useState<string>('')

 
  const {check} = useContext(CheckContext);
  const {mail} = useContext(CheckContext)
 
  

const handelSubmit=async()=>{
    if(message==''){
        alert('enter your message')
    }
    else{
alert('message sent')
 getMessage('')
 try {
  await axios.post("/api/mailSend", { text: message, email:mail  });
} catch (error) {
  console.error("Failed to send OTP email:", error);
}
}
}



  return (
    
  <>
  
    <div className="relative z-10">
    <div className="mt-40 flex flex-col items-center"> 
      <h2 className="text-2xl font-bold mb-4 text-red-500  ">Connections</h2> 
      <ul className="grid grid-cols-3 gap-8 sm:scale-75 md:scale-110"> 
        <li className="flex items-center hover:scale-110 transition duration-300 ease-in-out"> 
          <Link href="https://www.instagram.com/eohofficial/">
       
              <i className="fab fa-instagram mr-2 text-blue-500"></i>
              <Image alt="Instagram" src="/Insta.png" width={100} height={100} />
            
          </Link>
        </li>
        <li className="flex items-center hover:scale-110 transition duration-300 ease-in-out">
          <Link href="https://discord.com/invite/Cdmzst5CcY">
    
              <i className="fab fa-discord mr-2 text-blue-700"></i>
              <Image alt="Discord" src="/disc.jpeg" width={100} height={100} />
         
          </Link>
        </li>
        <li className="flex items-center hover:scale-110 transition duration-300 ease-in-out">
          <Link href="https://linkedin.com/in/shubham-sharma-75b0b41a1">
            
              <i className="fab fa-linkedin-in mr-2 text-blue-800"></i>
              <Image alt="LinkedIn" src="/link.png" width={100} height={100} />
            
          </Link>
        </li>
        <li className="flex items-center hover:scale-110 transition duration-300 ease-in-out">
          <Link href="https://www.youtube.com/channel/UCB1_CmHFVGTeo6PIh9Xderw">
           
              <i className="fab fa-youtube mr-2 text-red-500"></i>
              <Image alt="YouTube" src="/insta.jpeg" width={100} height={100} /> {/* Fix image path */}
         
          </Link>
        </li>
        <li className="flex items-center hover:scale-110 transition duration-300 ease-in-out">
          <Link href="https://open.spotify.com/artist/6IuimoWY5soB0Qrj4mt90J">
   
              <i className="fab fa-spotify mr-2 text-green-500"></i>
              <Image alt="Spotify" src="/spotify.jpeg" width={100} height={100} />
           
          </Link>
        </li>
        <li className="flex items-center hover:scale-110 transition duration-300 ease-in-out">
          <Link href="https://open.spotify.com/artist/6IuimoWY5soB0Qrj4mt90J">
       
              <i className="fas fa-apple mr-2 text-gray-700"></i> {/* Fix icon for Apple Music */}
              <Image alt="Apple Music" src="/apple.png" width={100} height={100} />
            
          </Link>
          </li>
          </ul>
      <div className="relative z-10 mt-10 justify-center items-center">
  <h3 className="flex justify-center text-xl font-medium mb-2">Query or Support</h3>
  
   <div className="flex items-center"> 
    <input 
    value={message}
    onChange={(e)=>getMessage(e.target.value)}
      type="text"
      placeholder={check ?"Type Message":"Login First"} 
      className={check ?"text-black p-2 rounded-md border border-gray-300 w-full focus:outline-blue-500 focus:border-blue-500 mt-2 ":"text-black p-2 rounded-md border border-gray-300 w-full focus:outline-blue-500 focus:border-blue-500 mt-2 pointer-events-none"}
    />
    <button onClick={handelSubmit} className={check ? "ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 focus:outline-none mt-2 ":"ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 focus:outline-none mt-2 pointer-events-none"}>
      Submit
    </button>
  </div>
  
   

  
  
</div>
<section className="members-section flex flex-col items-center justify-center mt-20">
      <h1 className="text-2xl font-semibold mb-8 text-center">Band</h1>
      <div className="flex grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatedTooltipPreview/>
      </div>
    </section>

    </div>
   
    </div>
    
    
    </>
  
  );
}

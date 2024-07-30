"use client"
import SigninButton from "@/components/login"
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"
import { ReactNode, useEffect, useState } from "react"
import Image from "next/image"
import { CheckProvider } from "../state/ApiContext"




type LayoutProps = {
  children: ReactNode;
};




export default function Layout({children}: LayoutProps){
  const [check,setCheck] = useState<boolean>(false)
  const [showFooter,setShowFooter] = useState<boolean>(false)
  const [mail,setMail] = useState<string>("")
  const [logout,setLogout] = useState<boolean>(false)

 

  useEffect(() => {
    const timeoutId = setTimeout(() => setShowFooter(true), 500); 

    return () => clearTimeout(timeoutId); 
  }, []);

  


 const handelCheck=(value:boolean)=>{
  setCheck(value)
 }

  return (
    <CheckProvider check = {check} mail = {mail} >
    <>
   
  
  
    <div className="relative z-10 overflow-x-hidden ">
    
     <div className="top-0 left-0 w-full fixed p-16 bg-opacity-80 bg-black z-40">
    
        <SigninButton handelCheck={handelCheck} setMail = {setMail} setLogout = {setLogout}/>
        <Navbar check = {check} logout = {logout} setLogout={setLogout}/>
        <div className="fixed right-5 md:top-14 sm:top-14 sm:right-1 md:right-3">
          
          <Image src = "/eoh.png" alt = "EOH" width={60} height={60}/>
         
        </div>

        
      </div>
      
      <div>
      {children}
      </div>
     

      
<footer className=" bottom-0 left-0 w-full bg-black text-white ">{showFooter && <Footer/>}</footer>

      
  
    
     
      
      </div>
    
       
      
    </>
   </CheckProvider>
  )
}
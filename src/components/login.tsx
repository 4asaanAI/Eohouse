"use client";
import React from "react";
import { useState,useEffect } from "react";
import SignUp from "./sign_up";
import { useRouter } from "next/navigation";






export default function SigninButton({handelCheck,setMail,setLogout}) {
  const [onClose,setOnClose] = useState<boolean>(false)
  const [registered,setRegistered] = useState<boolean>(false)
  const [login,setLogin] = useState<boolean>(true)
  const [out,setOut] = useState<boolean>(false)
 
  
  

  const router = useRouter()
  const handelSignIn = ()=>{
       
       setOnClose(true)
       setOut(false)
  }
  const handelLogin=()=>{
    setRegistered(false)
    setLogin(true)
    setOut(true)
    handelCheck(false)
    setLogout(true)
    
   
}


  useEffect(() => {
    
    
      if(registered){handelCheck(true)}
      else{handelCheck(false)}
  },[registered,handelCheck] );

 

 

  useEffect(()=>{
    if(out){
      router.push('/')
    }
    
  },[router,out])

  
  return (
    <>
   
    <div className="relative z-50">
    {login && (
    <button
      className="fixed  hover:bg-white hover:text-red-600 md:top-14 sm:-mt-1 sm:rounded-2xl md:left-5 sm:left-2 px-4 py-2 md:rounded-md bg-red-600 text-white  "
      onClick={() => handelSignIn()} 
    >
      Login
    </button>
        
    )}
    
    <SignUp  onClose  = {onClose} setOnClose = {setOnClose} setRegistered = {setRegistered} setLogin = {setLogin} setMail = {setMail} login = {login}/>
   
    <div>
      {registered && (<button  className="fixed  hover:bg-white hover:text-red-600 top-16 left-5 px-4 py-2 sm:left-2 sm:top-16 sm:rounded-xl rounded-md bg-red-600 text-white " onClick = {()=>handelLogin()}>Logout</button>)}
     
  </div>
  </div>
  <div>
  
  </div>
  
    </>
  );
}



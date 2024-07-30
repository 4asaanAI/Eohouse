"use client";
import React from "react";
import axios from "axios";
import { useState,useEffect } from "react"









export default function SignUp({setOnClose,onClose,setRegistered,setLogin,setMail}){
 
 const [email,setEmail] = useState<string>('')
 const [verification,setVerification] = useState<boolean>(false)
 const [code,getCode] = useState<string>('')
 const [codeGen,getCodeGen] = useState<string>('')
 
 


 const Close = ()=>{
    setOnClose(false)
        setEmail('')
        getCode('')
        setVerification(false)
 }
 const Verification=()=>{
    if(!email.includes('.') || !email.includes('@') || email.includes(" ")){
        alert('Enter Valid Email')
        setVerification(false)
    }
    else{
        setVerification(true)
        alert("OTP Sent On Given Mail")
    }
 }
 const Code = async()=>{
    if(code==codeGen){
        alert('Welcome! Enjoy Music.')
        setOnClose(false)
        setRegistered(true)
        setLogin(false)
        setEmail('')
        getCode('')
        setVerification(false)
        setMail(email)
        try{
          await axios.post('/api/products',{email:email})
        }
        catch(error){
          console.error('failed to fetch email',error)
        }    
    }
    
    else{
        alert('incorrect code try again')
        setRegistered(false)
    }
 }

 useEffect(() => {
  if (verification) {
    let otp: number[] = [];
    for (let i = 0; i < 4; i++) {
      otp.push(Math.floor(Math.random() * 10));
    }
    let join: string = otp.join('');
    getCodeGen(join);
    
 
      const fetch=async()=>{
        
        try {
          await axios.post("/api/mailSend", { email, otp: join });
        } catch (error) {
          console.error("Failed to send OTP email:", error);
        }
       
      }
      fetch()
      
    
  }
}, [verification]);


   
 return(

<>
  
  {onClose && (
    <div className="vm p-4 fixed top-28 left-0 z-40 sm:mt-2 md:mt-0 rounded bg-gray-800 text-white">
      
      <button className="close bg-red-600 hover:bg-red-700 text-white p-1 absolute top-0 right-0" onClick={Close}>
        x
      </button>
      <h1 className="vt xl fw-bold">Enter Your Email For Verification </h1>
      <input
        className="email text-black border border-gray-400 rounded p-1 w-full"
        type="text"
        placeholder="Enter your Email here"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={Verification}   className="submit bg-red-600 hover:bg-red-700 text-white rounded px-4 py-2 fw-bold mr-3 mt-2">
        Submit
      </button>
      { ( verification &&
        <div className="code">
          <input
            type="text"
            placeholder="Enter your code here"
            className="code-input text-black border border-gray-400 rounded p-2 w-full"
            value={code}
            onChange={(e) => getCode(e.target.value)}
          />
          <button onClick={Code} className="submit bg-red-600 hover:bg-red-700 text-white rounded px-4 py-2 fw-bold">
            Submit
          </button>
        </div>
      )}
      
    </div>
  
  )}
 
</>



  
 )
}
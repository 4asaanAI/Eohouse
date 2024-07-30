"use client"
import React, { useContext, useState, useEffect } from "react";
import {BackgroundGradientDemo} from "@/components/card";
import Payment from "@/components/payment";
import axios from "axios";
import { CheckContext } from "../state/ApiContext";



export default function Join(){
  const [value,getValue] = useState<number>(0)
  const [Qr,getQr]= useState<boolean>(false)
  const [msg,getMsg] = useState<boolean>(()=>{
    if(typeof window !== 'undefined'){
    const msgState = sessionStorage.getItem('msg')
    return msgState? JSON.parse(msgState): false
    }
  })
  const [message,setMessage] = useState<string>('')
  const [card,setCard] = useState<string>('')
  const [num,setNum] = useState<number[]>([])
  const [submit,setSubmit] = useState<boolean>(false)
  const [paid,setPaid] = useState<number[]>([])
  
  const {mail} = useContext(CheckContext)

  useEffect(()=>{
    if(typeof window !== 'undefined'){
sessionStorage.setItem('msg',JSON.stringify(msg))
    }
  },[msg])
  
  const success=async()=>{
    getMsg(true)
    alert("Your message has been sent")
    try {
      await axios.post("/api/mailSend", { resume: message, email:mail,  });
    } catch (error) {
      console.error("Failed to send OTP email:", error);
    }
  }


 return(
    <>
  
   
   
    <div className="relative z-10">
    <div className=" justify-center items-center mt-40">
    <h2 className="flex justify-center text-2xl font-extrabold text-red-900 dark:text-white  lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-900 from-white">Plans</span> 
        </h2>
    
      <BackgroundGradientDemo getValue = {getValue} getQr = {getQr} setCard = {setCard} num={num} setSubmit = {setSubmit} paid = {paid} setPaid = {setPaid} setNum = {setNum}/>
    
   
      
    </div>
    
    
  {Qr && <div className="justify-center"><Payment value = {value} card= {card} setNum = {setNum} num = {num} submit = {submit} setSubmit = {setSubmit} /></div>}
  {value == 1 && !msg && (<div className="speciality-form flex justify-center items-center z-10">
  <input type="text" className="speciality-input border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-black" placeholder="What's your speciality ?"  value = {message} onChange={(e)=>setMessage(e.target.value)}/>
  <button type="submit" className=" mx-2 submit-button border rounded-md bg-red-600 px-4 py-2 text-white font-semibold focus:outline-none hover:bg-red-700" onClick={success}>Submit</button>
</div>)}
{value == 1 && msg && <div className="text-white flex justify-center sm:text-xs md:text-md">Message Sent! Team will review your message and connect via mail.</div>}
</div>
   

    </>
 )
}
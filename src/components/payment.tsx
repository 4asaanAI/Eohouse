'use client'
import React, {  ChangeEvent, useEffect, useState } from "react";
import QRCode from "react-qr-code"
import axios from "axios";
import { useContext } from "react";
import { CheckContext } from "@/app/state/ApiContext";
function Payment({value,card,setNum,num,setSubmit,submit}){
  const [image,setImage] = useState<string|null>(null)
  const {mail} = useContext(CheckContext)
  const [plan,setPlan] = useState<String[]>([])
  const [service,setService] = useState<String[]>([])
  const [mode,setMode] = useState<string>('')
  


  


 const qrValue = `upi://pay?pa=8287185775@pthdfc&pn=Shubham&am=${value}&cu=INR`

 const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
  if (event.target.files && event.target.files[0]) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      if(e.target){
      setImage(e.target.result as string); 
    }
  };

    reader.readAsDataURL(file);
  }
};
  const handelSubmit = async() =>{
    
    if(image==null){
      alert('Select Image')
      
    }
    else{
     
      if(card == 'Fan Subscription'){
        setNum([...num,2])
        setPlan((prevCards)=>[...prevCards,card])
        setMode('join')
      }
      else if(card == 'EOH Subscription'){
        setNum([...num,1])
        setPlan((prevCards)=>[...prevCards,card])
        setMode('join')
      }
      else if(card == 'Music Production'){
        setNum([...num,3])
        setService((prevCards)=>[...prevCards,card])
        setMode('services')
      }
      else if(card == 'Mixing/Mastering'){
        setNum([...num,4])
        setService((prevCards)=>[...prevCards,card])
        setMode('services')
      }
      else if(card == 'Music Production Course'){
        setNum([...num,5])
        setService((prevCards)=>[...prevCards,card])
        setMode('services')
      }
    setSubmit(true)
    
    setImage(null)
   
   
    
    try {
      await axios.post('/api/mailSend', {image:image, email:mail
      });
    } catch (error) {
      console.error('Failed to send email', error);
    }
      try{
        await axios.post('/api/mailSend',{value:card, email:mail})
      }
      catch(error){
        console.error('failed to fetch email',error)
      } 
      
    }
    
   
  
  
};
  
useEffect(()=>{
  const fetcher = async()=>{
  try{
    await axios.post('/api/products',{email:mail, Plan_Name:plan, Mode:mode})
  }
  catch(error){
    console.error('failed to fetch email',error)
  }
}
fetcher() 
},[plan])



useEffect(()=>{
  const fetcher = async()=>{
  try{
    await axios.post('/api/products',{email:mail, Service_Name:service, Mode:mode})
  }
  catch(error){
    console.error('failed to fetch email',error)
  }
}
fetcher() 
},[service])








 return(
  <>

  {!submit ? <><div className="flex justify-center font-bold text-2xl mb-2">
       INR {value}
     </div><div className="flex justify-center">
         <QRCode value={qrValue} size={256} className="bg-white p-4" />
       </div><h1 className="mt-6 justify-center flex font-serif md: text-xl sm:text-sm text-white">Add Detailed Transaction Image For Verification</h1><div className="grid justify-center mt-4">
         <label className="flex flex-col items-center px-1 py-4 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-red-600 hover:text-white transition-all duration-300">
           <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
             <path d="M16.88 9.55c.37-.36.62-.86.62-1.41 0-1.11-.9-2.01-2.01-2.01-.55 0-1.05.25-1.41.62l-2.58 2.58-1.64-1.64-2.58 2.58 4.19 4.19 2.58-2.58-1.64-1.64 2.58-2.58zm-9.54 4.87L6 16.76V15.5l-1.38-1.38-3.24 3.24 1.12 1.12 3.24-3.24L8.5 16v1.26l1.63-1.63-2.79-2.79zM9.8 9.8l1.64 1.64L9.87 13.1l-1.64-1.64 1.57-1.57zM18 2H2c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 14H3V4h14v12z" />
           </svg>
           <span className="mt-2 text-base leading-normal">Select an image</span>
           <input type="file" className="hidden" onChange={handleImageChange} />
         </label>
         {image && (
           <div className="mt-4">
             <img src={image} alt="Selected" className="w-auto h-auto object-cover rounded-lg shadow-lg" />
           </div>
         )}

       </div><div className="flex justify-center">
         <button onClick={handelSubmit} className=" m-2 p-2 border border-black  rounded-md bg-red-600 hover:bg-red-500">Submit</button>
       </div></>: <><div className="flex justify-center text-bold md:text-xl sm:text-xs">Message Sent! We Will Review and Update You Via Mail</div></>}
  </>
 
 )
}
export default Payment
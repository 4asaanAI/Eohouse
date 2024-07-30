"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { useState,useEffect } from "react";
import { useContext } from "react";
import { CheckContext } from "@/app/state/ApiContext";

export function WobbleCardDemo({setActive, setValue, setCard, num, setSubmit, paid, setPaid, setNum}) {

  const [activate,setactivate] = useState<String[]>([])
  const [serviceRecieve,setServiceRecieve] = useState<String[]>([])
  const {mail} = useContext(CheckContext)

  useEffect(()=>{
 
    if(serviceRecieve.includes('Music Production') && activate.includes('3')){
      setPaid((prev)=>[...prev,3])
    }
    if(serviceRecieve.includes('Mixing/Mastering') && activate.includes('4')){
      setPaid((prev)=>[...prev,4])
    }
    if(serviceRecieve.includes('Music Production Course') && activate.includes('5')){
      setPaid((prev)=>[...prev,5])
    }
  },[serviceRecieve,activate])

  useEffect(() => {
    const fetchData = async () => {
       try {
          const response = await fetch(`/api/products?email=${mail}`);
          if (!response.ok) {
             throw new Error(`Error: ${response.status}`);
          }
          const data = await response.json();
          setServiceRecieve(data.service);
          setactivate(data.Activate);
       } catch (error) {
          console.error(error);
       }
    };
  
    fetchData();
  },[] );

  const produce=()=>{
    if(num.includes(3) && paid.includes(3)){
      alert('Your Subscription Is Active')
    }
    else if(num.includes(3)){
      alert('We Will Update On Your Request Soon')
    }
    else{
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
    setActive(true)
    setValue(10000)
    setCard('Music Production')
    setSubmit(false)
    }
  }
  const mix=()=>{
    if(num.includes(4) && paid.includes(4)){
      alert('Your Subscription Is Active')
    }
    else if(num.includes(4)){
      alert('We Will Update On Your Request Soon')
    }
    else{
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
    setActive(true)
    setValue(5000)
    setCard('Mixing/Mastering')
    setSubmit(false)
    }
  }
  const course=()=>{
    if(num.includes(5) && paid.includes(5)){
      alert('Your Subscription Is Active')
    }
    else if(num.includes(5)){
      alert('We Will Update On Your Request Soon')
    }
    else{
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
    setActive(true)
    setValue(20000)
    setCard('Music Production Course')
    setSubmit(false)
    }
  }
useEffect(()=>{
  if(serviceRecieve.includes('Music Production')){
    setNum((prev)=>[...prev,3])
    
  }
  if(serviceRecieve.includes('Mixing/Mastering') ){
    setNum((prev)=>[...prev,4])
   
  }
  if(serviceRecieve.includes('Music Production Course') ){
    setNum((prev)=>[...prev,5])
    
  }

},[activate,serviceRecieve])
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full scale-75">
    
      <WobbleCard
        containerClassName="col-span-1 md:min-h-[300px] md:col-span-2 lg:col-span-2 h-full bg-white min-h-[500px] lg:min-h-[300px]" 
        
      >
       
        <div className="max-w-xs" onClick={produce}>
          <h2 className="md:text-left underline sm:flex sm:-mt-16 sm:text-xl sm:justify-center text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
            Produce Your Music
          </h2>
          <p className="md:mt-3 md:w-1/2 sm:left-2 sm:absolute sm:mt-5 md:text-ledt  md:text-base/6 text-black">
          Compose Music In Your <b>Genre Of Choice </b>For 3 Months. Make Your Artistic Vision. <b>Hire Vocalist/Producer</b> or Solo Your Track. <span className="sm:hidden md:block"><br className="lg:hidden"/>- Sound Design Of Song. <br />- Mixing/Mastering Of Song. <br />- Composition Of Music. <br /> - Many More Stuff Including FLP Zip File.</span>
          </p>
        </div>
        <Image onClick={produce}
          src="/produce.webp"
          width={400}
          height={500}
          alt="linear demo image"
          className="absolute sm:bottom-0 sm:w-full md:w-screen sm:h-auto sm:left-0 md:ml-56 md:h-full md:top-0 grayscale filter  object-contain"
        /> 
        {paid.includes(3) ? <div className="absolute -left-2 -bottom-1 text-white bg-red-600 hover:bg-red-600 focus:outline-none px-2 py-1  font-medium sm:px-4 sm:py-2 lg:px-6 lg:py-3 ">Purchased</div>:
        num.includes(3) ? <div className="absolute -left-2 -bottom-1 text-white bg-gray-800 hover:bg-red-600 focus:outline-none px-2 py-1  font-medium sm:px-4 sm:py-2 lg:px-6 lg:py-3 ">In Review</div>:
     <button className="absolute -left-2 -bottom-1 text-white bg-gray-800 hover:bg-red-600 focus:outline-none px-2 py-1  font-medium sm:px-4 sm:py-2 lg:px-6 lg:py-3" onClick={produce}>Buy Now</button>
}
      </WobbleCard>
      
      
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-black">
      <div className="max-w-sm" onClick={mix}>
        <h2 className="max-w-80 underline sm:flex sm:-mt-16 sm:text-xl sm:justify-center md:text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Mix/Master Tracks
        </h2>
        <p className="md:mt-4 sm:left-2 sm:absolute sm:mt-5  max-w-[26rem] md:text-left  text-base/6 text-neutral-200">
          Brings Your Music To Life By <b>Mixing/Mastering Your Tracks</b> With Experts, FLP Will Be Provided. This Pack Includes: <br className="lg:hidden"/><br />- Vocal Mixing. <br />- Track Mastering. <br />- Sound Mixing. <br />- Structuring Song With 3 Month Duration.
        </p>
        
        </div>
        {paid.includes(4) ? <div className="absolute -left-2 -bottom-1 text-white bg-red-600 hover:bg-red-600 focus:outline-none px-2 py-1  font-medium sm:px-4 sm:py-2 lg:px-6 lg:py-3" onClick={mix}>Purchased</div>:
        num.includes(4)? <div className="absolute -left-2 -bottom-1 text-white bg-gray-800 hover:bg-red-600 focus:outline-none px-2 py-1  font-medium sm:px-4 sm:py-2 lg:px-6 lg:py-3" onClick={mix}>In Review</div>:
     <button className="absolute -left-2 -bottom-1 text-white bg-gray-800 hover:bg-red-600 focus:outline-none px-2 py-1  font-medium sm:px-4 sm:py-2 lg:px-6 lg:py-3" onClick={mix}>Buy Now</button>
        }
      </WobbleCard>
      
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-red-700 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm" onClick={course}>
          <h2 className="md:text-left sm:flex sm:-mt-16 underline sm:text-xl sm:justify-center text-balance text-base md:text-xl lg:text-3xl lg:w-full lg:flex lg:justify-center font-semibold  text-white">
            EOH Production Course
          </h2>
          <p className="md:mt-4 lg:mt-2 sm:left-2 sm:absolute sm:mt-5 max-w-[26rem] text-left   text-neutral-200 lg:w-full">
           - Full Music Production Course Of 3 Months From <b> Fundamentals to Advance. </b> <br />- Course Includes <b>Composition, Sound Design, Mix/Master, FL Studio Basic, VST Plugins Learning, Beat Making, Effect Plugins Learning, etc. </b> <br /><span className="sm:hidden md:block">- You Will Be Able To<b> Produce Your Own Music Of Favourite Genre, Mix/Master Any Song, Make Your Own Beats and Much More </b> </span>
          </p>
        </div>
        <Image onClick={course}
          src="/course.jpeg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute sm:bottom-0 sm:w-full md:mt-40 lg:mt-0 md:w-full sm:h-auto sm:left-0 lg:left-96 lg:ml-12 md:h-full md:top-0 filter  object-contain"
        />{
          paid.includes(5) ? <div className="absolute -left-2 -bottom-1 text-white bg-red-600 hover:bg-red-600 focus:outline-none px-2 py-1  font-medium sm:px-4 sm:py-2 lg:px-6 lg:py-3" onClick={course}>Purchased</div>:
          num.includes(5) ? <div className="absolute -left-2 -bottom-1 text-white bg-gray-800 hover:bg-red-600 focus:outline-none px-2 py-1  font-medium sm:px-4 sm:py-2 lg:px-6 lg:py-3" onClick={course}>In Review</div>:
          <button className="absolute -left-2 -bottom-1 text-white bg-gray-800 hover:bg-red-600 focus:outline-none px-2 py-1  font-medium sm:px-4 sm:py-2 lg:px-6 lg:py-3" onClick={course}>Buy Now</button>
             }

      </WobbleCard>
    
    </div>
  );
}

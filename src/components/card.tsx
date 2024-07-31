 "use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CheckContext } from "@/app/state/ApiContext";


interface BackgroundGradientDemoProps {
  getValue: (value: number) => void;
  getQr: (value: boolean) => void;
  setCard: (value: string) => void;
  num: number[];
  setSubmit: (value: boolean) => void;
  paid: number[];
  setPaid: (value: number[]) => void;
  setNum: (value: number[]) => void;
  
}

export function BackgroundGradientDemo({
  getValue,
  getQr,
  setCard,
  num,
  setSubmit,
  paid,
  setPaid,
  setNum,
}: BackgroundGradientDemoProps) {
  const [planRecieve,setPlanRecieve] = useState<String[]>([])
  const [activate,setactivate] = useState<String[]>([])
  const {mail} = useContext(CheckContext)
  

  useEffect(() => {
    const fetchData = async () => {
       try {
          const response = await fetch(`/api/products?email=${mail}`);
          if (!response.ok) {
             throw new Error(`Error: ${response.status}`);
          }
          const data = await response.json();
          setPlanRecieve(data.plan);
          setactivate(data.Activate);
       } catch (error) {
          console.error(error);
       }
    };
  
    fetchData();
  },[] );
  

  useEffect(()=>{
    
    if(planRecieve.includes("Fan Subscription") ){
      
      setNum((prev)=>[...prev,2])
      
    }
    if(planRecieve.includes("EOH Subscription")){
      setNum((prev)=>[...prev,1])
     
     
    }
    
  },[planRecieve])
      
 
  const fan =()=>{
    if(num.includes(2) && paid.includes(2)){
      alert('You Have Subscribed.')
     
    }
    else if(num.includes(2)){
      alert('We Will Update On Your Request Soon')
    }
    else{
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
    getValue(2500)
    getQr(true)
    setCard('Fan Subscription')
    setSubmit(false)
    }
}
const member=()=>{
  if(num.includes(1) && paid.includes(1)){
    alert('You Have Subscribed.')
   
  }
  else if(num.includes(1)){
    alert('We Will Update On Your Request Soon')
  }
  else{
  window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
  getValue(5000)
  getQr(true)
  setCard('EOH Subscription')
  setSubmit(false)
  }
}
const team =()=>{
  window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
  getValue(1)
  getQr(false)
}

useEffect(()=>{
 
  if(planRecieve.includes('EOH Subscription') && activate.includes('1')){
    setPaid((prev: number[])=>[...prev,1])
    
  }
  if(planRecieve.includes('Fan Subscription') && activate.includes('2')){
    setPaid((prev: number[])=>[...prev,2])
  }
},[planRecieve,activate])


  return (
  <>
    <div className="sm:grid md:flex justify-center mt-0">
        <div className=" sm:scale-75 sm:hover-90 md:scale-50 md:hover:scale-75" onClick={team}>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-0 sm:p-10 bg-zinc-900">
        <Image
          src={`/supp.jpeg`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
          EOH Membership
        </p>

        <p className="text-sm text-neutral-400">
          - Be Part Of <b className="text-white">EOH Production Team.</b><br/>- Showcase Your Skills, Interview For Specific Production Knowledge.<br />- Roles Open: <b className="text-white">Any Music Skill, Video Editor, Vocalist, Discord/Youtube Mod</b>.<br />- Help and Support EOH In Music Production.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1  mt-4 text-xs font-bold bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            Free
          </span>
        </button>
      </BackgroundGradient>
      </div> 
      <div className="md:scale-75 sm:scale-90 hover:scale-90 " onClick={member}>
      <BackgroundGradient className={num.includes(1)?"rounded-[22px] max-w-sm p-4 sm:p-10 bg-white pointer-events-none":"rounded-[22px] max-w-sm p-4 sm:p-10 bg-white "}>
        <Image
          src={`/mu.jpeg`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 ">
          EOH Subscription
        </p>

        <p className="text-sm text-neutral-600 dark:black">
          - Become An EOH Subscriber For 3 Months.<br/>- Early Access To <b className="text-red-600">Pre-Release Songs.</b><br/>- Royalty Free Music .<br/>- Elevate Status By <b className="text-red-600">Getting Higher Priority</b> Via Giving Specific Role On Youtube & Discord.<br/>- Review of Releasing Songs.<br/>- Can Take Part In <b className="text-red-600">All Online Social Events</b>
        </p>
        {paid.includes(1) ? <div className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-red-600 mt-4 text-xs font-bold  pointer-events-none">Purchased</div>:
        num.includes(1) ? <div className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1  mt-4 text-xs font-bold bg-zinc-800 pointer-events-none">In Review</div> :
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1  mt-4 text-xs font-bold bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
           5000 INR
          </span>
        </button>}
      </BackgroundGradient>
       </div>
       <div className="sm:scale-75 sm:hover-90 md:scale-50 md:hover:scale-75" onClick={fan}>
      <BackgroundGradient className={num.includes(1) ?"rounded-[22px] max-w-sm p-4 sm:p-10  bg-zinc-900 pointer-events-none":"rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900"}>
        <Image
          src={`/fan2.jpeg`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl  mt-4 mb-2 text-neutral-200">
          EOH FanClub
        </p>

        <p className="text-sm text-neutral-400">
         - If You Like EOH Work, This One Is For You.<br/>- <b className="text-white">Social Media Recoginition By Providing Specific Role.</b><br/>- <b className="text-white">Song Requests</b> Will Be Considered.<br/>- 3 Months Membership.<br/>- <b className="text-white">Fan Art Spotlight</b> Will Be Given If EOH Team Really Likes Your Art.<br/>- Exclusive Community Access
        </p>
        {paid.includes(2) ? <div className="rounded-full pl-4 pr-1 py-1 text-black flex items-center space-x-1  mt-4 text-xs font-bold bg-white pointer-events-none">Purchased</div>:
        num.includes(2) ? <div className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1  mt-4 text-xs font-bold bg-zinc-800 pointer-events-none">In Review</div>:
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1  mt-4 text-xs font-bold bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            2500 INR
          </span>
        </button>}
      </BackgroundGradient>
      </div>
     
    </div>
    <div>
    
    
    </div>
    
    </>
    
    
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { Menu, MenuItem, ProductItem} from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


function Navbar({check,logout,setLogout}) {
  const [active, setActive] = useState<string | null>(null);
  const [select,setSelect] = useState<string>(()=>{
    if (typeof window !== "undefined"){
   const sState = localStorage.getItem('select')
  return sState ? JSON.parse(sState): ''
    }
  })
  const [isSelect,setIsSelect] = useState<boolean>(()=>{
    if (typeof window !== "undefined"){
    const selectState = localStorage.getItem('isSelect')
    return selectState ? JSON.parse(selectState): false
    }
  })
  const [closeDiv,setCloseDiv] = useState<boolean>(true)

  useEffect(()=>{
    if (typeof window !== "undefined"){
localStorage.setItem('isSelect',JSON.stringify(isSelect))
}},[isSelect])

 
 

  

  useEffect(()=>{
    if (typeof window !== "undefined"){
localStorage.setItem('select',JSON.stringify(select))
    }
  },[select])
  const handelError=()=>{
    alert("You must login first to view this page")
    setIsSelect(false)
  }
    const open=({title})=>{
      setLogout(false)
      setSelect(title)
     setIsSelect(true)
    }
    const close=()=>{
      setIsSelect(false)
      setSelect('/')
    }
    const handelClose=()=>{
      setCloseDiv(false)
    }
    
     
    
  
  
 
  return (
  
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-40  sm:-left-16  md:left-2")}
    >
      
      <Menu setActive={setActive} >
        <Link href='/' onClick={close} >
      <MenuItem setActive={setActive} active={active} item="Home"/>
      </Link>
      <div onMouseOver={()=>setCloseDiv(true)}>
        <MenuItem setActive={setActive} active={active} item="Menu">
        {closeDiv && <div onClick={handelClose}>
          <div className="text-sm grid grid-cols-2 gap-7 p-3 "  id="close">
            <div className="hover:bg-slate-900 hover:scale-110 p-2 border rounded-md" id="A" onClick={()=>open({title:"About"})}>
            <ProductItem 
              title="About"
              href="/about"
              src="/3k.jpeg"
              description="Unveiling Our Goals To Empower You"
            />
            </div>
            <div onClick={()=>{if(!check){handelError()}else{open({title:"Services"})}}} className="hover:bg-slate-900 hover:scale-110 p-2 border rounded-md" id="B">
            <ProductItem
              title="Services"
              href={check?"/services":"/"}
              src="/master.jpeg"
              description={check?"Let EOH Team Take Part In Achieveing Your Goals": 'Sign in to view this page'}
            />
            </div>
            <div onClick={()=>{if(!check){handelError()}else{open({title:"Join"})}}} className="hover:bg-slate-900 hover:scale-110 p-2 border rounded-md" id="C">
             <ProductItem
            title="Join EOH"
            href={check ? '/join' : '/'}
            src="/join.jpeg"
            description={check ? 'If You Like Our Work, We Got Special Plans For You' : 'Sign in to view this page'}
            />
            </div>
            <div className="hover:bg-slate-900 hover:scale-110 p-2 border rounded-md" id="D" onClick={()=>open({title:"Social"})}>
            <ProductItem
              title="Social Platforms"
              href="/socials"
              src="/a2.jpeg"
              description="Active On Certain Platforms"
            />
            </div>
            </div>
          </div>
          }
        </MenuItem>
        </div>
        { logout === false && isSelect && (<div className=" pointer-events-none sm:hidden md:block"><MenuItem setActive={setActive} active={active} item={select}/></div>)}

      </Menu>
     
    </div>
  );
}

export default Navbar

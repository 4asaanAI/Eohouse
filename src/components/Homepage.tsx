"use client";
import Heading  from "./heading";
import Recommend from "./recommend";
import FlipWordsDemo from "./popup";





export function Homepage(){

    return(<>
    
    <div className="mt-20">
     
        <Heading />
        <Recommend />
        <FlipWordsDemo/>
      </div>
      
    
  
    </>)
}
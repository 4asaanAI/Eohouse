import React from "react";
import { FlipWords } from "./ui/flip-words"; 

export default function FlipWordsDemo() {
  const words = ["Experiance", "Information", "Performance"];

  return (
    <div className=" flex justify-center mt-10  md:hidden">
      <div className="text-md  text-center  font-normal text-white">
        Open Website On Desktop For Optimised <br />
       <FlipWords words={words} /> 
        
      </div>
    </div>
  );
}

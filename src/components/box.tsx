"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Raging",
    designation: "Rapper",
    image: "/raging.jpg", 
  },
  {
    id: 2,
    name: "AJMAXX",
    designation: "Music Producer",
    image: "/aj.jpg", 
  },
  {
    id: 3,
    name: "Nishchint",
    designation: "Vocalist",
    image: "/nishu.jpg", 
  },
  {
    id: 4,
    name: "Electrap",
    designation: "Label",
    image: "/et.jpg", 
  },
  {
    id: 5,
    name: "Melody Capture",
    designation: "Label",
    image: "/mc.jpg", 
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

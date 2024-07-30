"use client"
import { WobbleCardDemo } from "@/components/card2"
import { useState } from "react"
import Payment from "@/components/payment"


export default function Service(){
    const [active,setActive] = useState<boolean>(false)
    const [value,setValue] = useState<number>(0)
    const [card,setCard] = useState<string>('')
    const [num,setNum] = useState<number[]>([])
    const [submit,setSubmit] = useState<boolean>(false)
    const [paid,setPaid] = useState<String[]>([])

   
    
    return(
        <>
       
        <div className="z-10 relative">
        <div className="sm:mt-0 md:mt-24">
        <WobbleCardDemo setActive = {setActive} setValue = {setValue} setCard = {setCard} num = {num} setSubmit = {setSubmit} paid = {paid} setPaid = {setPaid} setNum={setNum}/>
        </div>
        <div className="sm:-mt-24 md:mt-0">
        {active && value != 0  &&(<Payment value = {value} card = {card} setNum = {setNum} num = {num} submit = {submit} setSubmit = {setSubmit} />)}
        </div>
        </div>
        
        </>
    )
}
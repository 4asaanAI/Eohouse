"use client"
import { useState } from "react"
import songs from '@/songs.json' 
import Image from "next/image"
import ReactAudioPlayer from "react-audio-player"

export default function Music(){
    
    
    const [music,setMusic] = useState<number>(0)
    const [stopMusic,setStopMusic] = useState<boolean>(false)
    const [songsPlayed,setSongsPlayed] = useState<number[]>([])
   
    const randomMusic=()=>{
      
      const songsRemain = [0,1,2,3,4,5,6,7,9,10,11,12,13]
        const music = Math.floor(Math.random()*songs.length)
       
        
        if(songsPlayed.includes(music)){
          for(let i = 0; i < songsRemain.length;){
              if(songsPlayed.includes(i)){
                i++
              }
              else{
                setMusic(i)
                setSongsPlayed([...songsPlayed,i])
                break
              }
            
            }
      }
      else{
          setSongsPlayed([...songsPlayed,music])
          setMusic(music)
        }
     

      if(songsPlayed.length == songsRemain.length){
          setSongsPlayed([])
      }
    }

    
   

    
        
    
      

    

        const musicPause = ()=>{
            setStopMusic(true)
           
    }
  

       const musicOn = ()=>{
        setStopMusic(false)
       
       }

    return(
        <>
          
        <div className=" cursor-pointer"    onClick={()=>(!stopMusic ? musicPause(): musicOn())}>    
        {stopMusic && <ReactAudioPlayer src={songs[music]} autoPlay onEnded={randomMusic}/> }
          {stopMusic && <Image src = "/unmute.png" alt = "unmute" height={40} width={40} />}
          {!stopMusic && <ReactAudioPlayer src={songs[music]} /> }
          {!stopMusic && <Image src = "/mute1.png" alt = "mute" height={40} width={40} className=" mt-0.5" onClick={randomMusic}/>}
        </div>
        </>
    )
}
"use client"
import { useEffect, useState } from "react"
import fav from '@/fav.json'
import fav_genre from '@/fav_genre.json'
import { BackgroundBeams } from "./ui/background-beams"


export default function Recommend(){
  const [genre,setGenre] = useState<string>(()=>{
    if (typeof window !== "undefined"){
    const genreState = localStorage.getItem('Genre1')
    return genreState? JSON.parse(genreState): 'Featured'
  }})
  const [subGenre,setSubGenre] = useState<Genre[]>([])
  const [showSubGenre,setShowSubGenre] = useState<boolean>(false)
  const [Song,setSong] = useState<string>(()=>{
    if (typeof window !== "undefined"){
    const SongState = localStorage.getItem('Song1')
    return SongState ? JSON.parse(SongState): ''

  }})
  const [songList,setSongList] = useState<Song[]>([])
  const StoreValue: string[] = Object.keys(fav.List[0])

interface Genre{
     Genre_type: string;
}
interface Song{
  Link:string
}

useEffect(()=>{
  if (typeof window !== "undefined"){
  localStorage.setItem('Genre1',JSON.stringify(genre))
localStorage.setItem('Song1',JSON.stringify(Song))
}},[Song])

  useEffect(()=>{
    fav_genre.Genre.forEach((subGenre)=> {if(subGenre.Genre_type==genre){ setSubGenre(subGenre.Subgenres)}})
  },[genre])

  useEffect(()=>{
    subGenre.map(({Genre_type})=> Genre_type !== ''?setShowSubGenre(true):setShowSubGenre(false))
  
  },[subGenre])
 
  useEffect(()=>{
    if (genre === "Featured") {
      const featuredSong: Song = {  Link:"https://www.youtube.com/embed/8UePP6mvvCo?si=4NjZTqGgLWGNjDcs"};
      setSongList([featuredSong]); 
    }
    else{
     for(let key in StoreValue){
      if(StoreValue[key]==Song){
     fav.List.forEach((list)=>{if(Object.keys(list).includes(StoreValue[key])){setSongList((list[Song]))}})
      }
      }
    }
  },[Song,genre])
 

      return(<><div className="  relative z-10">
 <div className="flex justify-center items-center mt-10">
        <h2 className="text-3xl font-extrabold text-red-900 dark:text-white  lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-900 from-red-500">Favourite</span> Songs
        </h2>
        </div>
        <p className=" mt-5 flex justify-center items-center text-lg font-normal sm:text-xs md:text-lg text-white lg:text-xl md:scale-75 dark:text-white">Listen To What EOH Likes </p>
      <div className="flex justify-center items-center mt-5">
        <div className="flex flex-col items-center justify-center ">
      <select className="text-black font-serif bg-white border border-black  lg:p-1 hover:bg-red-600 hover:text-black rounded-md sm:p-0 md:scale-75 lg:scale-110" onChange = {(e)=>setGenre(e.target.value)} value = {genre}> {fav_genre.Genre.map((element) => <option  key  = {element.Genre_type} value = {element.Genre_type}>{element.Genre_type}</option>)}</select>
      {showSubGenre &&
     <select className="text-black font-serif bg-white border border-black  lg:p-1 hover:bg-red-600 hover:text-black rounded-md sm:p-0  md:scale-75 lg:scale-110"onChange = {(e)=>setSong(e.target.value)} value = {Song}>{subGenre.map(({Genre_type})=><option key = {Genre_type} value = {Genre_type}>{Genre_type}</option>)}</select>
     }
     
     
    



     </div>
     
      </div>
      
      <ul className=" flex flex-wrap justify-center items-center mt-4 list-none p-0 m-0 space-x-1"> 
  {songList.map(({ Link }) => (
    <li
      key={Link}
      value={Link}
      className="text-white px-1 py-1 rounded-md mb-2 cursor-pointer border border-white hover:bg-red-600 flex justify-center items-center"
    >
      <div className="flex items-center justify-center">
  <iframe width="500" height="315" src={Link} className="sm:w-72 lg:w-96 "title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share " referrerPolicy="strict-origin-when-cross-origin" ></iframe>
  </div>
    </li>
    
  ))}
  
</ul>


</div>
<BackgroundBeams/>

    </>)
}
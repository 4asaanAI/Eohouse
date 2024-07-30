"use client"
import { useEffect, useState } from "react"
import Genre from '@/Genre.json'
import Song_List from '@/Song_List.json'



export default function Heading(){
  const [genre,setGenre] = useState<string>(()=>{
    if (typeof window !== "undefined"){
    const genreState = localStorage.getItem('Genre')
    return genreState? JSON.parse(genreState): 'Featured'
    }})
  const [subGenre,setSubGenre] = useState<Genre[]>([])
  const [showSubGenre,setShowSubGenre] = useState<boolean>(false)
  const [Song,setSong] = useState<string>(()=>{
    if (typeof window !== "undefined"){
    const SongState = localStorage.getItem('Song')
    return SongState ? JSON.parse(SongState): ''
    }
  })
  const [songList,setSongList] = useState<Song[]>([])
  const StoreValue: string[] = Object.keys(Song_List.List[0])


useEffect(()=>{

},[])

useEffect(()=>{if (typeof window !== "undefined"){
  localStorage.setItem('Genre',JSON.stringify(genre))
localStorage.setItem('Song',JSON.stringify(Song))
}},[Song])


interface Genre{
     Genre_type: string;
}
interface Song{
  Link:string
}

  useEffect(()=>{
    Genre.Genre.forEach((subGenre)=> {if(subGenre.Genre_type==genre){ setSubGenre(subGenre.Subgenres)}})
  },[genre])

  useEffect(()=>{
    subGenre.map(({Genre_type})=> Genre_type !== ''?setShowSubGenre(true):setShowSubGenre(false))
  
  },[subGenre])
 
  useEffect(()=>{
    if (genre === "Featured") {
      const featuredSong: Song = {  Link:"https://www.youtube.com/embed/WcXwtp2qJRQ?si=v-3Epjx_AX66utWp"};
      setSongList([featuredSong]); 
    }
    else{
     for(let key in StoreValue){
      if(StoreValue[key]==Song){
     Song_List.List.forEach((list)=>{if(Object.keys(list).includes(StoreValue[key])){setSongList((list[Song]))}})
      }
      }
    }
  },[Song,genre])


      return(<>
      <div className="relative z-20">
 <div className="flex justify-center items-center mt-40">
        <h2 className="text-3xl sm:text-2xl md:text-3xl font-extrabold text-red-900 dark:text-white  lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-900 from-red-500">EDGE OF HEAVEN</span> Music
        </h2>
        </div>
        <p className=" mt-5 flex justify-center items-center md:text-xs sm:text-xs sm:align-text-bottom font-normal text-white lg:text-xl dark:text-white">Listen Most Popular Genre Playlists Produced By EOH  </p>
      <div className="flex justify-center items-center mt-5">
        <div className="flex flex-col">
      <select className="text-black font-serif bg-white border border-black  md:p-1 lg:p-1 hover:bg-red-600 hover:text-black rounded-md sm:p-0 md:scale-75 lg:scale-110"  onChange = {(e)=>setGenre(e.target.value)} value = {genre}> {Genre.Genre.map((element) => <option className=""  key  = {element.Genre_type} value = {element.Genre_type}>{element.Genre_type}</option>)}</select>
      {showSubGenre &&
     <select className="text-black font-serif bg-white border border-black md:p-1 lg:p-1 hover:bg-red-600 hover:text-black rounded-md sm:p-0 md:scale-75 lg:scale-110" onChange = {(e)=>setSong(e.target.value)} value = {Song}>{subGenre.map(({Genre_type})=><option key = {Genre_type} value = {Genre_type}>{Genre_type}</option>)}</select>
     }
     
    
     
     </div>
     
      </div>
      <ul className="flex sm:flex-wrap justify-center mt-4 list-none p-0 m-0 space-x-1"> 
  {songList.map(({ Link }) => (
    <li
      key={Link}
      value={Link}
      className="text-white px-1 py-1 rounded-md mb-2 cursor-pointer border border-white hover:bg-red-600 flex justify-center items-center"
    >
      <div className=" flex justify-center items-center">
    <iframe width="500" height="315" src={Link} className="sm:w-72 lg:w-96" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={false} ></iframe>
   </div>
    </li>
  ))}
</ul>
</div>
    </>)
}
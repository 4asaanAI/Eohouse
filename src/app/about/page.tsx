
export default function About(){


    return(
        <>
        
        <div className="absolute inset-0 justify-center items-center p-10  bg-black bg-opacity-50">
        <h2 className="text-3xl font-extrabold text-red-900 dark:text-white  lg:text-6xl flex items-center justify-center mb-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-900 from-red-500 mt-28">WHY EOH ?</span>
        </h2>
        <p className=" mt-4 sm:text-sm md:text-lg text-center"> I&apos;m a Person with the channel named <b className="text-red-600">Edge Of Heaven</b>, it&apos;s a music production channel. <br /><br />
          As a musician myself, I understand the magic of turning a fleeting idea into a song. With years of experience crafting polished tracks, both in the studio and on stage, I try to bring a unique perspective to each of my upcoming songs.
          <br /><br />
          Whether you&apos;re a seasoned artist or just starting out, my services can help you translate your musical vision into a reality. <br /><br />
          I also collaborate with emerging talents to refine their ideas and arrange them into a cohesive masterpiece. My services cover everything from <b className="text-red-600">recording and editing to mixing and mastering</b>. <br /><br />
          My core expertise lies in <b className="text-red-600">mixing, mastering, and crafting</b> original music. Let&apos;s work together to transform your vision into something truly special. <br /><br />
          To connect with me on social media, <b className="text-red-600">Scroll Down</b>

</p>
      
        </div>
        <div className=" inset-0  md:mt-28 sm:mt-24 md:p-8 sm:p-8"> 
        <img
             src="/dark.jpeg" 
             alt="Image with transparent background"
             width={50}
             height={30}
             className="w-full h-96 border-red-700"
        />
      
        </div>
        <div className="min-h-60">
  </div>
        
       
        </>
    )
}
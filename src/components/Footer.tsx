import Link from 'next/link';
import Image from 'next/image';
import Music from './music';

export default function Footer() {
  const instaImagePath = '/insta.jpeg';
  const youtubeImagePath = '/Insta.PNG';

  return (
    <div className="relative z-10 ">
    <div className="bg-white mt-20 h-16 flex justify-between items-center p-4 bottom-0 ">
      <div className="flex items-center hover:scale-110 sm:scale-150 md:scale-90 sm:-ml-2 md:-left-2">
      <Link href="https://www.youtube.com/channel/UCB1_CmHFVGTeo6PIh9Xderw" target="_blank">
        <Image src={instaImagePath} alt="Instagram Logo" width={30} height={50} />
        </Link>
        <Link href="https://www.youtube.com/channel/UCB1_CmHFVGTeo6PIh9Xderw" target="_blank">
          <h1 className="text-black hover:text-red-600 sm:text-xs md:text-xl sm:hidden md:block" >Edge Of Heaven</h1>
        </Link>
      </div>
      
      
      
      <Link href = 'https://discord.com/invite/Cdmzst5CcY'>
      <div className="flex items-center  hover:scale-110 border rounded-md bg-blue-300 p-1  md:scale-90 sm:scale-90 md:mr-6" ><Image src = '/disc.jpeg' alt = 'EOH' width={30} height={30} ></Image>
      <Link href="https://www.instagram.com/eohofficial/" target="_blank">
          <h1 className="flex text-black ml-2 hover:text-red-600 sm:hidden md:block ">Island Of Artists</h1>
        </Link></div>
      </Link>
        <div className='flex  hover:scale-110 cursor-pointer sm:-mr-4 md:mr-5   md:scale-110 sm:scale-90'>
        <Music/><h1 className='flex mt-2 text-black sm:hidden md:block'>Music</h1>
      </div>
      <div className="flex items-center  hover:scale-110 sm:scale-75 md:scale-90 sm:-mr-1 md:-mr-10">
        <Image src='/Insta.png' alt="YouTube Logo" width={30} height={30} />
        <Link href="https://www.instagram.com/eohofficial/" target="_blank">
          <h1 className="flex text-black ml-2 hover:text-red-600 sm:text-lg md:mr-10 sm:hidden md:block">Eohofficial</h1>
        </Link>
      </div>
    </div>
    </div>
  );
}

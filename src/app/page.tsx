

import Link from "next/link";



export default function Home() {
  
  return (
    <main > 
      <video src={require("../../public/mov_1.mp4")}
      autoPlay
      muted
      loop
      playsInline
      className="h-screen w-full object-cover object-center"
      
      ></video>

        

      

      <div className="absolute top-0 flex min-h-screen w-full bg-black bg-opacity-35 text-opacity-100 justify-center items-center font-mono z-0">
        
        <div className="grid grid-rows-3 h-[150px] text-white  ">
        <p className="text-4xl  tracking-wide flex justify-center items-center">Hermes.ai</p>
        <p className="text-xl tracking-wide flex justify-center items-center">Travel Care free</p>  
        <div className="flex justify-center items-center">

        <Link href="/home" className="bg-white rounded-xl w-fit p-2 text-black tracing-wider">Try Now!</Link>
        </div>
        </div>  
        
       </div>
       
       </main>
    
  );
}

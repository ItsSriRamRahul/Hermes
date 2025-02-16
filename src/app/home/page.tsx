'use client'
import React from 'react'
import { useState } from 'react'

const HomePage
 = () => {
  const[text,setText] = useState('')
  const [res,setResponse]=useState('')
  const [load,setLoad] = useState(false)
  return (
    <div className='md:h-screen h-[95vh] flex'>

      {/* {navbar} */}
      <div className='h-full bg-black text-white px-20 md:flex flex-col hidden '>
        <p className='text-2xl p-2'>Vayuv.ai</p>
        <div className='flex flex-col my-auto justify-around  h-[300px] p-4'>
        <div className='text-xl  '> Explore</div>
        <div className='text-xl  '> Flights</div>
        <div className='text-xl  '> Hotels</div>
        <div className='text-xl '> Settings</div>

        </div>
      </div>

      {/* {body} */}
      <div className='w-full flex flex-col  '>
        <div className='flex-1 flex flex-col p-20 gap-4'>
        <div className='flex justify-start items-start  text-white text-xl '>
           <p className='bg-black text-white p-3 rounded-xl'> {text}
            </p> 
            </div>
            <div className='flex justify-end items-end  text-white text-xl '>
           <p className='bg-black text-white p-3 rounded-xl'> {load? "loading": `${res}`}
            </p> 
            </div>
        </div>

        <div className=' p-5 mx-auto w-3/4'>
          
            <input type='text' className='bg-black text-white shadow-md w-full p-2 rounded-xl' 
            placeholder="Where's your destination"
            onChange={(e)=>{
              setText(e.target.value)
            }}
            value={text}
            onKeyDown={async(e)=>{
              if(e.key =="Enter"){
                setLoad(true);
                await fetch('/api/generation'
                  ,{method:"POST",
                    body:JSON.stringify({
                      prompt: text
                    }),
                  }
                ).then((response)=>{
                  response.json().then((data)=>{
                    setResponse(data.text);
                    
                    setLoad(false)
                  })
              })
                setText('')
              }
            }}
            />

        </div>
      </div>
      {/* map */}
        
    </div>
  )
}

export default HomePage

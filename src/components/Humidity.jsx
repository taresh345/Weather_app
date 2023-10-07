import React from 'react'
import humidity_icon from "../assets/humidity.png";



const Humidity = ({humidity}) => {
  return (
<>
      <div className=" bg-stone-900 rounded-3xl absolute h-full w-full opacity-80 "></div>
      <div className=' absolute z-10 flex  flex-col h-[80%]   md:w-full md:h-full
      justify-center 
      place-items-center  
      
      '>
        <h1 className=' text-2xl md:text-4xl flex flex-row  
        place-items-end
        max-w-full
        text-neutral-300 
        font-[poppins]
        


        mx-10
         md:pr-70
        font-medium md:font-semibold
        md:place-items-end'>Humidity 
  
        <img src={humidity_icon} alt="humidity"  
        className='   object-scale-down mx-10 h-[50%] w-[20%] 
        
        md:object-scale-down md:h-[100%]   md:max-w-[30%]  md:mx-2
        
        '
        />
  
  
  
        </h1>
  
        <h1 className="text-6xl md:text-9xl text-start text-stone-200 font-['poppins']
              font-normal 
      
      ">{humidity}%</h1>
        
  
        
      
      
      </div>
</>
  )
}

export default Humidity
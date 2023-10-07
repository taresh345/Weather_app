import React from 'react'
import wind from '../assets/wind.png'


const Windspeed = ({windSpeed ,unit}) => {
  return (
<>
      <div className=" bg-stone-900 absolute rounded-3xl h-full w-full opacity-80 "></div>
      <div className=' absolute z-10 flex  flex-col h-[80%] w-[80%]  md:w-full md:h-full
      justify-center 
      place-items-center  
      
      
      '>
        <h1 className=' text-2xl md:text-4xl 
        
   
        flex flex-row  
        h-[50%]
        w-full
        place-content-center   
        place-items-end
        text-neutral-300 
        font-[poppins]
        
        md:font-semibold
      
        md:h-[30%]
        md:place-items-start'>Wind Speed
  
        <img src={wind} alt="windspeed"  
        className='   object-scale-down mx-10 h-[50%] w-[20%] 
        
        md:object-scale-down md:h-[100%]   md:max-w-[30%]  md:mx-2
        
        '
        />
  
  
  
        </h1>
  
        <h1 className="text-6xl md:text-9xl text-start text-stone-200 font-['poppins']
              font-normal
              max-w-full
              flex flex-row
              place-items-end
      
      ">{windSpeed} 
      
      


{    (unit=='metric' || unit=='standard')?  
       <div className="text-sm"> m/sec </div>:
       <div className="text-sm"> miles/hr </div>
        
        }
        
        
        
       
        </h1>
        
  
        
      
      
      </div>
</>




  )
}

export default Windspeed
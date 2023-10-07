import React from "react";
import clouds from "../assets/clouds.png";
import clear from "../assets/clear.png";
import drizzle from "../assets/drizzle.png";
import humidity from "../assets/humidity.png";
import mist from "../assets/mist.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";
import haze from "../assets/haze.png";

const TempAndCity = ({weather,temp,unit,city}) => {
  const maindata = [
    { weather: "Clouds", img: clouds },
    { weather: "Clear", img: clear },
    { weather: "Drizzle", img: drizzle },
    { weather: "Humidity", img: humidity },
    { weather: "Mist", img: mist },
    { weather: "Rain", img: rain },
    { weather: "Snow", img: snow },
    { weather: "Wind", img: wind },
    { weather: "Haze", img: haze },
  ];

  const symbol=[
    {unit:'standard',symbol:'K'},
    {unit:'metric',symbol:'C'},
    {unit:'imperial',symbol:'F'},


]

const displayData = maindata.filter((item)=>{
    if (item.weather==weather){
        return item
    }


})

const displaySymbol=symbol.filter((item)=>{
    if (item.unit ==unit){
        return item
    }



})

  

  return (
<>
<div className=" absolute w-full h-full flex flex-col ">
    
         <div className="flex flex-row w-full h-[50%] place-content-center " >
           <h1 className="
            font-['poppins']
            min-w-[40%]
             font-semibold
             text-[6rem]
             text-center
              text-stone-200
              flex flex-row
              items-center
              ">{Math.round(temp)} 
              <div className=" mb-10 text-4xl flex">
                {(displaySymbol[0].unit==='metric'||displaySymbol[0].unit==='imperial') &&
              
              <div> &deg; </div>}{displaySymbol[0].symbol} </div> </h1>
       
           <img src={displayData[0].img} alt="weather" className=" mx-5 object-scale-down h-[65%] w-[20%] self-center "  />
    
       
         </div>
    
    <h3 className="text-4xl text-start text-neutral-300 font-['poppins']
            font-normal mx-16 tracking-widest
    
    ">{city} </h3>
    <h3 className="text-4xl text-start text-neutral-300 font-['poppins']
            font-normal  tracking-widest
    
    ">{`${weather} expected `}</h3>
    
         
    
</div>
      
</>
      )
};

export default TempAndCity;

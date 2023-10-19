import React, { useEffect, useState } from "react";

import "./App.css";
import TempAndCity from "./components/TempAndCity";
import Input from "./components/Input";
import Humidity from "./components/Humidity";
import Windspeed from "./components/Windspeed";

{
  /* layout of the app lies here  */
}
function App() {
  const [currData, setCurrData] = useState({});
  const [resData, setResData] = useState(null);
  const [error, setError] = useState(false);

  const apikey = "Your key here";

  // for getting name metric of the city
  const getData = (data) => {
    setCurrData(data);
  };

  // fetches data from openweather api
  useEffect(() => {
    //fetches data only if currdata.city if filled
   
   async function fetchData() 
   { if (currData.city) {
    
      await fetch(
         "https://api.openweathermap.org/data/2.5/weather?units=" +
           currData.unit +
           "&q=" +
           currData.city +
           "&appid=" +
           apikey
       )
         .then((response) =>
         {
          if(!response.ok){ throw Error('Invalid city')}
          
          return( response.json() )      })
         .then((response) => {
           console.log(response);
           setResData(response);
           setError(false)
         })
         .catch((err) => { 
           setError(true)
           console.log(err.message);
         })
 }}
 fetchData() 

  }, [currData]);


  return (
    <>
      {/* outer container =set blur image  */}
      <div
        className="
        relative
        h-screen max-w-full
        mx-1 
        flex
        sm:mx-20 md:mx-24  
        md:min-w-max
    
      "
      >
        <div className="absolute w-full h-full bg-[url('src/assets/bgimage.jpg')]  blur-md "> </div>  


        {/*bg image  container   */}
        <div className="  max-h-[90%] w-full  m-2 md:m-7  p-1  md:p-12 
                        bg-[url('src/assets/bgimage.jpg')] bg-cover bg-center
                        grayscale
                      

        
        ">


          







          {/*  two columns of equal len  and  two rows   - GRID CONTAINER*/}
          <div
            className="grid h-full w-full grid-cols-2 grid-rows-[1fr_.8fr_.8fr_1fr]  
                                  gap-3
                                  md:grid-rows-2
                                  min-w-max">




            {/* input info */}
            <div className=" mx-5 row-start-1 col-span-2 relative">
              <Input onSubmit={getData} />
            </div>



            { // IF ERROR IS THROWN , this div will show
            
            error && <div className=" h-16  bg-stone-900 opacity-80 
            col-start-1 col-span-2 mx-5
            md:mr-10 md:row-start-2 md:col-end-3 
            font-[poppins]
            text-5xl
            text-center
            text-slate-100
            "> INVALID CITY NAME  </div>
            
            }





 




            

            {/* 1st ele  */}
            <div
              className=" row-start-4 col-span-2 mx-5  
                      relative
                      md:row-start-2 md:col-end-2"
            >
              {/* only shows if response data is there */}

              {(resData && !error)&& (
                <TempAndCity
                  weather={resData.weather[0].main}
                  temp={resData.main.temp}
                  unit={currData.unit}
                  city={resData.name}
                />
              )}
            </div>





            {/* 2nd ele */}
            <div
              className=" col-start-1 col-span-2 mx-5
              relative
                md:mr-10 md:col-start-2 md:col-end-3 "
            >

              {(resData && !error) && 
              <Humidity  humidity={resData.main.humidity} />}

            </div>






            {/* 3rd ele */}
            <div
              className="  col-start-1 col-span-2 mx-4 relative
        md:mb-20 md:mr-10 md:col-start-2"
            >
              {(resData && !error) && <Windspeed windSpeed={resData.wind.speed} unit={currData.unit} />}
            </div>






          </div>{" "}
          {/* GRID CONTAINER END */}
        </div>{" "}
        {/* BG IMAGE END */}
      </div>{" "}
      {/* BLUR IMAGE END  */}
    </>
  );
}

export default App;

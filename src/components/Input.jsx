/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Input = (props) => {
  const [showUnit, setShowUnit] = useState(false);
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState('metric');
//   by default the unit will be metric

// on input city change 
  const handleChange = (e) => {
    setCity(e.target.value);
  };


// passing data to app to  city and unit 
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ city,unit }); // fxn coming from App.jsx
    setShowUnit(false)
  };




  return (
<>

      <div className=" absolute min-w-[100%] h-full -z-9 bg-stone-950 opacity-80 rounded-3xl"></div>

      <div className=" z-10 absolute flex flex-col px-10 my-5 min-w-full ">
  
  
        <input type="text"
          id="success"
          className="
    
    my-5

    
    bg-green-50 border text-slate-100  placeholder-slate-200 text-sm rounded-lg focus:ring-grey-500  block w-full p-2.5 dark:bg-gray-700  "
          placeholder="Enter City"
          value={city}
          onChange={handleChange}
        />
  
  
  {/* submit and showunits button  */}
        <section className="flex justify-center mb-5">
          <button
            type="submit"
            className="
        py-2.5
        px-5
         
        opacity-50 hover:opacity-100
        
        text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
         focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto
         text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleSubmit}
          >
            Submit
          </button>
  
          <button
            className="
      ml-10
      py-2.5
      opacity-50 hover:opacity-100
      text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
       focus:ring-blue-300 font-medium rounded-lg text-sm px-5  text-center inline-flex 
       items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => {
              setShowUnit(!showUnit);
            }}
          >
            {" "}
            UNIT
          </button>
        </section>
  
  
  
  
  
  
  {/* revisit an move it to another component */}
  {/* shows only when  there  unit button is pressed */}
        {showUnit && (
          <section className=" flex justify-center gap-2">
            <button
              className="
          
          py-2.5
          pacity-50 hover:opacity-100
          text-white bg-slate-600 hover:bg-blue-800 focus:ring-4 focus:outline-none
         00 font-medium rounded-lg text-sm px-5  text-center inline-flex 
          items-center "
              type="button"
  
              onClick={()=>{
                      setUnit('standard')
  
              }}
            >
              {" "}
              Standard
            </button>
            <button
              className="
          
                        py-2.5
                        pacity-50 hover:opacity-100
                        text-white bg-slate-600 hover:bg-blue-800 focus:ring-4 focus:outline-none
                       00 font-medium rounded-lg text-sm px-5  text-center inline-flex 
                        items-center "
              type="button"
  
              onClick={()=>{
                  setUnit('metric')
  
          }}
            >
              {" "}
              Metric
            </button>
  
            <button
              className="
          
                         py-2.5
                         pacity-50 hover:opacity-100
                         text-white bg-slate-600 hover:bg-blue-800 focus:ring-4 focus:outline-none
                        00 font-medium rounded-lg text-sm px-5  text-center inline-flex 
                         items-center "
              type="button"
              onClick={()=>{
                  setUnit('imperial')
  
          }}
            >
              {" "}
              Imperial
            </button>
          </section>
        )}
      </div>
</>


  );  //return end
};

export default Input;

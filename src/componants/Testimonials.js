
import React, { useState } from "react";
import Card from "./Card";

import {FiChevronLeft ,FiChevronRight} from 'react-icons/fi';

const Testimonial = (props) => {
    let reviews =props.reviews;

    const[shifHandler, setHandler] = useState(0);

    function leftShifHandler(){
         if(shifHandler -1 <0){
            setHandler(reviews.length -1);
         }
         else{
            setHandler(shifHandler -1);
         }
    }
    function rightShiftHandler(){
       if(shifHandler +1 >= reviews.length){
        setHandler(0);
       }
       else{
          setHandler(shifHandler+1);
       }

    }
    function surpriseShiftHandler(){
       let randamShift= Math.floor(Math.random() * reviews.length);
       setHandler(randamShift);
    }

    return(
        <div className="w-[85vw] md:w-[700px] h-[50vh] bg-white flex flex-col justify-center items-center
                          mt-10 p-10 transition-all duration-700 hover:shadow-lg">
            <Card reviews = {reviews[shifHandler]}></Card>
       
            <div className="text-violet-400 mx-auto mt-5">
            
                <button onClick={leftShifHandler}> <FiChevronLeft/> </button>
            
                <button onClick={rightShiftHandler}> <FiChevronRight/> </button>

            </div>
            
            <div>
                <button onClick={surpriseShiftHandler}>
                    Surprise Me!
                </button>
            </div>
        </div>

    )
}

export default Testimonial; 
import React from 'react';
import Image from './Image';
import './Caraousel.css';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const Caraousel = ({image}) => {

    const[slide, setSlide] =useState(0);
    const nextSlide =()=>{
        setSlide(slide===image.length-1?0:slide+1);
    }
    const prevSlide=()=>{
        setSlide(slide===0?image.length-1:slide-1);

    }


  return (
    <div>
    <div className="slider">
        {image.map((data,index)=>{
            return(
                <div className ={index===slide?'active':'slide'} key={index}>
                <Image img={data.img} />     
                </div>
            )
        })}

    </div>
    <div className="roundDiv">
    {image.map(( _,index)=><div className={index===slide?'activeround':'round'} key={index}></div>)}
    </div>
    <FaChevronLeft onClick={prevSlide} className="btnleft" />
    <FaChevronRight  onClick={nextSlide} className="btnright"/>
 
    </div>
  )
}

export default Caraousel
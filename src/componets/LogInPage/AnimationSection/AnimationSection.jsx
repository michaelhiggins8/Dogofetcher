import React from 'react'
import "./AnimationSection.css"
import Lottie from "lottie-react";
import dog_and_man from "../../../assets/dog_man_bw.json";
export default function AnimationSection() {
  return (
    <div className='animation-section'>
        

      <Lottie className = "lottie-bw-dog-man" animationData={dog_and_man} loop={true} />


    </div>
  )

}

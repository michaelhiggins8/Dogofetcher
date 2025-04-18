import React from 'react'
import "./DogDisplayCard.css"
export default function DogDisplayCard({id,img, name, age, zip_code,breed,handleFavoriting}) {
  return (
    <div className='dog-display-card' >
                    <img src = {img} alt="dog img"></img>
            
                    <h1>{name}</h1>
            
            <div className='age-breed-row'>
                    <p>{age} years</p>
                    ·
                    <p>{breed}</p>
            </div>
            
                    <p className='zip-display'>{zip_code}</p>

    </div>
  )
}

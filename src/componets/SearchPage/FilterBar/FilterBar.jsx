import React from 'react'
import "./FilterBar.css"
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'
export default function FilterBar({selectedBreeds,setSelectedBreeds,sortOrder,setSortOrder}) {


  const [breedMenuOpen,setBreedMenuOpen] = useState(false);
  const[breeds,setBreeds] = useState(["Newfoundland","Lhasa","Borzoi"])


  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await axios.get(
          "https://frontend-take-home-service.fetch.com/dogs/breeds",
          {
            withCredentials: true,
          }
        );
  
        setBreeds(response.data); 
      } catch (error) {
        console.error("Failed to fetch breeds:", error);
      }
    };
  
    fetchBreeds();
  }, []);
  







  const handleSelectBreed = (breed) =>{


    if(!selectedBreeds.includes(breed)){
    setSelectedBreeds([...selectedBreeds,breed])
    } else{

      setSelectedBreeds(selectedBreeds.filter((b) => b !== breed));


    }


  }

  return (
    <div className='filter-bar'>
        
        <div className='head-section'>
            <h1> Sort</h1>
            <p>Please select your breeds and alphabetical direction</p>
        </div>
        <div className='alphabetical-section'>
            <p>Alphabetical:</p>
            <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>{sortOrder === "asc" ? "⬇️" : "⬆️"}</button>
        </div>  
        <div className='breed-menu'>                
            <button onClick={()=>setBreedMenuOpen(!breedMenuOpen)}> <span>Breed </span><span>{breedMenuOpen === false ? "⬇️" : "⬆️"}</span></button>
                  <ul>
                        {breedMenuOpen && breeds.map((breed)=>(
                          
                            <>
                            {selectedBreeds.includes(breed)  ? <li className = "selected-included" key = {breed} onClick = {()=>handleSelectBreed(breed)}>{breed}</li> : <li key = {breed} onClick = {()=>handleSelectBreed(breed)}>{breed}</li>}

                            </>
                            
                          ))}
                </ul>
            </div>
    </div>
  )
}

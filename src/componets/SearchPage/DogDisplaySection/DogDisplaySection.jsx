import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import DogDisplayCard from '../DogDisplayCard/DogDisplayCard'
import "./DogDisplaySection.css"
import PaginationBar from './PaginationBar/PaginationBar'
export default function DogDisplaySection({selectedBreeds,dogList,setDogList,sortOrder,favoritedDogs,setFavoritedDogs }) {
  
  const [nextUrl,setNextUrl] = useState(null);
  const [prevUrl,setPrevUrl] = useState(null);
  


useEffect(()=>{



  const logIn = async () => {
    try {
      const response = await axios.get(
        "https://frontend-take-home-service.fetch.com/dogs/search",
        {
          withCredentials: true, 
          params: {
            ageMax: 30,
            ...(selectedBreeds.length > 0 && { breeds: selectedBreeds })     ,
            sort: `breed:${sortOrder}`     
          },
        }
      );
      console.log(response);
      {response.data.next && setNextUrl(response.data.next)}
      {response.data.prev && setPrevUrl(response.data.prev)}

      
      
      



      const dogDetails = await axios.post(
        "https://frontend-take-home-service.fetch.com/dogs",
        response.data.resultIds,
        {
          withCredentials: true,
        }
      );
  
      setDogList(dogDetails.data);

      





      console.log("Login successful:", response);

    } catch (error) {
      console.error("Login failed:", error);
    }




  }
 
  logIn()


},[selectedBreeds,sortOrder])


  
  
    const handleFavoriting = (id,name) =>{


      if (favoritedDogs.some(dog => dog.id === id)) {

        setFavoritedDogs(favoritedDogs.filter(dog => dog.id !== id));
      } else {

        setFavoritedDogs([...favoritedDogs,{id,name}])


      }


    }
  
  
  
  
  
    return (
    <div className='dog-cards-section'>

              <div className='selected-breeds-display'>
                    {selectedBreeds.map((breed)=>(
        
                    <p>{breed}</p>
        
        
                      ))}
              </div>
    
                   
                {
                    
                    dogList.map((dog) => (
                      <div  onClick={() => handleFavoriting(dog.id,dog.name)}  style={{ display: "contents" }}>
                      <DogDisplayCard 
                      key = {dog.id}
                      id = {dog.id}
                      img = {dog.img}
                      name = {dog.name}
                      age = {dog.age}
                      zip_code = {dog.zip_code}
                      breed = {dog.breed}
                      handleFavoriting = {handleFavoriting}
                      /> 
                      </div>
                    ))}


                <PaginationBar nextUrl = {nextUrl} setNextUrl = {setNextUrl} prevUrl = {prevUrl} setPrevUrl = {setPrevUrl} selectedBreeds = {selectedBreeds} setDogList ={setDogList}/> 
      
      </div>
  )
}

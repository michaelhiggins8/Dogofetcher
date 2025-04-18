import React from 'react'
import "./MatchPage.css"
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Lottie from "lottie-react";
import party from "../../assets/party.json";
import DogDisplayCard from '../SearchPage/DogDisplayCard/DogDisplayCard.jsx';
import axios from 'axios';










export default function MatchPage() {

    const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const matchId = searchParams.get("matchId");
const [dogData,setDogData] = useState([]);

useEffect(()=>{const handleDogDetails = async () => {
    try {
        
      
      



      const dogDetails = await axios.post(
        "https://frontend-take-home-service.fetch.com/dogs",
        [matchId],
        {
          withCredentials: true,
        }
      );
  
      

      console.log("dogDetails abc:",dogDetails.data[0]);
      setDogData(dogDetails.data[0])




      console.log("Login successful:", dogDetails);

    } catch (error) {
      console.error("Login failed:", error);
    }




  }
  handleDogDetails()




},[])

 











  return (

    <div className='match-page'>
        <Lottie className="background-lottie" animationData={party} loop={true} />

        <div className='content-wrapper'>
            <h1>It a match!</h1>
            <p>Congratulations we've found your perfect pup! Meet {dogData.name}. We think you will find each other to be, simply paw-some </p>
            <DogDisplayCard 
                              key = {dogData.id}
                              id = {dogData.id}
                              img = {dogData.img}
                              name = {dogData.name}
                              age = {dogData.age}
                              zip_code = {dogData.zip_code}
                              breed = {dogData.breed}                          
              /> 
              <p>Thank you for choosing Dogofetcher</p>
        </div>
                    
    </div>

    
  )
}

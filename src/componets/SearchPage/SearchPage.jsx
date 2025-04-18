import React from 'react'
import axios from 'axios';
import "./SearchPage.css"
import FilterBar from './FilterBar/FilterBar';
import ContentSection from './ContentSection/ContentSection';
import { useState } from 'react';
import DogDisplaySection from './DogDisplaySection/DogDisplaySection';
export default function SearchPage() {


const [idArray,setIdArray] = useState([]);
const[dogList,setDogList] = useState([]);
const [selectedBreeds,setSelectedBreeds] = useState([]);
const [sortOrder, setSortOrder] = useState("asc");
  const [favoritedDogs,setFavoritedDogs] = useState([])


  
  









  return (


    <div className='search-page'>


      <FilterBar selectedBreeds = {selectedBreeds} setSelectedBreeds = {setSelectedBreeds} sortOrder = {sortOrder} setSortOrder = {setSortOrder}/>



      <DogDisplaySection selectedBreeds = {selectedBreeds} dogList = {dogList} setDogList  = {setDogList} sortOrder = {sortOrder} favoritedDogs = {favoritedDogs} setFavoritedDogs = {setFavoritedDogs}/>


        
      <ContentSection favoritedDogs = {favoritedDogs} setFavoritedDogs = {setFavoritedDogs}/>

    </div>



  )
}

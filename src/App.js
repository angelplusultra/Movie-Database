import React, { useState } from "react";
import { useEffect } from "react";

import MovieCard from "./MovieCard";

import './App.css'
import SearchIcon from './search.svg'
const apiKey = '272fc884'

const API_URL = `http://www.omdbapi.com?apikey=${apiKey}`






const movie1 = {
    "Title": "Stalker",
    "Year": "1979",
    "imdbID": "tt0079944",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDgwODNmMGItMDcwYi00OWZjLTgyZjAtMGYwMmI4N2Q0NmJmXkEyXkFqcGdeQXVyNzY1MTU0Njk@._V1_SX300.jpg"
}






const App = () => {

const [movies, setMovies] = useState([])

const [searchTerm, setSearchTerm] = useState('')
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
    }


  
    useEffect(() =>{
        searchMovies('Stalker')
    }, [])
    return(
    <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
            <input className="query" placeholder="Search for Movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
            
            
            
            />
            <img src={SearchIcon}
            alt="search"
            onClick={() => {searchMovies(searchTerm)}}/>

            
        </div>


        {movies?.length > 0 
            ? (
            <div className="container">
            {movies.map((movie) => (
            <MovieCard movie={movie}/>
            ))}
        </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}

       
    </div>
    );
}

export default App
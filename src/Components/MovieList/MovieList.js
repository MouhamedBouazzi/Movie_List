import React from 'react'
import {moviesData} from '../../constants/data'
import Movie from '../Movie/Movie'
import './MoviListe.css'



const MovieList = () => {
  return (
    <div id='card'>
      <h2>Movie List</h2>
      {moviesData.map(  (movie)=> (
      <Movie movie={movie} key={movie.id} />
      ) )}
    </div>
  )
}

export default MovieList

import React from "react";
import PropTypes from "prop-types";
import './Movie.css';
function Movie({title,year,rating,summary,runtime,poster,genres}) {
  
  return (
  <div className="movie">
    <img src={poster} alt={title} title={title} /> 
    <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">year : {year}</h5>
        <p className="movie__rating">rating : {rating}</p>
        <p className="movie__runtime">runtime : {runtime} minute</p>
        <ul className="movie_genres">
          {genres.map((genre,index) => {
          return <li key ={index} className="movie_genre">{genre}</li>;
        })}
        </ul>
        {/* 시놉시스 180자 제한 */}
        <p className="movie__summary">{summary.slice(0,180)}</p>
        
    </div>
  </div> 
  
  
  );
}

Movie.propTypes = {
  title:PropTypes.string.isRequired,
  year:PropTypes.number.isRequired,
  rating:PropTypes.number.isRequired,
  summary:PropTypes.string.isRequired,
  runtime:PropTypes.number.isRequired,
  poster:PropTypes.string.isRequired,
  genres:PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

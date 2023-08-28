import React from "react";
import PropTypes from "prop-types";
import './Movie.css';
function Movie({title,year,rating,summary,runtime,poster}) {
  
  return (
  <div className="movie">
    <img src={poster} alt={title} title={title} /> 
    <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>
        <p className="movie__rating">{rating}</p>
        <p className="movie__runtime">{runtime}</p>

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

};

export default Movie;

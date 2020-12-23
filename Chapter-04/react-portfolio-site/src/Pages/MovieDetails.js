import reactRouterDom from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";

const MovieDetails = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  // UseEffect checking the url every time it changes,
  // and loading the corresponding data for the selected movie
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src="{movie.mainImg}" alt="Movie" />
          </HeadLine>
        </Details>
      )}
    </>
  );
};

const Details = styled.div``;

const HeadLine = styled.div``;

export default MovieDetails;

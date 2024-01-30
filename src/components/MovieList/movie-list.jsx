import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const { type } = useParams();
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => setMovieList(data.results));
  }, []);

  return (
    <div className="movie__list">
      <h2 className="list__title">Movies</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <h1 style={{color: "white"}} >{movie.title}</h1>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

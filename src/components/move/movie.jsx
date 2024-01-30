import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Movie</h1>
      <h1>Movie Id: {id}</h1>
    </div>
  );
};

export default Movie;

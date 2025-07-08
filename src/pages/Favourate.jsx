import "../css/Favorate.css";
import { useMovieContext } from "../context/MoviesContext";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const { favorite } = useMovieContext();

  return favorite.length > 0 ? (
    <div>
      <h2 className="favorites">Your Favorites</h2>
      <div className="movies-grid">
        {favorite.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  ) : (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start Adding Movies......</p>
    </div>
  );
}

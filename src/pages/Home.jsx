import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getMovies, searchMovies } from "../services/api";
import "../css/Home.css";

export default function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const loadPopularMovies = async () => {
      setLoading(true);
      try {
        const popularMovies = await getMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setErr("Failed to load...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(search); // fixed typo
      setMovies(searchResults);
      setErr(null);
    } catch (error) {
      console.log(error);
      setErr("Failed to search...");
    } finally {
      setLoading(false);
    }
    setSearch("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for Movies..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-button">
          Submit
        </button>
      </form>

      {err && <div className="error-message">{err}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

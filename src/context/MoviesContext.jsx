import { createContext, useContext, useEffect, useState } from "react";

export const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const storedFav = localStorage.getItem("favorite");
    if (storedFav) setFavorite(JSON.parse(storedFav));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  const addFavorite = (movie) => {
    setFavorite((prev) => [...prev, movie]);
  };

  const removeFavorite = (movieId) => {
    setFavorite((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorite.some((movie) => movie.id === movieId);
  };

  const value = {
    favorite,
    setFavorite,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

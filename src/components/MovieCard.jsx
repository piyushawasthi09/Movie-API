import "../css/MovieCard.css"
import { useMovieContext } from "../pages/Favourate"


export default function MovieCard({ movie }) {
    const { isFavorate, addFavorate, removeFavorate } = useMovieContext()
    const favorate = isFavorate(movie.id)

    function onFavClick(e) {
        e.preventDefault()
        if(favorate) removeFavorate(movie.id)
        else addFavorate(movie)
    }


    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favorate-btn${favorate ? "active" : ""}`} onClick={onFavClick}>❤️</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>

    </div>
}
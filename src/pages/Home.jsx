import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard"
import { getMovies, searchMOvies } from "../services/api";
import '../css/Home.css'

export default function Home() {
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(null)

    useEffect(() => {
        const loadPopuplarMovies = async () => {
            try {
                const popularMovies = await getMovies();

                setMovies(popularMovies)
            } catch (err) {
                console.log(err);
                setErr("Failed to laod....")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopuplarMovies()
    }, [])

    const handleSubmit = async (e) => {

        e.preventDefault();

        if(!search.trim()) return
        // if the search is true then the page should load again to render  
        if(loading) return
        setLoading(true)

        try {
            const searchResults = await searchMOvies(search)
            setMovies(searchResults)
            setErr(null)
        } catch (error) {
            console.log(error);
            setErr("Failed to Search....")
            
        }
        finally{
            setLoading(false)
        }
        setSearch("" )
        

    }
    return <div className="home">
        <form onSubmit={handleSubmit} className="search-form">
            <label htmlFor="Movie"></label>
            <input type="text" id="Movie" placeholder="Searh for Movies..." className="search-input "
                value={search} onChange={(e) => setSearch(e.target.value)} />
            <button type="submit" className="search-button">Submit</button>

        </form>
        {err && <div className="error-message">{err}</div>}
        {loading ? (<div className="loading">Loading....</div>) : (<div className="movies-grid">
            {movies.map((e) =>(<MovieCard movie={e} key={e.id} />))}
        </div>)}

    </div>
}
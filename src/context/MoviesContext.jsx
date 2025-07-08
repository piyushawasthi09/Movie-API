import { createContext, useContext, useEffect, useState } from "react";

export const MovieContext = createContext()
export const useMovieContext = () =>  useContext(MovieContext)


export const MovieProvider = ({pass}) => {

    const[favorate,setFavourate] = useState([])

    useEffect(()=>{
        const storedFav = localStorage.getItem("favorate")
        if(storedFav) setFavourate(JSON.parse(storedFav))
    },[])

    useEffect(()=>{
        localStorage.setItem('favorate',JSON.stringify(favorate))
    },[favorate])

    const addFavorate = (movie) => {
        setFavourate(prev=> [...prev , movie ])
    }

    const removeFavorate = (movieId) => {
        setFavourate(prev => prev.filter(movie => movie.id !== movieId))

    }

    const isFavourate = (movieId) => {
        return favorate.some(movie => movie.id === movieId)
    }

    const value = {
        favorate,setFavourate
    }
    return <MovieContext.Provider>
        {pass}
    </MovieContext.Provider>

}

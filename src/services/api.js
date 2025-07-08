// Set your API key here
const apiKey = '9183812a6f3f88766b34018e597885fe';
const url = 'https://api.themoviedb.org/3'


export const getMovies = async () =>{
    const res = await fetch(`${url}/movie/popular?api_key=${apiKey}`)
    const data = await res.json();
    return data.results
} 
export const searchMOvies = async (query ) =>{
    const res = await fetch(`${url}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`)
    const data = await res.json();
    return data.results
} 

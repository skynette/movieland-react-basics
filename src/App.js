import { useEffect } from "react";
import './App.css'
import searchIcon from './search.svg'
import MovieCard  from "./MovieCard";


const API_URL = "http://www.omdbapi.com/?apikey=a3fc447f"

const movies = {
	"Title": "Amazing Spiderman",
	"Year": "1979",
	"imdbID": "tt16459816",
	"Type": "movie",
	"Poster": "N/A"
}

const App = () => {

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`)
		const data = await response.json()
		const results = data.Search
		const totalResults = results.length
		console.log(results);
	}
	useEffect(() => {
		// searchMovies('spiderman')
	}, [])

	return (
		<div className="app">
			<h1>Movieland</h1>
			<div className="search">
				<input type="text"
					placeholder="Search for movies..."
					value="Supernatural"
					onChange={() => { }}
				/>
				<img src={searchIcon} alt="Search" onClick={() => { }} />

			</div>
			<div className="container">
				<MovieCard movies={movies} />
			</div>
		</div>
	)
}

export default App
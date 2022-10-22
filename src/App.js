import { useEffect } from "react";
import './App.css'
import searchIcon from './search.svg'
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
				<div className="movie">
					<div>
						<p>{movies.Year}</p>
					</div>

					<div>
						<img src={movies.Poster !== "N/A" ? movies.Poster : "https://via.placeholder.com/400"} alt={movies.Title} />
					</div>

					<div>
						<span>{movies.Type}</span>
						<h3>{movies.Title}</h3>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
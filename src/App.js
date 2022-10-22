import { useEffect, useState } from "react";
import './App.css'
import searchIcon from './search.svg'
import MovieCard from "./MovieCard";


const API_URL = "http://www.omdbapi.com/?apikey=a3fc447f"

const App = () => {
	const [movies, setMovies] = useState([])
	const [searchTerm, setSearchTerm] = useState('')

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`)
		const data = await response.json()
		const results = data.Search
		console.log(results);
		setMovies(results)
	}
	useEffect(() => {
		searchMovies('superman')
	}, [])

	return (
		<div className="app">
			<h1>Movieland</h1>
			<div className="search">
				<input type="text"
					placeholder="Search for movies..."
					value={searchTerm}
					onChange={(e) => {setSearchTerm(e.target.value) }}
				/>
				<img 
					src={searchIcon} alt="Search" 
					onClick={() => searchMovies(searchTerm)} 
				/>

			</div>

			{
				movies?.length > 0 ? (<div className="container">
					{
						movies.map((movie) => (
							<MovieCard movie={movie} />
						))
					}
				</div>) :
					(
						<div className="empty">
							<h2>No movies found</h2>
						</div>
					)
			}

		</div>
	)
}

export default App
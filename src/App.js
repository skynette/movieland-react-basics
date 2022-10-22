import { useEffect, useState } from "react";
import './App.css'
import searchIcon from './search.svg'
import MovieCard from "./MovieCard";


const API_URL = "http://www.omdbapi.com/?apikey=a3fc447f"

const movies = {
	"Title": "Amazing Spiderman",
	"Year": "1979",
	"imdbID": "tt16459816",
	"Type": "movie",
	"Poster": "N/A"
}
const a = [
	{
		"Title": "Italian Spiderman",
		"Year": "2007",
		"imdbID": "tt2705436",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
	},
	{
		"Title": "Superman, Spiderman or Batman",
		"Year": "2011",
		"imdbID": "tt2084949",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
	},
	{
		"Title": "Spiderman",
		"Year": "1990",
		"imdbID": "tt0100669",
		"Type": "movie",
		"Poster": "N/A"
	},
	{
		"Title": "Spiderman",
		"Year": "2010",
		"imdbID": "tt1785572",
		"Type": "movie",
		"Poster": "N/A"
	},
	{
		"Title": "Spiderman and Grandma",
		"Year": "2009",
		"imdbID": "tt1433184",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
	},
	{
		"Title": "Spiderman in Cannes",
		"Year": "2016",
		"imdbID": "tt5978586",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
	},
	{
		"Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
		"Year": "2007",
		"imdbID": "tt1132238",
		"Type": "movie",
		"Poster": "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg"
	},
	{
		"Title": "The Amazing Spiderman T4 Premiere Special",
		"Year": "2012",
		"imdbID": "tt2233044",
		"Type": "movie",
		"Poster": "N/A"
	},
	{
		"Title": "Amazing Spiderman Syndrome",
		"Year": "2012",
		"imdbID": "tt2586634",
		"Type": "movie",
		"Poster": "N/A"
	},
	{
		"Title": "Hollywood's Master Storytellers: Spiderman Live",
		"Year": "2006",
		"imdbID": "tt2158533",
		"Type": "movie",
		"Poster": "N/A"
	}
]
const obj = {
	"Title": "Italian Spiderman",
	"Year": "2007",
	"imdbID": "tt2705436",
	"Type": "movie",
	"Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}
const App = () => {
	const [movies, setMovies] = useState([])

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
					value="Supernatural"
					onChange={() => { }}
				/>
				<img src={searchIcon} alt="Search" onClick={() => { }} />

			</div>

			{
				movies?.length > 0 ? (<div className="container">
					{
						movies.map((movie) => (
							<MovieCard movie={movie}/>
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
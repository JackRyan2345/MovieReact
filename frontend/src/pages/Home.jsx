import MovieCard from "../components/MovieCard";

function Home(){
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "2045"},
        {id: 3, title: "The Matrix", release_date: "2430"},
        {id: 4, title: "Sausage Party", release_date: "2030"}
    ]

    const handleSearch = () => {
        alert("Searching...");
    }

    return (
    <div className = "home">
        <form onSubmit = {handleSearch} className = "search-form">
            <input type = "text"
                   placeholder = "search for movies..."
                   className = "search-input"
            />
            <button type = "submit" className = "search-button">Search</button>
        </form>
        <div className = "movies-grid">
            {movies.map((movie) => (
                <MovieCard movie = {movie} key = {movie.id}/>
            ))}
        </div>
    </div>
    );
}

export default Home
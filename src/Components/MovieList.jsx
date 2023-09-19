// MovieList -  a container for all the Movie components and their data 
import Movie from "./Movie"



export default function MovieList() {
    return (
        <div className="movie-list-container">
            <h1>Movie List</h1>
            <div>
                <Movie nbr='0'/>
                <Movie nbr='1'/>
                <Movie nbr='2'/>
            </div>
        </div>
    )
}
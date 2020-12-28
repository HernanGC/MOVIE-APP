import './App.css';
import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieListHeading from './components/MovieListheading';
import SearchBox from './components/SearchBox';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

const getMovieRequest = async (searchValue) => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=dffc746e`;
  const response = await fetch(url);
  const responseJson = await response.json();
  console.log(responseJson);

  if (responseJson.Search) {
    setMovies(responseJson.Search);
  }
  
}

useEffect( () => {
  getMovieRequest(searchValue);
}, [searchValue] );

  return (
    <div className="container-fluid movie-app">
      <div className="container">
        <div className="row">
          <MovieListHeading heading = 'Movies'/>
           <SearchBox searchValue = {searchValue} 
           setSearchValue={setSearchValue} />
       </div>
      </div>
      <div className="row d-flex justify-content-center">
        <MovieList movies = {movies} />
      </div>
    </div>  
  ); 
};

export default App;

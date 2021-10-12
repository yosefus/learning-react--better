import { useState } from 'react';
import { getMovies } from './../services/fakeMovieService';

function Movies() {
  const [movies, setMovies] = useState(getMovies());

  const deleteMovie = (id) => {
    setMovies(movies.filter((movieTemp) => movieTemp._id !== id));
  };

  const { length } = movies;
  const moviesLengthMsg = `there is ${length} movies in the stock right now`;
  const noMoviesMsg = 'there is no movies yet';

  return (
    <div className="container">
      <h2 className="text-center p-2">{length > 0 ? moviesLengthMsg : noMoviesMsg}</h2>
      {length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">title</th>
              <th scope="col">number In Stock</th>
              <th scope="col">genre</th>
              <th scope="col">daily Rental Rate</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              const { _id, title, numberInStock, genre, dailyRentalRate } = movie;
              return (
                <tr key={_id}>
                  <th scope="row">{title}</th>
                  <td>{numberInStock}</td>
                  <td>{genre['name']}</td>
                  <td>{dailyRentalRate}</td>
                  <td>
                    <button onClick={() => deleteMovie(_id)} className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Movies;

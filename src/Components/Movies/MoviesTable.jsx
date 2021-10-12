import React from 'react';

import { HeartLike } from './../';

function MoviesTable(props) {
  const { length, currentMovies, deleteMovie, handleLike } = props;

  return (
    <>
      <h2 className="text-center p-2">
        {length > 0 ? `there is ${length} movies in the stock right now` : 'there is no movies yet'}
      </h2>
      {length > 0 && (
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">title</th>
              <th scope="col">number In Stock</th>
              <th scope="col">genre</th>
              <th scope="col">daily Rental Rate</th>
              <th scope="col">action</th>
            </tr>
          </thead>

          <tbody>
            {currentMovies.map((movie) => {
              const { _id, title, numberInStock, genre, dailyRentalRate, liked } = movie;

              return (
                <tr key={_id}>
                  <th scope="row">{title}</th>
                  <td>{numberInStock}</td>
                  <td>{genre['name']}</td>
                  <td>{dailyRentalRate}</td>
                  <td>
                    <button onClick={() => deleteMovie(_id)} className="btn  btn-danger btn-sm">
                      Delete
                    </button>
                    <HeartLike onClick={() => handleLike(movie)} like={liked} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default MoviesTable;

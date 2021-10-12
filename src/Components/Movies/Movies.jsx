import { useEffect, useState } from 'react';
// components
import { Pagination, ItemsSelector, MoviesTable } from '../';
// functions
import { getMovies } from '../../services/fakeMovieService';
import { getGenres } from '../../services/fakeGenreService';
import { Paginate } from '../../Utils/Paginate';

function Movies() {
  const [movies, setMovies] = useState([]),
    [pageSize, setPageSize] = useState(4),
    [currentPage, setCurrentPage] = useState(1),
    [genres, setGenres] = useState([]),
    [selectedGenre, setSelectedGenre] = useState();

  useEffect(() => {
    setMovies(getMovies());
    setGenres([{ _id: '123', name: 'All genres' }, ...getGenres()]);
  }, []);

  const deleteMovie = (id) => setMovies((movies) => movies.filter((movieTemp) => movieTemp._id !== id));

  const handleLike = (movie) => {
    const tempMovies = [...movies];
    const index = tempMovies.indexOf(movie);
    tempMovies[index].liked = !tempMovies[index].liked;
    setMovies(tempMovies);
  };

  const onPageChange = (page) => setCurrentPage(page);

  const filteredByGenre =
    selectedGenre && selectedGenre._id !== '123'
      ? movies.filter((m) => m.genre._id === selectedGenre._id)
      : movies;

  const currentMovies = Paginate(filteredByGenre, currentPage, pageSize);

  const onChangeGenres = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  const { length } = filteredByGenre;

  return (
    <div className="container">
      <div className="row">
        <div className="col-3 p-3">
          <ItemsSelector selectedItem={selectedGenre} items={genres} onSelectItems={onChangeGenres} />
        </div>

        <div className="col">
          <MoviesTable
            length={length}
            currentMovies={currentMovies}
            deleteMovie={deleteMovie}
            handleLike={handleLike}
          />

          <Pagination
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={onPageChange}
            moviesLength={length}
          />
        </div>
      </div>
    </div>
  );
}

export default Movies;

import Sortable from 'sortablejs'

const sortMovies = () => {
  const movies = document.getElementById('results');
  const options = {
    animation: '300',
    ghostClass: "ghost"
  }
  Sortable.create(movies, options);
};

export { sortMovies }

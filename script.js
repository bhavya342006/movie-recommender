let movies = [
  // Telugu Movies
  { title: "RRR", rating: 8.0, genre: "family" },
  { title: "Baahubali 2", rating: 8.2, genre: "family" },
  { title: "Pushpa: The Rise", rating: 7.6, genre: "action" },
  { title: "Sita Ramam", rating: 8.6, genre: "romantic" },
  { title: "Agent Sai Srinivasa Athreya", rating: 8.4, genre: "comedy" },
  { title: "Care of Kancharapalem", rating: 8.9, genre: "romantic" },
  { title: "Cinema Bandi", rating: 8.1, genre: "family" },
  { title: "Colour Photo", rating: 8.3, genre: "romantic" },
  { title: "Middle Class Melodies", rating: 7.6, genre: "comedy" },
  { title: "Eega", rating: 7.7, genre: "horror" },

  // Hindi Movies
  { title: "3 Idiots", rating: 8.4, genre: "comedy" },
  { title: "Dangal", rating: 8.3, genre: "family" },
  { title: "Chhichhore", rating: 8.3, genre: "comedy" },
  { title: "Andhadhun", rating: 8.2, genre: "horror" },
  { title: "Tumbbad", rating: 8.2, genre: "horror" },
  { title: "Article 15", rating: 8.1, genre: "family" },
  { title: "Sir", rating: 8.1, genre: "romantic" },
  { title: "12th Fail", rating: 9.2, genre: "family" },
  { title: "Gully Boy", rating: 7.9, genre: "drama" },
  { title: "The Lunchbox", rating: 7.8, genre: "romantic" }
];

const movieList = document.getElementById("movieList");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");

function displayMovies(filteredMovies) {
  movieList.innerHTML = "";
  filteredMovies.forEach(movie => {
    const div = document.createElement("div");
    div.className = "movie";
    div.innerHTML = `<strong>${movie.title}</strong>
                     <br>⭐ Rating: ${movie.rating}
                     <small>🎭 Genre: ${movie.genre}</small>`;
    movieList.appendChild(div);
  });
}

function filterMovies() {
  const keyword = searchInput.value.toLowerCase();
  const selectedGenre = genreFilter.value;

  const filtered = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(keyword);
    const matchesGenre = selectedGenre === "all" || movie.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  displayMovies(filtered);
}

function sortByRating() {
  const sorted = [...movies].sort((a, b) => b.rating - a.rating);
  displayMovies(sorted);
}

searchInput.addEventListener("input", filterMovies);
genreFilter.addEventListener("change", filterMovies);

// Show all movies on page load
displayMovies(movies);


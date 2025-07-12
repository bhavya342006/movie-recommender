const movies = [
  // Telugu Movies
  { title: "RRR", rating: 8.7, genre: "Action", language: "Telugu" },
  { title: "Sita Ramam", rating: 8.6, genre: "Romantic", language: "Telugu" },
  { title: "Agent Sai Srinivasa Athreya", rating: 8.4, genre: "Comedy", language: "Telugu" },
  { title: "Care of Kancharapalem", rating: 8.9, genre: "Romantic", language: "Telugu" },
  { title: "Colour Photo", rating: 8.3, genre: "Romantic", language: "Telugu" },
  { title: "Cinema Bandi", rating: 8.1, genre: "Family", language: "Telugu" },
  { title: "Brochevarevarura", rating: 8.3, genre: "Comedy", language: "Telugu" },
  { title: "DJ Tillu", rating: 7.4, genre: "Comedy", language: "Telugu" },
  { title: "Pushpa: The Rise", rating: 7.6, genre: "Action", language: "Telugu" },
  { title: "Eega", rating: 7.7, genre: "Horror", language: "Telugu" },
  { title: "Bheeshma", rating: 7.2, genre: "Romantic", language: "Telugu" },
  { title: "Run Raja Run", rating: 7.6, genre: "Action", language: "Telugu" },
  { title: "Middle Class Melodies", rating: 7.8, genre: "Comedy", language: "Telugu" },
  { title: "Mallesham", rating: 8.1, genre: "Family", language: "Telugu" },
  { title: "Falaknuma Das", rating: 7.2, genre: "Action", language: "Telugu" },

  // Hindi Movies
  { title: "3 Idiots", rating: 8.4, genre: "Family", language: "Hindi" },
  { title: "Chhichhore", rating: 8.3, genre: "Comedy", language: "Hindi" },
  { title: "12th Fail", rating: 9.2, genre: "Family", language: "Hindi" },
  { title: "Dangal", rating: 8.3, genre: "Family", language: "Hindi" },
  { title: "Article 15", rating: 8.1, genre: "Family", language: "Hindi" },
  { title: "Sir", rating: 8.1, genre: "Romantic", language: "Hindi" },
  { title: "Hindi Medium", rating: 7.8, genre: "Comedy", language: "Hindi" },
  { title: "Tumhari Sulu", rating: 7.0, genre: "Comedy", language: "Hindi" },
  { title: "Lootcase", rating: 7.6, genre: "Comedy", language: "Hindi" },
  { title: "Bheja Fry", rating: 7.6, genre: "Comedy", language: "Hindi" },
  { title: "Badhaai Ho", rating: 8.0, genre: "Comedy", language: "Hindi" },
  { title: "The Lunchbox", rating: 7.8, genre: "Romantic", language: "Hindi" },
  { title: "Gully Boy", rating: 7.9, genre: "Drama", language: "Hindi" },
  { title: "Tumbbad", rating: 8.2, genre: "Horror", language: "Hindi" },
  { title: "Andhadhun", rating: 8.3, genre: "Thriller", language: "Hindi" }
];

function showMovies(genre) {
  const movieList = document.getElementById("movie-list");
  const genreSelection = document.getElementById("genre-selection");
  const backButton = document.getElementById("back-button");

  genreSelection.style.display = "none";
  movieList.style.display = "flex";
  backButton.style.display = "block";

  movieList.innerHTML = "";

  let filtered = genre === "All" ? movies : movies.filter(m => m.genre === genre);
  filtered.sort((a, b) => b.rating - a.rating);

  filtered.forEach(movie => {
    const box = document.createElement("div");
    box.className = "movie-box";
    box.innerHTML = `
      <h3>${movie.title}</h3>
      <p class="rating">⭐ Rating: ${movie.rating}</p>
      <p>Genre: ${movie.genre}</p>
      <p>Language: ${movie.language}</p>
    `;
    movieList.appendChild(box);
  });
}

function goBack() {
  document.getElementById("movie-list").style.display = "none";
  document.getElementById("genre-selection").style.display = "block";
  document.getElementById("back-button").style.display = "none";
}


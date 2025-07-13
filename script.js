
 
let currentGenre = "All";

const movies = [/* paste your full movie array here */];

function filterGenre(genre) {
  currentGenre = genre;
  document.getElementById("genre-screen").style.display = "none";
  document.getElementById("movie-screen").style.display = "block";

  const container = document.getElementById("movies-container");
  container.innerHTML = "";

  const filtered = genre === "All" ? movies : movies.filter(m => m.genre === genre);

  if (filtered.length === 0) {
    container.innerHTML = "<p>No movies found.</p>";
    return;
  }

  filtered.forEach(movie => {
    const box = document.createElement("div");
    box.className = "movie-box";
    box.innerHTML = `<strong>${movie.name}</strong><br>⭐ Rating: ${movie.rating}<br>🎬 Genre: ${movie.genre} (${movie.language})`;
    container.appendChild(box);
  });
}

function goBack() {
  document.getElementById("movie-screen").style.display = "none";
  document.getElementById("genre-screen").style.display = "block";
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

document.getElementById("toggle-mode").addEventListener("click", toggleMode);

function showRandomMovie() {
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  const text = `🎬 <strong>${randomMovie.name}</strong><br>⭐ Rating: ${randomMovie.rating}<br>🎞 Genre: ${randomMovie.genre} (${randomMovie.language})`;
  document.getElementById("randomMovieText").innerHTML = text;
  document.getElementById("random-popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("random-popup").classList.add("hidden");
}

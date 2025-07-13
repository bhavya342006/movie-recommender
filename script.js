const movies = [
  // Add your 60+ Telugu and Hindi movies (you already shared them earlier)
  { name: "RRR", rating: 9, genre: "Action", language: "Telugu" },
  { name: "Pushpa", rating: 8.2, genre: "Action", language: "Telugu" },
  { name: "Baahubali: The Beginning", rating: 8, genre: "Action", language: "Telugu" },
  { name: "Baahubali: The Conclusion", rating: 8.2, genre: "Action", language: "Telugu" },
  { name: "Sita Ramam", rating: 8.5, genre: "Romantic", language: "Telugu" },
  { name: "Jathi Ratnalu", rating: 7.8, genre: "Comedy", language: "Telugu" },
  { name: "Eega", rating: 7.7, genre: "Family", language: "Telugu" },
  { name: "Ala Vaikunthapurramuloo", rating: 8, genre: "Family", language: "Telugu" },
  { name: "Agent Sai Srinivasa Athreya", rating: 8.4, genre: "Comedy", language: "Telugu" },
  { name: "Brochevarevarura", rating: 8.3, genre: "Comedy", language: "Telugu" },
  { name: "Bheeshma", rating: 7.2, genre: "Comedy", language: "Telugu" },
  { name: "DJ Tillu", rating: 7.4, genre: "Comedy", language: "Telugu" },
  { name: "Goodachari", rating: 7.9, genre: "Action", language: "Telugu" },
  { name: "C/o Kancharapalem", rating: 8.9, genre: "Romantic", language: "Telugu" },
  { name: "Middle Class Melodies", rating: 7.6, genre: "Family", language: "Telugu" },
  { name: "Colour Photo", rating: 8.3, genre: "Romantic", language: "Telugu" },
  { name: "Pelli Choopulu", rating: 8.2, genre: "Romantic", language: "Telugu" },
  { name: "Mental Madhilo", rating: 7.6, genre: "Romantic", language: "Telugu" },
  { name: "Hi Nanna", rating: 7.9, genre: "Romantic", language: "Telugu" },
  { name: "Dasara", rating: 7.8, genre: "Action", language: "Telugu" },
  { name: "Sarkaru Vaari Paata", rating: 6.8, genre: "Action", language: "Telugu" },
  { name: "Karthikeya 2", rating: 7.7, genre: "Action", language: "Telugu" },
  { name: "3 Idiots", rating: 8.4, genre: "Comedy", language: "Hindi" },
  { name: "Chhichhore", rating: 8.0, genre: "Comedy", language: "Hindi" },
  { name: "Bheja Fry", rating: 7.6, genre: "Comedy", language: "Hindi" },
  { name: "Hindi Medium", rating: 7.8, genre: "Comedy", language: "Hindi" },
  { name: "Piku", rating: 7.6, genre: "Comedy", language: "Hindi" },
  { name: "Queen", rating: 8.2, genre: "Comedy", language: "Hindi" },
  { name: "Tumhari Sulu", rating: 7.0, genre: "Comedy", language: "Hindi" },
  { name: "Luka Chuppi", rating: 6.8, genre: "Comedy", language: "Hindi" },
  { name: "Badhai Ho", rating: 8.0, genre: "Comedy", language: "Hindi" },
  { name: "Stree", rating: 7.6, genre: "Horror", language: "Hindi" },
  { name: "Bhool Bhulaiyaa", rating: 7.3, genre: "Horror", language: "Hindi" },
  { name: "Tumbbad", rating: 8.2, genre: "Horror", language: "Hindi" },
  { name: "Raazi", rating: 7.8, genre: "Action", language: "Hindi" },
  { name: "War", rating: 6.5, genre: "Action", language: "Hindi" },
  { name: "Dangal", rating: 8.4, genre: "Family", language: "Hindi" },
  { name: "Taare Zameen Par", rating: 8.4, genre: "Family", language: "Hindi" }
];

function displayMovies(movieArray) {
  const movieList = document.getElementById("movieList");
  movieList.innerHTML = "";

  movieArray.forEach(movie => {
    const box = document.createElement("div");
    box.className = "movie-box";
    box.innerHTML = `
      <strong>${movie.name}</strong><br>
      Rating: ⭐ ${movie.rating}<br>
      Genre: ${movie.genre}<br>
      Language: ${movie.language}
    `;
    movieList.appendChild(box);
  });
}

function filterMovies(genre) {
  if (genre === 'All') {
    displayMovies(movies);
  } else {
    const filtered = movies.filter(m => m.genre === genre);
    displayMovies(filtered);
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function recommendRandomMovie() {
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  document.getElementById("randomMovieText").innerHTML = `
    <strong>${randomMovie.name}</strong><br>
    Rating: ⭐ ${randomMovie.rating}<br>
    Genre: ${randomMovie.genre}<br>
    Language: ${randomMovie.language}
  `;
  document.getElementById("randomPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("randomPopup").style.display = "none";
}

// Show all movies on load
window.onload = () => displayMovies(movies);


// Full movie list
let movies = [
  // Telugu - Popular
  { name: "RRR", genre: "Action", rating: 9.0, language: "Telugu" },
  { name: "Pushpa", genre: "Action", rating: 8.2, language: "Telugu" },
  { name: "Baahubali: The Beginning", genre: "Action", rating: 8.0, language: "Telugu" },
  { name: "Baahubali: The Conclusion", genre: "Action", rating: 8.2, language: "Telugu" },
  { name: "Sita Ramam", genre: "Romantic", rating: 8.5, language: "Telugu" },
  { name: "Jathi Ratnalu", genre: "Comedy", rating: 7.8, language: "Telugu" },
  { name: "Eega", genre: "Family", rating: 7.7, language: "Telugu" },
  { name: "Ala Vaikunthapurramuloo", genre: "Family", rating: 8.0, language: "Telugu" },

  // Telugu - Underrated
  { name: "Agent Sai Srinivasa Athreya", genre: "Comedy", rating: 8.4, language: "Telugu" },
  { name: "Brochevarevarura", genre: "Comedy", rating: 8.3, language: "Telugu" },
  { name: "Goodachari", genre: "Action", rating: 7.9, language: "Telugu" },
  { name: "C/o Kancharapalem", genre: "Romantic", rating: 8.9, language: "Telugu" },
  { name: "Middle Class Melodies", genre: "Family", rating: 7.6, language: "Telugu" },
  { name: "Colour Photo", genre: "Romantic", rating: 8.3, language: "Telugu" },
  { name: "Pelli Choopulu", genre: "Romantic", rating: 8.2, language: "Telugu" },
  { name: "Mental Madhilo", genre: "Romantic", rating: 7.6, language: "Telugu" },

  // Telugu - Extra
  { name: "Hi Nanna", genre: "Romantic", rating: 8.1, language: "Telugu" },
  { name: "Dasara", genre: "Action", rating: 7.8, language: "Telugu" },
  { name: "Sarkaru Vaari Paata", genre: "Action", rating: 6.8, language: "Telugu" },
  { name: "Karthikeya 2", genre: "Action", rating: 7.7, language: "Telugu" },
  { name: "Love Story", genre: "Romantic", rating: 6.9, language: "Telugu" },
  { name: "Bheeshma", genre: "Comedy", rating: 7.2, language: "Telugu" },
  { name: "DJ Tillu", genre: "Comedy", rating: 7.4, language: "Telugu" },
  { name: "Vakeel Saab", genre: "Action", rating: 7.5, language: "Telugu" },
  { name: "HIT: The First Case", genre: "Horror", rating: 7.7, language: "Telugu" },
  { name: "Oke Oka Jeevitham", genre: "Family", rating: 8.0, language: "Telugu" },
  { name: "Uppena", genre: "Romantic", rating: 6.6, language: "Telugu" },
  { name: "Run Raja Run", genre: "Comedy", rating: 7.6, language: "Telugu" },
  { name: "Anukokunda Oka Roju", genre: "Horror", rating: 7.8, language: "Telugu" },
  { name: "Balagam", genre: "Family", rating: 8.3, language: "Telugu" },
  { name: "Paper Boy", genre: "Romantic", rating: 7.0, language: "Telugu" },

  // Hindi - Popular
  { name: "3 Idiots", genre: "Comedy", rating: 8.4, language: "Hindi" },
  { name: "Dangal", genre: "Family", rating: 8.3, language: "Hindi" },
  { name: "Chhichhore", genre: "Comedy", rating: 8.0, language: "Hindi" },
  { name: "Pathaan", genre: "Action", rating: 7.0, language: "Hindi" },
  { name: "Shershaah", genre: "Action", rating: 8.4, language: "Hindi" },
  { name: "Yeh Jawaani Hai Deewani", genre: "Romantic", rating: 7.2, language: "Hindi" },
  { name: "Zindagi Na Milegi Dobara", genre: "Family", rating: 8.2, language: "Hindi" },
  { name: "Kabir Singh", genre: "Romantic", rating: 7.0, language: "Hindi" },

  // Hindi - Underrated
  { name: "Karwaan", genre: "Family", rating: 7.6, language: "Hindi" },
  { name: "Masaan", genre: "Romantic", rating: 8.1, language: "Hindi" },
  { name: "Piku", genre: "Family", rating: 7.6, language: "Hindi" },
  { name: "Udaan", genre: "Family", rating: 8.2, language: "Hindi" },
  { name: "Lootcase", genre: "Comedy", rating: 7.6, language: "Hindi" },
  { name: "Tumhari Sulu", genre: "Comedy", rating: 7.0, language: "Hindi" },

  // Hindi - Extra
  { name: "Rockstar", genre: "Romantic", rating: 7.7, language: "Hindi" },
  { name: "Kai Po Che!", genre: "Family", rating: 7.8, language: "Hindi" },
  { name: "Barfi!", genre: "Romantic", rating: 8.1, language: "Hindi" },
  { name: "Tumbbad", genre: "Horror", rating: 8.2, language: "Hindi" },
  { name: "Stree", genre: "Horror", rating: 7.6, language: "Hindi" },
  { name: "Badhaai Ho", genre: "Comedy", rating: 8.0, language: "Hindi" },
  { name: "Hindi Medium", genre: "Comedy", rating: 7.8, language: "Hindi" },
  { name: "Article 15", genre: "Action", rating: 8.2, language: "Hindi" },
  { name: "Mimi", genre: "Family", rating: 7.9, language: "Hindi" },
  { name: "Bajrangi Bhaijaan", genre: "Family", rating: 8.1, language: "Hindi" },
  { name: "Secret Superstar", genre: "Family", rating: 7.8, language: "Hindi" },
  { name: "Bulbbul", genre: "Horror", rating: 6.5, language: "Hindi" },
  { name: "Tamasha", genre: "Romantic", rating: 7.3, language: "Hindi" },
  { name: "Raazi", genre: "Action", rating: 7.7, language: "Hindi" },
  { name: "Bheja Fry", genre: "Comedy", rating: 7.6, language: "Hindi" }
];

// Filter movies by genre and show them
function filterByGenre(genre) {
  const container = document.getElementById("movies");
  container.innerHTML = "";

  let filteredMovies = genre === "All" ? movies : movies.filter(movie => movie.genre === genre);

  filteredMovies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <strong>${movie.name}</strong><br>
      Rating: ⭐ ${movie.rating}<br>
      Genre: ${movie.genre}<br>
      Language: ${movie.language}
    `;
    container.appendChild(card);
  });
}

// Recommend a random movie
function showRandomMovie() {
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  document.getElementById("randomMovieText").innerHTML = `
    <strong>${randomMovie.name}</strong><br>
    Rating: ⭐ ${randomMovie.rating}<br>
    Genre: ${randomMovie.genre}<br>
    Language: ${randomMovie.language}
  `;
  document.getElementById("popup").classList.remove("hidden");
}

// Close the popup
function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

// Toggle Dark Mode
document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

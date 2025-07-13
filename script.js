const movies = [
  { name: "Jathi Ratnalu", rating: 7.8, genre: "Comedy", language: "Telugu" },
  { name: "Agent Sai Srinivasa Athreya", rating: 8.4, genre: "Comedy", language: "Telugu" },
  { name: "Brochevarevarura", rating: 8.3, genre: "Comedy", language: "Telugu" },
  { name: "Bheeshma", rating: 7.2, genre: "Comedy", language: "Telugu" },
  { name: "DJ Tillu", rating: 7.4, genre: "Comedy", language: "Telugu" },
  { name: "Run Raja Run", rating: 7.6, genre: "Comedy", language: "Telugu" },
  { name: "3 Idiots", rating: 8.4, genre: "Comedy", language: "Hindi" },
  { name: "Chhichhore", rating: 8.0, genre: "Comedy", language: "Hindi" },
  { name: "Lootcase", rating: 7.6, genre: "Comedy", language: "Hindi" },
  { name: "Tumhari Sulu", rating: 7.0, genre: "Comedy", language: "Hindi" },

  // Family
  { name: "Middle Class Melodies", rating: 7.6, genre: "Family", language: "Telugu" },
  { name: "Eega", rating: 7.7, genre: "Family", language: "Telugu" },
  { name: "Ala Vaikunthapurramuloo", rating: 8.0, genre: "Family", language: "Telugu" },
  { name: "Chillar Party", rating: 7.5, genre: "Family", language: "Hindi" },
  { name: "Nil Battey Sannata", rating: 8.2, genre: "Family", language: "Hindi" },

  // Romantic
  { name: "Sita Ramam", rating: 8.5, genre: "Romantic", language: "Telugu" },
  { name: "Colour Photo", rating: 8.3, genre: "Romantic", language: "Telugu" },
  { name: "Pelli Choopulu", rating: 8.2, genre: "Romantic", language: "Telugu" },
  { name: "Hi Nanna", rating: 8.1, genre: "Romantic", language: "Telugu" },
  { name: "Mental Madhilo", rating: 7.6, genre: "Romantic", language: "Telugu" },
  { name: "C/o Kancharapalem", rating: 8.9, genre: "Romantic", language: "Telugu" },
  { name: "Bareilly Ki Barfi", rating: 7.5, genre: "Romantic", language: "Hindi" },
  { name: "Jab We Met", rating: 7.9, genre: "Romantic", language: "Hindi" },
  { name: "Tamasha", rating: 7.4, genre: "Romantic", language: "Hindi" },
  { name: "Barfi!", rating: 8.1, genre: "Romantic", language: "Hindi" },

  // Action
  { name: "RRR", rating: 9.0, genre: "Action", language: "Telugu" },
  { name: "Pushpa", rating: 8.2, genre: "Action", language: "Telugu" },
  { name: "Baahubali: The Beginning", rating: 8.0, genre: "Action", language: "Telugu" },
  { name: "Baahubali: The Conclusion", rating: 8.2, genre: "Action", language: "Telugu" },
  { name: "Gharshana", rating: 7.9, genre: "Action", language: "Telugu" },
  { name: "Goodachari", rating: 7.9, genre: "Action", language: "Telugu" },
  { name: "Dasara", rating: 7.8, genre: "Action", language: "Telugu" },
  { name: "Karthikeya 2", rating: 7.7, genre: "Action", language: "Telugu" },
  { name: "Sarkaru Vaari Paata", rating: 6.8, genre: "Action", language: "Telugu" },
  { name: "War", rating: 6.5, genre: "Action", language: "Hindi" },
  { name: "Pathaan", rating: 6.9, genre: "Action", language: "Hindi" },
  { name: "Shershaah", rating: 8.3, genre: "Action", language: "Hindi" },
  { name: "URI", rating: 8.4, genre: "Action", language: "Hindi" },

  // Horror
  { name: "Pizza", rating: 8.0, genre: "Horror", language: "Telugu" },
  { name: "Anando Brahma", rating: 7.1, genre: "Horror", language: "Telugu" },
  { name: "Prema Katha Chitram", rating: 7.2, genre: "Horror", language: "Telugu" },
  { name: "Tumbbad", rating: 8.3, genre: "Horror", language: "Hindi" },
  { name: "Stree", rating: 7.6, genre: "Horror", language: "Hindi" }
];

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function filterMovies(genre) {
  const container = document.getElementById("movieContainer");
  container.innerHTML = "";
  const filtered = movies.filter(movie => movie.genre === genre);
  filtered.forEach(movie => {
    const box = document.createElement("div");
    box.className = "movie-box";
    box.innerHTML = `
      <h3>${movie.name}</h3>
      <p>Rating: ⭐ ${movie.rating}</p>
      <p>Genre: ${movie.genre}</p>
      <p>Language: ${movie.language}</p>
    `;
    container.appendChild(box);
  });
  container.style.display = "flex";
}

function showAllMovies() {
  const container = document.getElementById("movieContainer");
  container.innerHTML = "";
  movies.forEach(movie => {
    const box = document.createElement("div");
    box.className = "movie-box";
    box.innerHTML = `
      <h3>${movie.name}</h3>
      <p>Rating: ⭐ ${movie.rating}</p>
      <p>Genre: ${movie.genre}</p>
      <p>Language: ${movie.language}</p>
    `;
    container.appendChild(box);
  });
  container.style.display = "flex";
}

function showRandomMovie() {
  const popup = document.getElementById("popup");
  const content = document.getElementById("popupContent");
  const random = movies[Math.floor(Math.random() * movies.length)];
  content.innerHTML = `
    <h3>${random.name}</h3>
    <p>Rating: ⭐ ${random.rating}</p>
    <p>Genre: ${random.genre}</p>
    <p>Language: ${random.language}</p>
  `;
  popup.style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

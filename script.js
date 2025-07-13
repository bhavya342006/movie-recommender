const movies = [
  // Comedy
  { title: "Jathi Ratnalu", rating: 7.8, genre: "Comedy", language: "Telugu" },
  { title: "Agent Sai Srinivasa Athreya", rating: 8.4, genre: "Comedy", language: "Telugu" },
  { title: "Brochevarevarura", rating: 8.3, genre: "Comedy", language: "Telugu" },
  { title: "Bheeshma", rating: 7.2, genre: "Comedy", language: "Telugu" },
  { title: "DJ Tillu", rating: 7.4, genre: "Comedy", language: "Telugu" },
  { title: "Run Raja Run", rating: 7.6, genre: "Comedy", language: "Telugu" },
  { title: "3 Idiots", rating: 8.4, genre: "Comedy", language: "Hindi" },
  { title: "Chhichhore", rating: 8.0, genre: "Comedy", language: "Hindi" },
  { title: "Lootcase", rating: 7.6, genre: "Comedy", language: "Hindi" },
  { title: "Hindi Medium", rating: 7.8, genre: "Comedy", language: "Hindi" },
  { title: "Badhaai Ho", rating: 8.0, genre: "Comedy", language: "Hindi" },
  { title: "Bheja Fry", rating: 7.6, genre: "Comedy", language: "Hindi" },

  // Action
  { title: "RRR", rating: 9.0, genre: "Action", language: "Telugu" },
  { title: "Pushpa", rating: 8.2, genre: "Action", language: "Telugu" },
  { title: "Baahubali: The Beginning", rating: 8.0, genre: "Action", language: "Telugu" },
  { title: "Baahubali: The Conclusion", rating: 8.2, genre: "Action", language: "Telugu" },
  { title: "Guntur Kaaram", rating: 7.1, genre: "Action", language: "Telugu" },
  { title: "Goodachari", rating: 7.9, genre: "Action", language: "Telugu" },
  { title: "Karthikeya 2", rating: 7.7, genre: "Action", language: "Telugu" },
  { title: "Ek Tha Tiger", rating: 6.8, genre: "Action", language: "Hindi" },
  { title: "War", rating: 6.5, genre: "Action", language: "Hindi" },
  { title: "Singham", rating: 6.8, genre: "Action", language: "Hindi" },

  // Family
  { title: "Eega", rating: 7.7, genre: "Family", language: "Telugu" },
  { title: "Ala Vaikunthapurramuloo", rating: 8.0, genre: "Family", language: "Telugu" },
  { title: "Middle Class Melodies", rating: 7.6, genre: "Family", language: "Telugu" },
  { title: "Chillar Party", rating: 7.5, genre: "Family", language: "Hindi" },
  { title: "Stanley Ka Dabba", rating: 7.8, genre: "Family", language: "Hindi" },

  // Romantic
  { title: "Sita Ramam", rating: 8.5, genre: "Romantic", language: "Telugu" },
  { title: "Colour Photo", rating: 8.3, genre: "Romantic", language: "Telugu" },
  { title: "Pelli Choopulu", rating: 8.2, genre: "Romantic", language: "Telugu" },
  { title: "Mental Madhilo", rating: 7.6, genre: "Romantic", language: "Telugu" },
  { title: "Hi Nanna", rating: 7.8, genre: "Romantic", language: "Telugu" },
  { title: "C/o Kancharapalem", rating: 8.9, genre: "Romantic", language: "Telugu" },
  { title: "Tamasha", rating: 7.3, genre: "Romantic", language: "Hindi" },
  { title: "Barfi!", rating: 8.1, genre: "Romantic", language: "Hindi" },
  { title: "Yeh Jawaani Hai Deewani", rating: 7.2, genre: "Romantic", language: "Hindi" },
  { title: "Kal Ho Naa Ho", rating: 7.9, genre: "Romantic", language: "Hindi" },

  // Others
  { title: "Dasara", rating: 7.8, genre: "Action", language: "Telugu" },
  { title: "Sarkaru Vaari Paata", rating: 6.8, genre: "Action", language: "Telugu" }
];

function displayMovies(filteredMovies) {
  const container = document.getElementById("movieContainer");
  container.innerHTML = "";

  filteredMovies.forEach(movie => {
    const div = document.createElement("div");
    div.className = "movie";
    div.innerHTML = `
      <h3>${movie.title}</h3>
      <p>Rating: ⭐ ${movie.rating}</p>
      <p>Genre: ${movie.genre}</p>
      <p>Language: ${movie.language}</p>
    `;
    container.appendChild(div);
  });
}

function filterMovies(genre) {
  const filtered = genre === "All" ? movies : movies.filter(m => m.genre === genre);
  displayMovies(filtered);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function showRandomMovie() {
  const random = movies[Math.floor(Math.random() * movies.length)];
  document.getElementById("popupMovie").innerHTML = `
    <h3>${random.title}</h3>
    <p>Rating: ⭐ ${random.rating}</p>
    <p>Genre: ${random.genre}</p>
    <p>Language: ${random.language}</p>
  `;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Show all movies initially
filterMovies("All");

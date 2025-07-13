const movies = [
    { title: "Jathi Ratnalu", rating: 7.8, genre: "Comedy", language: "Telugu" },
    { title: "Agent Sai Srinivasa Athreya", rating: 8.4, genre: "Comedy", language: "Telugu" },
    { title: "Brochevarevarura", rating: 8.3, genre: "Comedy", language: "Telugu" },
    { title: "Bheeshma", rating: 7.2, genre: "Comedy", language: "Telugu" },
    { title: "DJ Tillu", rating: 7.4, genre: "Comedy", language: "Telugu" },
    { title: "Run Raja Run", rating: 7.6, genre: "Comedy", language: "Telugu" },
    { title: "3 Idiots", rating: 8.4, genre: "Comedy", language: "Hindi" },
    { title: "Chhichhore", rating: 8.0, genre: "Comedy", language: "Hindi" },
    { title: "Lootcase", rating: 7.6, genre: "Comedy", language: "Hindi" },
    { title: "Tumhari Sulu", rating: 7.0, genre: "Comedy", language: "Hindi" },
    { title: "Badhaai Ho", rating: 8.0, genre: "Comedy", language: "Hindi" },
    { title: "Hindi Medium", rating: 7.8, genre: "Comedy", language: "Hindi" },
    { title: "RRR", rating: 9.0, genre: "Action", language: "Telugu" },
    { title: "Pushpa", rating: 8.2, genre: "Action", language: "Telugu" },
    { title: "Baahubali: The Beginning", rating: 8.0, genre: "Action", language: "Telugu" },
    { title: "Baahubali: The Conclusion", rating: 8.2, genre: "Action", language: "Telugu" },
    { title: "Sita Ramam", rating: 8.5, genre: "Romantic", language: "Telugu" },
    { title: "Pelli Choopulu", rating: 8.2, genre: "Romantic", language: "Telugu" },
    { title: "Hi Nanna", rating: 7.6, genre: "Romantic", language: "Telugu" },
    { title: "Mental Madhilo", rating: 7.6, genre: "Romantic", language: "Telugu" },
    { title: "Colour Photo", rating: 8.3, genre: "Romantic", language: "Telugu" },
    { title: "Ala Vaikunthapurramuloo", rating: 8.0, genre: "Family", language: "Telugu" },
    { title: "Middle Class Melodies", rating: 7.6, genre: "Family", language: "Telugu" },
    { title: "Eega", rating: 7.7, genre: "Family", language: "Telugu" },
    { title: "Kanchana", rating: 6.5, genre: "Horror", language: "Telugu" },
    { title: "Bhool Bhulaiyaa", rating: 7.5, genre: "Horror", language: "Hindi" },
    { title: "Stree", rating: 7.6, genre: "Horror", language: "Hindi" }
];

function renderMovies(filteredMovies) {
    const container = document.getElementById("movie-list");
    container.innerHTML = "";

    filteredMovies.forEach(movie => {
        const div = document.createElement("div");
        div.className = "movie-box";
        div.innerHTML = `
            <strong>${movie.title}</strong><br>
            Rating: ⭐ ${movie.rating}<br>
            Genre: ${movie.genre}<br>
            Language: ${movie.language}
        `;
        container.appendChild(div);
    });
}

function filterMovies(genre) {
    if (genre === "All") {
        renderMovies(movies);
    } else {
        const filtered = movies.filter(movie => movie.genre === genre);
        renderMovies(filtered);
    }
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

function showRandomMovie() {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    const text = `${randomMovie.title}\n⭐ Rating: ${randomMovie.rating}\nGenre: ${randomMovie.genre}\nLanguage: ${randomMovie.language}`;
    document.getElementById("random-movie-text").innerText = text;
    document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}

filterMovies("All");

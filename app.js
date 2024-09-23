const games = [
    { id: 1, name: "The Witcher 3: Wild Hunt", genre: ["RPG", "Adventure"] },
    { id: 2, name: "Minecraft", genre: ["Sandbox", "Adventure"] },
    { id: 3, name: "Grand Theft Auto V", genre: ["Action", "Adventure"] },
    { id: 4, name: "Red Dead Redemption 2", genre: ["Action", "Adventure"] },
    { id: 5, name: "Cyberpunk 2077", genre: ["RPG", "Action"] },
    { id: 6, name: "Assassin’s Creed Valhalla", genre: ["Action", "RPG"] },
    { id: 7, name: "Call of Duty: Warzone", genre: ["Shooter", "Battle Royale"] },
    { id: 8, name: "Fortnite", genre: ["Battle Royale", "Shooter"] },
    { id: 9, name: "Apex Legends", genre: ["Battle Royale", "Shooter"] },
    { id: 10, name: "Valorant", genre: ["Shooter", "Strategy"] },
    { id: 11, name: "Overwatch 2", genre: ["Shooter", "Strategy"] },
    { id: 12, name: "Battlefield 2042", genre: ["Shooter", "Action"] },
    { id: 13, name: "FIFA 22", genre: ["Sports"] },
    { id: 14, name: "NBA 2K22", genre: ["Sports"] },
    { id: 15, name: "Forza Horizon 5", genre: ["Racing", "Sports"] },
    { id: 16, name: "Need for Speed Heat", genre: ["Racing", "Action"] },
    { id: 17, name: "The Legend of Zelda: Breath of the Wild", genre: ["Adventure", "RPG"] },
    { id: 18, name: "Super Mario Odyssey", genre: ["Adventure"] },
    { id: 19, name: "Animal Crossing: New Horizons", genre: ["Simulation"] },
    { id: 20, name: "Resident Evil Village", genre: ["Horror", "Action"] },
    { id: 21, name: "Blue Archive", genre: ["RPG", "Action"] },
    { id: 22, name: "Elden Ring", genre: ["RPG", "Fantasy","Souls-like"] },
    { id: 23, name: "Monster Hunter Wilds", genre: ["Action", "Adventure"] },
    { id: 24, name: "DARK SOULS: REMASTERED", genre: ["Fantasy", "Action","Souls-like"] },
    { id: 25, name: "Black Myth: Wukong", genre: ["Adventure", "Action" ,"Souls-like"] },
    { id: 26, name: "Mush Dash", genre: ["Rhythm","Anime"] },
    { id: 27, name: "Until Then", genre: ["Visual Novel","Drama","Romance"] },
    { id: 28, name: "Persona 5 Royal", genre: ["Visual Novel","Anime","RPG"] },
    { id: 29, name: "Hades", genre: ["Rogue-like", "Action"] },
    { id: 30, name: "Genshin Impact", genre: ["RPG", "Adventure", "Fantasy"] },
    { id: 31, name: "Hollow Knight", genre: ["Metroidvania", "Action", "Adventure"] },
    { id: 32, name: "Stardew Valley", genre: ["Simulation", "RPG", "Farming"] },
    { id: 33, name: "League of Legends", genre: ["MOBA", "Strategy"] },
    { id: 34, name: "Among Us", genre: ["Party", "Strategy"] },
    { id: 35, name: "Celeste", genre: ["Platformer", "Adventure"] },
    { id: 36, name: "Tetris Effect", genre: ["Puzzle", "Rhythm"] },
    { id: 37, name: "Slay the Spire", genre: ["Card Game", "Rogue-like"] },
    { id: 38, name: "Dead by Daylight", genre: ["Horror", "Multiplayer", "Survival"] },
    { id: 39, name: "The Last of Us Part II", genre: ["Action", "Adventure", "Horror"] },
    { id: 40, name: "Sekiro: Shadows Die Twice", genre: ["Action", "Adventure", "Souls-like"] },
    { id: 41, name: "Horizon Zero Dawn", genre: ["RPG", "Adventure", "Action"] },
    { id: 42, name: "Fire Emblem: Three Houses", genre: ["Strategy", "RPG"] },
    { id: 43, name: "Splatoon 2", genre: ["Shooter", "Multiplayer"] },
    { id: 44, name: "Cuphead", genre: ["Platformer", "Action"] },
    { id: 45, name: "Ghost of Tsushima", genre: ["Action", "Adventure", "Open World"] },
    { id: 46, name: "Disco Elysium", genre: ["RPG", "Adventure"] },
    { id: 47, name: "Death Stranding", genre: ["Adventure", "Action", "Sci-Fi"] },
    { id: 48, name: "Returnal", genre: ["Action", "Rogue-like", "Sci-Fi"] },
    { id: 49, name: "NieR: Automata", genre: ["RPG", "Action", "Adventure"] },
    { id: 50, name: "Doom Eternal", genre: ["Shooter", "Action"] },
    { id: 51, name: "Terraria", genre: ["Sandbox", "Adventure"] },
    { id: 52, name: "Metal Gear Solid V: The Phantom Pain", genre: ["Action", "Stealth", "Adventure"] },
    { id: 53, name: "Divinity: Original Sin 2", genre: ["RPG", "Strategy", "Fantasy"] },
    { id: 54, name: "Xenoblade Chronicles 3", genre: ["RPG", "Adventure", "Fantasy"] },
    { id: 55, name: "Bayonetta 3", genre: ["Action", "Adventure"] },
    { id: 56, name: "Metroid Dread", genre: ["Action", "Adventure", "Metroidvania"] },
    { id: 57, name: "It Takes Two", genre: ["Co-op", "Adventure", "Puzzle"] },
    { id: 58, name: "Kirby and the Forgotten Land", genre: ["Platformer", "Adventure"] },
    { id: 59, name: "Hollow Knight: Silksong", genre: ["Metroidvania", "Action", "Adventure"] },
    { id: 60, name: "Sifu", genre: ["Action", "Martial Arts"] }
];

// Search history storage
let searchHistory = [];

// Function to search for games
function searchGames() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const gameListDiv = document.getElementById('gameList');
    gameListDiv.innerHTML = '';  // Clear previous content

    // Filter games by search query in name or genres
    const filteredGames = games.filter(game => 
        game.name.toLowerCase().includes(query) ||
        game.genre.some(genre => genre.toLowerCase().includes(query))
    );

    filteredGames.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('game-item');
        gameDiv.innerHTML = `<h3>${game.name}</h3><p>Genres: ${game.genre.join(', ')}</p>`;
        gameListDiv.appendChild(gameDiv);
    });

    // Save the search query to history
    if (filteredGames.length > 0) {
        // Save all genres of the first matched game found
        searchHistory.push(...filteredGames[0].genre);

        // *** เพิ่มการแนะนำเกมที่มีแนวเดียวกันกับเกมที่ค้นหา ***
        recommendGamesByGenre(filteredGames[0].genre);
    } else if (query) {
        searchHistory.push(query);
        recommendGames();
    }
}

// Function to recommend games based on search history
function recommendGames() {
    const recommendedListDiv = document.getElementById('recommendedList');
    recommendedListDiv.innerHTML = '';  // Clear previous recommendations

    // Get the last search query or genre
    const lastSearch = searchHistory[searchHistory.length - 1];

    // Find recommended games based on genre or name
    const recommendedGames = games.filter(game => 
        game.name.toLowerCase().includes(lastSearch) || 
        game.genre.some(genre => genre.toLowerCase().includes(lastSearch))
    );

    recommendedGames.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('recommended-item');
        gameDiv.innerHTML = `<h3>${game.name}</h3><p>Genres: ${game.genre.join(', ')}</p>`;
        recommendedListDiv.appendChild(gameDiv);
    });
}

// *** เพิ่มฟังก์ชันใหม่ recommendGamesByGenre ***
function recommendGamesByGenre(genres) {
    const recommendedListDiv = document.getElementById('recommendedList');
    recommendedListDiv.innerHTML = '';  // Clear previous recommendations

    // Find recommended games based on matching genres
    const recommendedGames = games.filter(game => 
        game.genre.some(genre => genres.includes(genre))
    );

    recommendedGames.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('recommended-item');
        gameDiv.innerHTML = `<h3>${game.name}</h3><p>Genres: ${game.genre.join(', ')}</p>`;
        recommendedListDiv.appendChild(gameDiv);
    });
}

// Function to load all games initially
function loadAllGames() {
    const gameListDiv = document.getElementById('gameList');
    games.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('game-item');
        gameDiv.innerHTML = `<h3>${game.name}</h3><p>Genres: ${game.genre.join(', ')}</p>`;
        gameListDiv.appendChild(gameDiv);
    });
}

// Function to generate genre buttons
function loadGenres() {
    const genreListDiv = document.getElementById('genreList');
    const allGenres = [...new Set(games.flatMap(game => game.genre))]; // Extract unique genres

    allGenres.forEach(genre => {
        const genreDiv = document.createElement('div');
        genreDiv.classList.add('genre-item');
        genreDiv.innerText = genre;
        genreDiv.onclick = () => filterByGenre(genre);  // Filter games by genre when clicked
        genreListDiv.appendChild(genreDiv);
    });
}

// Function to filter games by genre
function filterByGenre(genre) {
    const gameListDiv = document.getElementById('gameList');
    gameListDiv.innerHTML = '';  // Clear previous content

    const filteredGames = games.filter(game => game.genre.includes(genre));

    filteredGames.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('game-item');
        gameDiv.innerHTML = `<h3>${game.name}</h3><p>Genres: ${game.genre.join(', ')}</p>`;
        gameListDiv.appendChild(gameDiv);
    });

    // Add genre to search history and recommend similar games
    searchHistory.push(genre);
    recommendGames();
}

// Load all games and genres when page loads
loadAllGames();
loadGenres();

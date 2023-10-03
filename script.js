const movies = [
    {
        title: "Lucifer",
        id:"1",
        poster_url: "images/lucifer.jpg",
        release_year: 2019,
        genre: "Action",
        language: "Other",
        region: "Indian",
        rating: 7.5
    },
    {
        title: "MunnaBhai M.B.B.S",
        id:"2",
        poster_url: "images/mbbs.jpg",
        release_year: 2003,
        genre: "Comedy",
        language: "Hindi",
        region: "Indian",
        rating: 8.1
    },
    {
        title: "Baahubali:The Conclusion",
        id:"3",
        poster_url: "images/bb2.jpg",
        release_year: 2017,
        genre: "Action",
        language: "Telugu",
        region: "Indian",
        rating: 8.2
    },
    {
        title: "Sita ramam",
        id:"4",
        poster_url: "images/Sita-ramam1.jpg",
        release_year: 2022,
        genre: "Romantic",
        language: "Telugu",
        region: "Indian",
        rating: 8.6
    },
    {
        title: "Vikram",
        id:"5",
        poster_url: "images/vikram.jpg",
        release_year: 2022,
        genre: "Action",
        language: "Tamil",
        region: "Indian",
        rating: 8.3
    },
    {
        title: "Pushpa:The Rise",
        id:"6",
        poster_url:"images/php.jpg",
        release_year: 2021,
        genre: "Action",
        language: "Telugu",
        region: "Indian",
        rating: 7.6
    },
    {
        title: "K.G.F:Chapter 2",
        id:"7",
        poster_url: "images/kgf.jpg",
        release_year: 2019,
        genre: "Action",
        language: "Other",
        region: "Indian",
        rating: 8.2
    },
    {
        title: "Jailer",
        id:"8",
        poster_url: "images/jailer.jpg",
        release_year: 2023,
        genre: "Action",
        language: "Tamil",
        region: "Indian",
        rating: 7.2
    },
    {
        title: "Fukrey Returns",
        id:"9",
        poster_url: "images/frk.jpg",
        release_year: 2017,
        genre: "Comedy",
        language: "Hindi",
        region: "Indian",
        rating: 6.5
    },
    {
        title: "Varsham",
        id  :"10",
        poster_url: "images/varsham.jpg",
        release_year: 2004,
        genre: "Romantic",
        language: "Telugu",
        region: "Indian",
        rating: 7.1
    },
    {
        title: "Halloween Ends",
        id:"11",
        poster_url:"images/hwe.jpg",
        release_year: 2022,
        genre: "Horror",
        language: "English",
        region: "Hollywood",
        rating: 5.8
    },
    {
        title: "Enthiran",
        id:"12",
        poster_url:"images/robo.jpg",
        release_year: 2010,
        genre: "Science-Fiction",
        language: "Tamil",
        region: "Indian",
        rating: 7.1
    },
    {
        title: "Pizza-3",
        id:"13",
        poster_url:"images/pz.jpg",
        release_year: 2023,
        genre: "Horror",
        language: "Tamil",
        region: "Indian",
        rating: 4.7
    },
    {
        title: "The Matrix",
        id:"14",
        poster_url:"images/matrix.jpg",
        release_year: 1999,
        genre: "Science-Fiction",
        language: "English",
        region: "Hollywood",
        rating: 8.7
    },
    {
        title: "Annabelle",
        id:"15",
        poster_url: "images/annabelle.jpg",
        release_year: 2014,
        genre: "Horror",
        language: "English",
        region: "Hollywood",
        rating: 5.4
    },
    {
        title: "Nuvvostanante Nenoddantana",
        id:"16",
        poster_url: "images/nvnv.jpg",
        release_year: 2005,
        genre: "Romantic",
        language: "Tamil",
        region: "Indian",
        rating: 7.8
    },
    {
        title: "Swathi mutyam",
        id:"17",
        poster_url: "images/swm.jpg",
        release_year: 2022,
        genre: "Comedy",
        language: "Telugu",
        region: "Indian",
        rating: 6.6
    },
    {
        title: "The Nun",
        id:"18",
        poster_url: "images/nun.jpg",
        release_year: 2018,
        genre: "Horror",
        language: "English",
        region: "Hollywood",
        rating: 8.2
    },
    {
        title: "F2:Fun and Frustration",
        id:"19",
        poster_url: "images/f2.jpg",
        release_year: 2019,
        genre: "Comedy",
        language: "Telugu",
        region: "Indian",
        rating: 6.1
    },
    {
        title: "Ram-Leela",
        id:"20",
        poster_url: "images/Ramleela.jpg",
        release_year: 2013,
        genre: "Romantic",
        language: "Hindi",
        region: "Indian",
        rating: 6.4
    },
    {
        title: "Aashiqui 2",
        id:"21",
        poster_url: "images/ashq2.jpg",
        release_year: 2013,
        genre: "Romantic",
        language: "Hindi",
        region: "Indian",
        rating: 7.0
    },
    {
        title: "Three Idiots",
        id:"22",
        poster_url: "images/idiots.jpg",
        release_year: 2009,
        genre: "Comedy",
        language: "Hindi",
        region: "Indian",
        rating: 8.4
    },
    {
        title: "Titanic",
        id:"23",
        poster_url: "images/ttn.jpg",
        release_year: 1997,
        genre: "Romantic",
        language: "English",
        region: "Hollywood",
        rating: 7.9
    },
    {
        title: "Inception",
        id:"24",
        poster_url: "images/inception.jpg",
        release_year: 2010,
        genre: "Science-Fiction",
        language: "English",
        region: "Indian",
        rating: 8.8
    },
    {
        title: "Bhoot",
        id:"25",
        poster_url: "images/bhoot.jpg",
        release_year: 2003,
        genre: "Horror",
        language: "Hindi",
        region: "Indian",
        rating: 6.4
    },
    {
        title: "Interstellar",
        id:"26",
        poster_url: "images/interstellar.jpg",
        release_year: 2014,
        genre: "Science-Fiction",
        language: "English",
        region: "Hollywood",
        rating: 8.7
    },
    {
        title: "Krrish 3",
        id:"27",
        poster_url: "images/krsh.jpg",
        release_year: 2013,
        genre: "Science-Fiction",
        language: "Hindi",
        region: "Indian",
        rating: 5.3
    },
    {
        title: "Jathi Ratnalu",
        id:"28",
        poster_url: "images/jtr.jpg",
        release_year: 2021,
        genre: "Comedy",
        language: "Telugu",
        region: "Indian",
        rating: 7.3
    },
    {
        title: "24",
        id:"29",
        poster_url: "images/24.jpg",
        release_year: 2016,
        genre: "Science-Fiction",
        language: "Tamil",
        region: "Indian",
        rating: 7.9
    },
    {
        title: "Kanchana",
        id:"30",
        poster_url: "images/kanchana.jpg",
        release_year: 2011,
        align: "center",
        genre: "Horror",
        language: "Tamil",
        region: "Indian",
        rating: 6.6
    }
    // Adding more movie objects here
];

function displayMovies(Mvs) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    Mvs.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${movie.poster_url}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.rating}</p>
        `;
        movieCard.addEventListener('click', () => {
            var h="./Movie_page/"+movie.id+".html";
            // Redirect to another webpage, for example, movie details page
            window.location.href =h; // Replace 'movie-details.html' with the desired URL
        });
        movieList.appendChild(movieCard);
    });
}
displayMovies(movies);

function disp() {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${movie.poster_url}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.rating}</p>
        `;
        movieCard.addEventListener('click', () => {
            var h="./Movie_page/"+movie.id+".html";
            // Redirect to another webpage, for example, movie details page
            window.location.href =h; // Replace 'movie-details.html' with the desired URL
        });
        movieList.appendChild(movieCard);
    });
}


function displayGenreHeading(parent, filterType) {
    const genreHeading = document.createElement('h2');
    document.querySelector('section').classList.remove("movie-list");
    genreHeading.style.display="block";
    genreHeading.textContent = `${filterType} Movies`;
    genreHeading.classList.add('genre-heading');
    parent.appendChild(genreHeading);
    const clearElement = document.createElement('div');
        clearElement.classList.add('clear');
        parent.appendChild(clearElement);
        const clearElement1 = document.createElement('div');
        clearElement1.classList.add('clear');
        parent.appendChild(clearElement1);
        const clearElement2 = document.createElement('div');
        clearElement2.classList.add('clear');
        parent.appendChild(clearElement2);
        const clearElement3 = document.createElement('div');
        clearElement3.classList.add('clear');
        parent.appendChild(clearElement3);
}

function displayFilteredMovies(parent, filteredMovies) {
    document.querySelector('section').classList.add("movie-list");
    
    //filteredMovies.unshift(clearElement);
    filteredMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${movie.poster_url}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.rating}</p>
        `;

        movieCard.addEventListener('click', () => {
            var h="./Movie_page/"+movie.id+".html";
            // Redirect to another webpage, for example, movie details page
            window.location.href =h; // Replace 'movie-details.html' with the desired URL
        });

        parent.appendChild(movieCard);
    });
}





const genreButton = document.getElementById('genre');
const languageButton = document.getElementById('language');
const regionButton = document.getElementById('region');
const allButton = document.getElementById('sh');

allButton.addEventListener('click', disp);
genreButton.addEventListener('click', filterByGenre);
languageButton.addEventListener('click', filterByLanguage);
regionButton.addEventListener('click', filterByRegion);


function filterByGenre() {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = "";

    const genres = ['Action', 'Science-Fiction', 'Horror', 'Comedy', 'Romantic'];

    genres.forEach((genre, index) => {
        const filteredMovies = movies.filter(movie => movie.genre === genre);
        
        displayGenreHeading(movieList, genre);
        displayFilteredMovies(movieList, filteredMovies);
        
        // Add a clearing element to start a new row after each genre
        const clearElement = document.createElement('div');
        clearElement.classList.add('clear');
        movieList.appendChild(clearElement);
        const clearElement1 = document.createElement('div');
        clearElement1.classList.add('clear');
        movieList.appendChild(clearElement1);
        const clearElement2 = document.createElement('div');
        clearElement2.classList.add('clear');
        movieList.appendChild(clearElement2);
        const clearElement3 = document.createElement('div');
        clearElement3.classList.add('clear');
        movieList.appendChild(clearElement3);
    });
}




function filterByLanguage() { // Example: filtering by 'Kannada' language
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = "";

    const genres = ['Telugu', 'Tamil', 'Hindi','English', 'Other'];

    genres.forEach((genre, index) => {
        const filteredMovies = movies.filter(movie => movie.language === genre);
        
        displayGenreHeading(movieList, genre);
        displayFilteredMovies(movieList, filteredMovies);
        const clearElement = document.createElement('div');
        clearElement.classList.add('clear');
        movieList.appendChild(clearElement);
        const clearElement1 = document.createElement('div');
        clearElement1.classList.add('clear');
        movieList.appendChild(clearElement1);
        const clearElement3 = document.createElement('div');
        clearElement3.classList.add('clear');
        movieList.appendChild(clearElement3);
});
}

function filterByRegion() {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = "";

    const genres = ['Indian','Hollywood'];

    genres.forEach((genre, index) => {
        const filteredMovies = movies.filter(movie => movie.region === genre);
        
        displayGenreHeading(movieList, genre);
        displayFilteredMovies(movieList, filteredMovies);
        const clearElement3 = document.createElement('div');
        clearElement3.classList.add('clear');
        movieList.appendChild(clearElement3);
});
}

const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    displayMovies(filteredMovies);
});

const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});

document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('show-menu');
    }
});
// Initial display of movies
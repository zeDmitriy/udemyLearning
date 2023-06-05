const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDb = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false 
};

for (let i = 0; i<3; i++) {
	let a = prompt('Один из поледних просмотренных фильмов?', ''),
		b = +prompt('Насколько оцените его?', ''); 
	personalMovieDb.movies[a] = b;
}

console.log(personalMovieDb);
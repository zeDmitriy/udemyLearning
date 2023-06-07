let numberOfFilms;

function start() {
	while (numberOfFilms == '' || numberOfFilms == null ||isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
	return numberOfFilms;
}

start();

const personalMovieDb = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false 
};

function rememberMyFilms() {
	for (let i = 0; i<2; i++) {
		let a = prompt('Один из поледних просмотренных фильмов?', ''),
			b = prompt('Насколько оцените его?', ''); 
		if(a.length != 'null' && a !='' && a.length < 50){
			personalMovieDb.movies[a] = b;
		} else {
			i--;
		}
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDb.count < 10){
		console.log('мало');
	}else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30){
		console.log('зритель');
	}else if (personalMovieDb.count >= 30){
		console.log('киноман');
	}else {
		console.log('error');
	}
}

detectPersonalLevel();

function showMyDb(hidden) {
	if (!hidden) {
		console.log(personalMovieDb);
	}	
}

showMyDb(personalMovieDb.privat);

function writeYourGenres() {
	for (let i = 1; i<4; i++) {
		personalMovieDb.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
	}
}

writeYourGenres();
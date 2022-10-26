const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms, //сюда передается ответ на первый вопрос
    movies: {}, //в это свойство поместить пустой объект
    actors: {}, //тоже поместить пустой объект
    genres: [], //сюда поместить пустой массив
    privat: false //в это свойство поместить boolean(логическое) значение false

}

const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('На сколько оцените его?', '');
const c = prompt('Один из последних просмотренных фильмов?', '');
const d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

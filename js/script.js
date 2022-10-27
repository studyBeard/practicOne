'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms, //сюда передается ответ на первый вопрос
    movies: {}, //в это свойство поместить пустой объект
    actors: {}, //тоже поместить пустой объект
    genres: [], //сюда поместить пустой массив
    privat: false //в это свойство поместить boolean(логическое) значение false

}


if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
}  else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

for (let i=0; i<2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '');
    const b = prompt('На сколько оцените его?', '');

    if (a !=null && b != null && a !='' && b !='' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('Error');
        i--;
    }
}

console.log(personalMovieDB);


import { apiUrlGames } from './API.js';

// without async

let data;

fetch(apiUrlGames)
    .then(res => res.json())

    .then(resJson => {
        console.log(resJson.results);
        data = resJson.results;
    })

    .catch(err => {
        console.log('error');
    })
console.log(data, 'line 18');























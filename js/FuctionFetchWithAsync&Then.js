import { apiUrlGames } from './API.js';

// fetch in function with async and then
/**
 * 
 * @param {string} apiUrl 
 * @returns {Promise<string | Response>}
 */

const executeAPI = async (apiUrl) => {
    let data;

    await fetch(apiUrl, { method: 'GET' })
        .then(async response => {
            data = await response.json();
        })
        .catch(err => data = 'error')

        return new Promise((resolve, reject) => {
            data == 'error' ? reject(data) : resolve(data.results);
        })
}

await executeAPI(apiUrlGames)
    .then(games =>{
        console.log(games);
    })
    .catch(err => console.log(err))


const data = await executeAPI(apiUrlGames);
console.log(data);
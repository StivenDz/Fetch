import { apiUrlGames,apiUrlGenres } from './API.js';
// RECOMENDED
// fetch in function with async

/**
 * 
 * @param {string} apiUrl 
 * @returns {array<object>}
 */
const executeAPI = async (apiUrl) => {
    let data;

    const reponse = await fetch(apiUrl,{ method: 'GET' });
    const resJson = await reponse.json();
    return data = resJson.results;
}

const games = await executeAPI(apiUrlGames);
console.log(games);

// adding data to html ----------------------
const containerCards = document.getElementById('cardsContainer');

let html = '';

for (let i = 0; i < games.length; i++) {
    html += `
        <div class="card">
            <img src="${games[i]['background_image']}" alt="">

            <div class="overlay">
                <h2>${games[i]['name']}</h2>
                <div>
                    <a 
                        target="_blank" 
                        href="http://www.mediafire.com/file/5xfvdsl5vb806ve/GD+(PC)+by-DaniGD.zip/file">
                        Descargar pc
                    </a>
                    <a 
                        target="_blank" 
                        href="https://www.mediafire.com/file/3v42ake9e2olqnv/geometry-dash-2-111.apk/file">
                        Descargar
                        android
                    </a>
                </div>
            </div>
        </div>
        `
}

containerCards.innerHTML = html;
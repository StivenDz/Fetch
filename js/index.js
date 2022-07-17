import { apiUrlGames } from './API.js';

// const apiUrlGames = 'https://api.rawg.io/api/games?key=40a592bb79ee4904bdf5361639c64fb6';

// const apiUrlStores = 'https://api.rawg.io/api/platforms?key=40a592bb79ee4904bdf5361639c64fb6';

// fetch in function with async
const executeAPI = async (apiUrl) => {
    let data;

    const reponse = await fetch(apiUrl,{ method: 'GET' });
    const resJson = await reponse.json();
    return data = resJson.results;
}

const games = await executeAPI(apiUrlGames);
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

// console.log(games);

// const stores = await executeAPI(apiUrlStores);

// console.log(stores);

//---------------------------------------------------------------------------------------------------------------------------

// fetch in function with async and then

// const executeAPI = async (apiUrl) => {
//     let data;

//     await fetch(apiUrl, { method: 'GET' })
//         .then(async response => {
//            return data = await response.json();
//         })
//         .catch(err => data = 'error')

//         return new Promise((resolve, reject) => {
//             data == 'error' ? reject(data) : resolve(data.results);
//         })
// }

// await executeAPI(apiUrlGames)
//     .then(games =>{
//         console.log(games);
//     })
//     .catch(err => console.log(err))

// --------------------------------------------------------------------------



// with async

// const reponse = await fetch(apiUrl);
// const resJson = await reponse.json();
// const data =  resJson.results;

// console.log(data);


// for (let i = 0; i < data.length; i++) {
//     console.log(data[i].name);
// }

//---------------------------------------------------------------------------------------------------------------------------





// without async

// let data;

// fetch(apiUrl)
//     .then(res => res.json())

//     .then(resJson => {
//         console.log(resJson.results);
//         data = resJson.results;
//     })

//     .catch(err => {
//         console.log('error');
//     })


// console.log(data, 'line 18');


//---------------------------------------------------------------------------------------------------------------------------

console.log('End Code!');


// without async

let data1;

fetch(apiUrl, { method: 'GET' })
    .then(res => res.json())
    .then(resJson => {
        console.log(resJson);
        console.log(resJson.results);
        data1 = resJson.results;
    })

    .catch( err => console.log(err))


console.log(data1);


// with async

const response =await fetch(apiUrl, { method: 'GET' });
const json = await response.json();
console.log(json);
const data2 = json.results;
    


// mixed way

const API = async (apiUrl) => {
    let data;
    await fetch(apiUrl, { method: 'GET' })
        .then(async res => { // está de mas
            data = await res.json(); // // está de mas
        })
        .catch(err => {
            let data = 'error';
        })

    // const response = await fetch(apiUrl, { method: 'GET' });
    // const json = response.json();
    // return json;

    return new Promise((resolve, reject) => {
        data == 'error' ? reject(data) : resolve(data);
    })
}

// console.log(API(apiUrl))
await API(apiUrl);
const data3 = await API(apiUrl);
console.log(data3);

console.log(API(apiUrl)); //pending

API(apiUrl)
    .then(data => {
        const games = data.results;
        console.log(games);

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
    })
    .catch(err => { console.log(err); })


console.log('End!');
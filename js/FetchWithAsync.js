import { apiUrlGames } from "./API.js";

// with async

const reponse = await fetch(apiUrlGames);
const resJson = await reponse.json();
const data =  resJson.results;

console.log(data);


for (let i = 0; i < data.length; i++) {
    console.log(data[i].name);
}


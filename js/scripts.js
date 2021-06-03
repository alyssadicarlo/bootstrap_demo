'use strict';

fetch(
    'https://api.chucknorris.io/jokes/random?category=dev'
).then((response) => {
    return response.json();
}).then((data) => {
    const chuckQuote = document.querySelector('#chuckQuote');
    chuckQuote.innerText = data.value;
}).catch((error) => {
    console.error("ERROR: ", error);
});
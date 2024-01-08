'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// OLD SCHOOL
const renderCountry = (data, className = '') => {
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)}M</p>
            </div>
        </article>
        `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
}

const renderError = function(errorMessage) {
    countriesContainer.insertAdjacentText('beforeend', errorMessage);
}

const getJSON  = function(url, errorMessage = 'Something went wrong') {
    console.log('called')
    return fetch(url)
    .then(res => {
        console.log(res)
        if(!res.ok){
            throw new Error(`${errorMessage} (${res.status})`)
        }
        return res.json()
    })
}

// const getCountryData = function(country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function(){
//         const data = JSON.parse(this.responseText)[0]
//         console.log(data)

//         renderCountry(data)

//         // get neighbour country
//         const [neighbour] = data.borders

//         if(!neighbour) return

//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//         request2.send();

//         request2.addEventListener('load', function(){
//             const data = JSON.parse(this.responseText)[0]
    
//             renderCountry(data, 'neighbour')
//         })
//     })
// }

// getCountryData('portugal')
// getCountryData('australia')
// getCountryData('japan')


// const getCountryData = country => {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(res => {
//         if(!res.ok){
//             throw new Error(`Country not found (${res.status})`)
//         }
//         return res.json()
//     })
//     .then(data => {
//         renderCountry(data[0])
        // const neighbour = data[0].borders?.[0]
        // return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//     })
//     .then(res => {
//         console.log('res', res)
//         if(!res.ok){
//             throw new Error('There is no bordering country')
//         }
//         return res.json()
//     })
//     .then(data => {
//         renderCountry(data[0], 'neighbour')
//     })
    // .catch(err => {
    //     renderError(`Something went wrong 😱, ${err.message}`)
    // })
//     .finally( () => {
//         countriesContainer.style.opacity = 1
//     })
// }

const getCountryData = country => {
    getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
        renderCountry(data[0]);
        const neighbour = data[0].borders?.[0]
        getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'No neighbour found')
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
        renderError(`Something went wrong 😱, ${err.message}`)
    })
    .finally(()=> {
        countriesContainer.style.opacity = 1
    })
}

btn.addEventListener('click', function(){
    getCountryData('philippines')
})

// getCountryData('germany');
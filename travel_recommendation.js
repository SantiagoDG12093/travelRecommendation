function showRecommendation(event) {
    event.preventDefault();
    const place = document.getElementById('recommendations').value.toLowerCase();
    
    fetch('../travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            var recommendation_1;
            var recommendation_2;

            if (place == 'country' || place == 'countries') {
                const [random_1, random_2] = generateRandom();
                recommendation_1 = data.countries[random_1].cities[random_2];
            }
            else if (place == 'temple' || place == 'temples') {
                recommendation_1 = data.temples;
            }
            else if (place == 'beach' || place == 'beaches') {
                recommendation_1 = data.beaches;
            }
            console.log(recommendation_1);
            // const recommendation = data.countries.find(country => country.name === "Australia").cities;
        //   const infoRecommendation = document.getElementById('infoRecommendation');
        //   infoRecommendation.innerHTML = `<h2>Weather in ${data.name}</h2>
        //                           <p>Temperature: ${data.main.temp} &#8451;</p>
        //                           <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
          console.error('Error fetching recommendation:', error);
          const infoRecommendation = document.getElementById('infoRecommendation');
          infoRecommendation.innerHTML = `<p>Failed to fetch recommendation. Please try again.</p>`;
        });
}

function generateRandom() {
    const random_1 = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    const random_2 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    return [random_1, random_2];
}

document.getElementById('btnSearch').addEventListener('click',showRecommendation );
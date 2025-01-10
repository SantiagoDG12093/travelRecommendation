function showRecommendation(event) {
    event.preventDefault();
    const place = document.getElementById('recommendations').value.toLowerCase();

    fetch('../travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            var recommendation;
            if (place == 'country' || place == 'countries') {
                recommendation = data.countries;
            }
            else if (place == 'temple' || place == 'temples') {
                recommendation = data.temples;
            }
            else if (place == 'beach' || place == 'beaches') {
                recommendation = data.beaches;
            }
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

document.getElementById('btnSearch').addEventListener('click',showRecommendation );
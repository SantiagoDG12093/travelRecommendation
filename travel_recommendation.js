function showRecommendation(event) {
    event.preventDefault();
    const place = document.getElementById('recommendations').value.toLowerCase();
    
    fetch('../travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            var recommendation_1;
            var recommendation_2;
            var [random_1, random_2] = [0, 0];

            if (place == 'country' || place == 'countries') {
                [random_1, random_2]= generateRandom();
                recommendation_1 = data.countries[random_1].cities[random_2];
                [random_1, random_2]= generateRandom();
                recommendation_2 = data.countries[random_1].cities[random_2];
                
                while (recommendation_1.name === recommendation_2.name) {
                    [random_1, random_2]= generateRandom();
                    recommendation_2 = data.countries[random_1].cities[random_2];
                }
            }
            else if (place == 'temple' || place == 'temples') {
                recommendation_1 = data.temples[0];
                recommendation_2 = data.temples[1];
            }
            else if (place == 'beach' || place == 'beaches') {
                recommendation_1 = data.beaches[0];
                recommendation_2 = data.beaches[1];
            }
            const infoRecommendation = document.getElementById('infoRecommendation');
            infoRecommendation.innerHTML = `<div id="recommendation">
                                                <img src="${recommendation_1.imageUrl}" id="imgRecommendation" alt="${recommendation_1.name}">
                                                <div id="textRecommendation">
                                                    <h1>${recommendation_1.name}</h1>
                                                    <p>${recommendation_1.description}</p>
                                                </div>
                                            </div>
                                            <div id="recommendation">
                                                <img src="${recommendation_2.imageUrl}" id="imgRecommendation" alt="${recommendation_2.name}">
                                                <div id="textRecommendation">
                                                    <h1>${recommendation_2.name}</h1>
                                                    <p>${recommendation_2.description}</p>
                                                </div>
                                            </div>`;
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

document.getElementById('btnReset').addEventListener('click', function() {
    document.getElementById('infoRecommendation').innerHTML = ''; 
});
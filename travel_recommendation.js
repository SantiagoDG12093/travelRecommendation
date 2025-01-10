// function showRecommendation(event) {
//     event.preventDefault();
//     const place = document.getElementById('recommendations').value;
    
//     fetch(travel_recommendation_api.json)
//         .then(response => response.json())
//         .then(data => {
//             const australiaCities = data.countries.find(country => country.name === "Australia").cities;
//             console.log('Ciudades en Australia:', australiaCities);
//         //   const infoRecommendation = document.getElementById('infoRecommendation');
//         //   infoRecommendation.innerHTML = `<h2>Weather in ${data.name}</h2>
//         //                           <p>Temperature: ${data.main.temp} &#8451;</p>
//         //                           <p>Weather: ${data.weather[0].description}</p>`;
//         })
//         .catch(error => {
//           console.error('Error fetching recommendation:', error);
//           const infoRecommendation = document.getElementById('infoRecommendation');
//           infoRecommendation.innerHTML = `<p>Failed to fetch recommendation. Please try again.</p>`;
//         });
// }

function showRecommendation(){
    console.log('click');
}
document.getElementById('btnSearch').addEventListener('click',showRecommendation );
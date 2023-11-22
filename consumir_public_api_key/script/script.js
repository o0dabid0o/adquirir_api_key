const apiKey = "qkoXD4H4JdQAHcgc0YP8wfXvyYefbxrwpO1eKsmQ"

document.getElementById('show-picture').addEventListener('click', async () => {
    try {
        const pictureApi = await getPictureApi(apiKey);
        showPictureApi(pictureApi);
    } catch (error) {
        console.error(`Error al obtener la imagen: ${error.message}`);
    }
})

async function getPictureApi(apiKey) {
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    return response.json();
}

function showPictureApi(pictureApi) {
    console.log("Respuesta de la API de la fotografia del dia:", pictureApi)

    const imageElement = document.getElementById("picture-container");
    imageElement.src = pictureApi.url;
}

// document.getElementById('show-weather').addEventListener('click', async () => {
//     try {
//         const weatherApi = await getWeatherApi(apiKey);
//         showWeatherApi(weatherApi);
//     } catch (error) {
//         console.error(`Error al obtener el clima: ${error.message}`);
//     }
// })

// async function getWeatherApi(apiKey){
//     let response = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`);
//     return response.json();
// }

// function showWeatherApi(weatherApi){
//     const weatherContainer = document.getElementById("weather-conteiner");
//     weatherContainer.innerHTML = "";

//     console.log("Respuesta de la API de Marte:", weatherApi);

//     const solKeys = weatherApi.sol_keys;

//     console.log("Longitud sol_keys:", solKeys.length);

//     console.log("Rango de horas solicitado:", weatherApi.validity_checks.sol_hours_required);

//     if (solKeys.length > 0) {
//         const firstSolKey = solKeys[0];
//         const firstSolData = weatherApi[firstSolKey];
//         const weatherText = `Sol ${firstSolKey}: ${firstSolData.AT.av} °C`;

//         const weatherElement = document.createElement("div");
//         weatherElement.textContent = weatherText;

//         weatherContainer.appendChild(weatherElement);
//     } else {
//         console.log("No se encontraron datos meteorológicos en Marte.");
//     }
// }
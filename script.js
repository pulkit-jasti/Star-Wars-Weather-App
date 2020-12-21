let getLocation = () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			pos => {
				getWeather(pos.coords.latitude, pos.coords.longitude);
			},
			error => {
				switch (error.code) {
					case error.PERMISSION_DENIED:
						alert('I find your lack of faith disturbing');
						break;
					case error.POSITION_UNAVAILABLE:
						alert('I find your lack of faith disturbing');
						break;
					case error.TIMEOUT:
						alert('I find your lack of faith disturbing');
						break;
					case error.UNKNOWN_ERROR:
						alert('I find your lack of faith disturbing');
						break;
				}
			}
		);
	} else {
		alert('I find your lack of faith disturbing');
	}
};

function getWeather(lat, long) {
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=180aa9da1467549c9761e5a9a2daad88`)
		.then(response => response.json())
		.then(result => {
			console.log(result);
			render(result);
		})
		.catch(err => {
			alert(err);
		});
}

planetData = [
	{
		weather: 'Thunderstorm',
		planetName: 'Kamino',
		imgSrc: 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/kamino.png',
	},
	{
		weather: 'Drizzle',
		planetName: 'Kashyyyk',
		imgSrc: 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/dagobah.jpg',
	},
	{
		weather: 'Rain',
		planetName: 'Kamino',
		imgSrc: 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/kamino.png',
	},
	{
		weather: 'Snow',
		planetName: 'Hoth',
		imgSrc: 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/hoth.jpg',
	},
	{
		weather: 'Mist',
		planetName: 'Dagobah',
		imgSrc: 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/dagobah.jpg',
	},
	{
		weather: 'Smoke',
		planetName: 'Balosar',
		imgSrc: 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/balosar.jpg',
	},
	{
		weather: 'Haze',
		planetName: 'Dagobah',
		imgSrc: 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/dagobah.jpg',
	},
	{
		weather: 'Dust',
		planetName: 'Tatooine',
		imgSrc: 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/tatooine.jpg',
	},
	{
		weather: 'Fog',
		planetName: 'Endor',
		imgSrc: 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/endor.jpg',
	},
	{
		weather: 'Sand',
		planetName: 'Tatooine',
		imgSrc: 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/tatooine.jpg',
	},
	{
		weather: 'Ash',
		planetName: 'Mustafar',
		imgSrc: 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/mustafar.jpg',
	},
	{
		weather: 'Squall',
		planetName: 'Kamino',
		imgSrc: 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/kamino.png',
	},
	{
		weather: 'Tornado',
		planetName: 'Geonosis',
		imgSrc: 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/geonosis.jpg',
	},
	{
		weather: 'Clouds',
		planetName: 'Bespin',
		imgSrc: 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/bespin.jpg',
	},
];

function render(data) {
	let temp = document.getElementById('temp');
	let info = document.getElementById('info');
	let bckImageContainer = document.getElementById('bck-container');
	let planetName = document.getElementById('planet-name');

	temp.textContent = `${Math.floor(data.main.temp - 273.15)}° C`;
	info.textContent = `It's ${data.weather[0].description}, feels like`;

	main = data.weather[0].main;
	let currentPlanet = null;
	//<img id="bck" src="assets/naboo.jpg" alt="" />

	if (Math.floor(data.main.temp - 273.15) > 40) {
		info.textContent = "It's burning hot, feels like";
		bckImageContainer.innerHTML = `<img id="bck" src="https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/mustafar.jpg" alt="" />`;
		planetName.textContent = 'Mustafar';
	} else {
		console.log(data.weather[0].main);
		planetData.forEach(el => {
			if (el.weather == data.weather[0].main) {
				currentPlanet = el;
			}
		});

		bckImageContainer.innerHTML = `<img id="bck" src="${currentPlanet.imgSrc}" alt="" />`;
		planetName.textContent = currentPlanet.planetName;
	}
}

getLocation();

/*switch (data.weather[0].main) {
			case 'Thunderstorm':
				bckImage.src = 'random';
				break;
			case 'Drizzle':
				bckImage.src = 'random';
				break;

			case 'Rain':
				bckImage.src = 'random';
				break;
			case 'Snow':
				bckImage.src = 'random';
				break;

			case 'Snow':
				bckImage.src = 'random';
				break;

			default:
				break;
		}*/

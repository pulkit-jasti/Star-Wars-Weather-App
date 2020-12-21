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
		imgSrc: 'kamino.png',
	},
	{
		weather: 'Drizzle',
		planetName: 'Kashyyyk',
		imgSrc: 'dagobah.jpg',
	},
	{
		weather: 'Rain',
		planetName: 'Kamino',
		imgSrc: 'kamino.png',
	},
	{
		weather: 'Snow',
		planetName: 'Hoth',
		imgSrc: 'hoth.jpg',
	},
	{
		weather: 'Mist',
		planetName: 'Dagobah',
		imgSrc: 'dagobah.jpg',
	},
	{
		weather: 'Smoke',
		planetName: 'Balosar',
		imgSrc: 'balosar.jpg',
	},
	{
		weather: 'Haze',
		planetName: 'Dagobah',
		imgSrc: 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/dagobah.jpg',
	},
	{
		weather: 'Dust',
		planetName: 'Tatooine',
		imgSrc: 'tatooine.jpg',
	},
	{
		weather: 'Fog',
		planetName: 'Endor',
		imgSrc: 'endor.jpg',
	},
	{
		weather: 'Sand',
		planetName: 'Tatooine',
		imgSrc: 'tatooine.jpg',
	},
	{
		weather: 'Ash',
		planetName: 'Mustafar',
		imgSrc: 'mustafar.jpg',
	},
	{
		weather: 'Squall',
		planetName: 'Kamino',
		imgSrc: 'kamino.png',
	},
	{
		weather: 'Tornado',
		planetName: 'Geonosis',
		imgSrc: 'geonosis,jpg',
	},
	{
		weather: 'Clouds ',
		planetName: 'Bespin',
		imgSrc: 'bespin.jpg',
	},
];

function render(data) {
	let temp = document.getElementById('temp');
	let info = document.getElementById('info');
	let bckImage = document.getElementById('bck');
	let planetName = document.getElementById('planet-name');

	temp.textContent = `${Math.floor(data.main.temp - 273.15)}° C`;
	info.textContent = `It's ${data.weather[0].description}, feels like`;

	main = data.weather[0].main;
	let currentPlanet = null;

	if (Math.floor(data.main.temp - 273.15) > 40) {
		info.textContent = "It's burning hot, feels like";
		bckImage.src = 'https://raw.githubusercontent.com/pulkit-jasti/Pandora-store/master/src/assets/product-images/high-ground.png';
		planetName.textContent = 'Mustafar';
	} else {
		planetData.forEach(el => {
			if (el.weather == data.weather[0].main) {
				currentPlanet = el;
			}
		});

		bckImage.src = currentPlanet.imgSrc;
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

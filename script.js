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
	let data;
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
		imgSrc: 'none',
	},
	{
		weather: 'Drizzle',
		planetName: 'Kashyyyk',
		imgSrc: 'dagobah.jpg',
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

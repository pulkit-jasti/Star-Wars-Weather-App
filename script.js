let getLocation = () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			pos => {
				getWeather(pos.coords.latitude, pos.coords.longitude);
			},
			error => {
				switch (error.code) {
					case error.PERMISSION_DENIED:
						alert('Turn on location services or open the website on desktop');
						break;
					case error.POSITION_UNAVAILABLE:
						alert('Turn on location services or open the website on desktop');
						break;
					case error.TIMEOUT:
						alert('Turn on location services or open the website on desktop');
						break;
					case error.UNKNOWN_ERROR:
						alert('Turn on location services or open the website on desktop');
						break;
				}
			}
		);
	} else {
		alert('Turn on location services or open the website on desktop');
	}
};

function getWeather(lat, long) {
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=180aa9da1467549c9761e5a9a2daad88`)
		.then(response => response.json())
		.then(result => {
			//console.log(result);
			render(result);
		})
		.catch(err => {
			alert(err);
			console.log(err);
		});
}

function render(data) {
	let temp = document.getElementById('temp');
	let info = document.getElementById('info');
	let bckImageContainer = document.getElementById('bck-container');
	let planetName = document.getElementById('planet-name');

	let temperature = Math.floor(data.main.temp - 273.15);
	temp.textContent = `${temperature}° C`;
	info.textContent = `It's a ${data.weather[0].description}, feels like`;

	main = data.weather[0].main;

	if (temperature > 40) {
		info.textContent = "It's burning hot, feels like";
		bckImageContainer.innerHTML = `<img id="bck" src="https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/mustafar.jpg" alt="" />`;
		planetName.textContent = 'Mustafar';
	} else if (main == 'Clear') {
		if (temperature > 20) {
			planetName.textContent = 'Coruscant';
			let d = new Date().getHours();

			if (d > 18) {
				bckImageContainer.innerHTML = `<img id="bck" src="https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/coruscant-night.jpg" alt="" />`;
			} else {
				bckImageContainer.innerHTML = `<img id="bck" src="https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/coruscant-day.jpg" alt="" />`;
			}
		} else {
			planetName.textContent = 'Naboo';
			bckImageContainer.innerHTML = `<img id="bck" src="https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/naboo.jpg" alt="" />`;
		}
	} else {
		planetData.forEach(el => {
			if (el.weather == main) {
				bckImageContainer.innerHTML = `<img id="bck" src="${el.imgSrc()}" alt="" />`;
				planetName.textContent = el.planetName;
			}
		});
	}
}

getLocation();

planetData = [
	{
		weather: 'Thunderstorm',
		planetName: 'Kamino',
		imgSrc: () => 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/kamino.png',
	},
	{
		weather: 'Drizzle',
		planetName: 'Kashyyyk',
		imgSrc: () => 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/kashyyyk.jpg',
	},
	{
		weather: 'Rain',
		planetName: 'Kamino',
		imgSrc: () => {
			let bckList = [
				'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/kamino.png',
				'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/rain2.jpg',
			];
			return bckList[Math.floor(Math.random() * 2)];
		},
	},
	{
		weather: 'Snow',
		planetName: 'Hoth',
		imgSrc: () => 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/hoth.jpg',
	},
	{
		weather: 'Mist',
		planetName: 'Dagobah',
		imgSrc: () => 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/dagobah.jpg',
	},
	{
		weather: 'Smoke',
		planetName: 'Balosar',
		imgSrc: () => 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/balosar.jpg',
	},
	{
		weather: 'Haze',
		planetName: 'Dagobah',
		imgSrc: () => 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/dagobah.jpg',
	},
	{
		weather: 'Dust',
		planetName: 'Tatooine',
		imgSrc: () => 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/tatooine.jpg',
	},
	{
		weather: 'Fog',
		planetName: 'Endor',
		imgSrc: () => 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/endor.jpg',
	},
	{
		weather: 'Sand',
		planetName: 'Tatooine',
		imgSrc: () => 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/tatooine.jpg',
	},
	{
		weather: 'Ash',
		planetName: 'Mustafar',
		imgSrc: () => 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/mustafar.jpg',
	},
	{
		weather: 'Squall',
		planetName: 'Kamino',
		imgSrc: () => 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/kamino.png',
	},
	{
		weather: 'Tornado',
		planetName: 'Geonosis',
		imgSrc: () => 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/geonosis.jpg',
	},
	{
		weather: 'Clouds',
		planetName: 'Bespin',
		imgSrc: () => 'https://raw.githubusercontent.com/pulkit-jasti/Star-Wars-Weather-App/main/assets/bespin.jpg',
	},
];

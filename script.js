let getLocation = () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			pos => {
				getWeather(pos.coords.latitude, pos.coords.longitude);
			},
			error => {
				switch (error.code) {
					case error.PERMISSION_DENIED:
						alert('User denied the request for Geolocation');
						break;
					case error.POSITION_UNAVAILABLE:
						alert('User denied the request for Geolocation');
						break;
					case error.TIMEOUT:
						alert('User denied the request for Geolocation');
						break;
					case error.UNKNOWN_ERROR:
						alert('User denied the request for Geolocation');
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
			data = result;
			console.log(Math.floor(data.main.temp - 273.15));
		})
		.catch(err => {
			alert(err);
		});
}

getLocation();

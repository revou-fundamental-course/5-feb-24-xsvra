document.addEventListener("DOMContentLoaded", function () {
	const celciusInput = document.getElementById("celcius");
	const fahrenheitInput = document.getElementById("fahrenheit");
	const celciusLabel = document.getElementById("celciusLabel");
	const fahrenheitLabel = document.getElementById("fahrenheitLabel");
	const resultDisplay = document.getElementById("result");
	const convertButton = document.querySelectorAll("button")[0];
	const resetButton = document.getElementById("resetButton");
	const reverseButton = document.querySelectorAll("button")[2];
	let isCtoF = true;

	const updateLabels = () => {
		if (isCtoF) {
			celciusInput.placeholder = "Masukkan Celsius";
			fahrenheitInput.placeholder = "Hasil Fahrenheit";
			celciusLabel.textContent = "Celsius (°C):";
			fahrenheitLabel.textContent = "Fahrenheit (°F):";
		} else {
			celciusInput.placeholder = "Masukkan Fahrenheit";
			fahrenheitInput.placeholder = "Hasil Celsius";
			celciusLabel.textContent = "Fahrenheit (°F):";
			fahrenheitLabel.textContent = "Celsius (°C):";
		}
	};

	reverseButton.addEventListener("click", function (event) {
		event.preventDefault();
		isCtoF = !isCtoF;
		updateLabels();
		celciusInput.value = "";
		fahrenheitInput.value = "";
		resultDisplay.value = "";
	});

	const convertTemp = () => {
		const inputVal = parseFloat(celciusInput.value);
		let result;

		if (isCtoF) {
			result = ((inputVal * 9) / 5 + 32).toFixed(1);
			resultDisplay.value = `${inputVal}°C * 9/5 + 32 = ${result}°F`;
		} else {
			result = (((inputVal - 32) * 5) / 9).toFixed(1);
			resultDisplay.value = `${inputVal}°F - 32 * 5/9 = ${result}°C`;
		}

		fahrenheitInput.value = result;
	};

	convertButton.addEventListener("click", function (event) {
		event.preventDefault();
		convertTemp();
	});

	resetButton.addEventListener("click", function (event) {
		event.preventDefault();
		celciusInput.value = "";
		fahrenheitInput.value = "";
		resultDisplay.value = "";
	});

	updateLabels();
});

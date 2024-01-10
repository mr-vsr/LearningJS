const form = document.querySelector("form");

form.addEventListener("submit", e => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector(".result");
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // result.innerHTML = `<span>${bmi}</span>`;
        if (bmi < 18.5) {
            result.innerHTML = `<span>${bmi}</span> You are underweight.`;
        } else if (bmi >= 18.5 && bmi < 25) {
            result.innerHTML = `<span>${bmi}</span> You are normal.`;
        } else if (bmi >= 25 && bmi < 30) {
            result.innerHTML = `<span>${bmi}</span> Should start excersing.`;
        } else if (bmi >= 30) {
            result.innerHTML = `<span>${bmi}</span> You are obese.`;
        } else {
            result.innerHTML = `There is an error with your input.`;
        }
    }
})
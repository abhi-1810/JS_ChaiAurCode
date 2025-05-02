const form = document.querySelector('form');

// this usecase will give you empty:
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const validHeight = document.querySelector('#validHeight');
  const weight = parseFloat(document.querySelector('#weight').value);
  const validWeight = document.querySelector('#validWeight');
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    validHeight.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    validWeight.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
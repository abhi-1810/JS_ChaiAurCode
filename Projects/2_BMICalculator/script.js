const form = document.querySelector('form');

// this usecase will give you empty:
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission behavior

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const validHeight = document.querySelector('#validHeight');
  const validWeight = document.querySelector('#validWeight');
  const results = document.querySelector('#results');

  // Clear any previous messages
  validHeight.innerHTML = '';
  validWeight.innerHTML = '';
  results.innerHTML = '';

  if (height === '' || height < 0 || isNaN(height)) {
    validHeight.innerHTML = `${height}: Please give a valid height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    validWeight.innerHTML = `${weight}: Please give a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `Your BMI is: ${bmi}`;
  }
});
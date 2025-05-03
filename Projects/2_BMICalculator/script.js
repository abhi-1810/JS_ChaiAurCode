const form = document.querySelector('form');

// this usecase will give you empty:
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault(); // 

  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;
  const validHeight = document.querySelector('#validHeight');
  const validWeight = document.querySelector('#validWeight');
  const results = document.querySelector('#results');

  if (height === '' || parseInt(height) < 0 || isNaN(parseInt(height))) {
    validHeight.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || parseInt(weight) < 0 || isNaN(parseInt(weight))) {
    validWeight.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `Your BMI is: ${bmi}`;
  }
});
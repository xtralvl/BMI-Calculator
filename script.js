// GENDER BUTTONS //
const maleIcon = document.getElementById('male');
const femaleIcon = document.getElementById('female');

maleIcon.addEventListener("click", () => {
  document.body.classList.add("male-mode");
  document.body.classList.remove("female-mode");
  isFormComplete(); // Ellenőrizzük a formot
});

femaleIcon.addEventListener("click", () => {
  document.body.classList.add("female-mode");
  document.body.classList.remove("male-mode");
  isFormComplete(); // Ellenőrizzük a formot
});

// HEIGHT UNIT BUTTONS //
const cmButton = document.getElementById('cm');
const ftButton = document.getElementById('ft');

cmButton.addEventListener("click", () => {
  document.body.classList.add("cm-mode");
  document.body.classList.remove("ft-mode");
  document.getElementById('height').placeholder = 'Type in your height in cm';
  document.getElementById("height").disabled = false;
  isFormComplete(); // Ellenőrizzük a formot
});

ftButton.addEventListener("click", () => {
  document.body.classList.add("ft-mode");
  document.body.classList.remove("cm-mode");
  document.getElementById('height').placeholder = 'Type in your height in ft';
  document.getElementById("height").disabled = false;
  isFormComplete(); // Ellenőrizzük a formot
});

// WEIGHT UNIT BUTTONS //
const kgButton = document.getElementById('kg');
const lbsButton = document.getElementById('lbs');

kgButton.addEventListener("click", () => {
  document.body.classList.add("kg-mode");
  document.body.classList.remove("lbs-mode");
  document.getElementById('weight').placeholder = 'Type in your weight in kg';
  document.getElementById("weight").disabled = false;
  isFormComplete(); // Ellenőrizzük a formot
});

lbsButton.addEventListener("click", () => {
  document.body.classList.add("lbs-mode");
  document.body.classList.remove("kg-mode");
  document.getElementById('weight').placeholder = 'Type in your weight in lbs';
  document.getElementById("weight").disabled = false;
  isFormComplete(); // Ellenőrizzük a formot
});

// ENSURE THAT FORM IS COMPLETE
const isFormComplete = () => {
  const age = document.getElementById('age');
  const weight = document.getElementById('weight');
  const height = document.getElementById('height');
  const submitButton = document.getElementById('submit');

  const isGenderSelected = document.body.classList.contains("male-mode") || document.body.classList.contains("female-mode");
  const isHeightUnitSelected = document.body.classList.contains("cm-mode") || document.body.classList.contains("ft-mode");
  const isWeightUnitSelected = document.body.classList.contains("kg-mode") || document.body.classList.contains("lbs-mode");

  if (
    isGenderSelected &&
    isHeightUnitSelected &&
    isWeightUnitSelected &&
    age.value !== '' &&
    height.value !== '' &&
    weight.value !== ''
  ) {
    submitButton.disabled = false; // Aktiváljuk a gombot
  } else {
    submitButton.disabled = true; // Letiltjuk a gombot
  }
}

// Hívjuk meg az `isFormComplete` függvényt minden szükséges eseménynél
maleIcon.addEventListener("click", isFormComplete);
femaleIcon.addEventListener("click", isFormComplete);
cmButton.addEventListener("click", isFormComplete);
ftButton.addEventListener("click", isFormComplete);
kgButton.addEventListener("click", isFormComplete);
lbsButton.addEventListener("click", isFormComplete);
document.getElementById('age').addEventListener("input", isFormComplete);
document.getElementById('height').addEventListener("input", isFormComplete);
document.getElementById('weight').addEventListener("input", isFormComplete);

const result = document.getElementById('result');

// RESULT CALCULATION
const calculateBMI = () => {
  const weightInput = parseFloat(document.getElementById('weight').value);
  const heightInput = parseFloat(document.getElementById('height').value);

  // Ellenőrizzük, hogy a beírt értékek számok
  if (isNaN(weightInput) || isNaN(heightInput) || weightInput <= 0 || heightInput <= 0) {
    result.innerHTML = "Please enter valid weight and height values.";
    return;
  }

  const heightM = document.body.classList.contains("cm-mode")
    ? heightInput / 100
    : heightInput * 0.3048;

  const weightKg = document.body.classList.contains("kg-mode")
    ? weightInput
    : weightInput / 2.20462;

  const bmi = weightKg / (heightM * heightM);

  if (bmi < 18.5) {
    result.innerHTML = `Your BMI is ${bmi.toFixed(1)}.`;
}
  result.style.fontSize = '1.5rem';
}

// Prevent reloading after submit
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    calculateBMI(); // Calculate BMI when the form is submitted
});

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
  document.getElementById('age').value = '';  
  document.getElementById('weight').value = '';  
  document.getElementById('height').value = '';

  const submitButton = document.getElementById('submit');
  submitButton.disabled = true;

  document.body.classList.remove('male-mode', 'female-mode', 'cm-mode', 'ft-mode', 'kg-mode', 'lbs-mode');
  result.innerHTML = '';
})
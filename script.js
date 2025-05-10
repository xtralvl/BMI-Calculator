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
const hint = document.getElementById('hint');

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

  // Male Age 18–39
  if (document.body.classList.contains("male-mode") && (document.getElementById('age').value <= 39)) {
    if (bmi < 18.5) {
        result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Underweight).`;
        hint.innerHTML = `Try adding protein-rich snacks to your day. Light strength training can support healthy weight gain.`;
      } else if ((bmi > 18.5 ) && (bmi < 24.9)) {
        result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Normal weight)`;
        hint.innerHTML = `Keep up regular activity and balanced meals. Consider adding cardio for heart health.`;
      } else if ((bmi > 25 ) && (bmi < 29.9)) {
        result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Overweight)`;
        hint.innerHTML = `Swap sugary drinks for water. Try a 20-minute walk after meals.`;
      } else if ((bmi > 30 ) && (bmi < 34.9)) {
        result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Obesity (Class 1))`;
        hint.innerHTML = `Focus on small daily changes, like cooking at home. Talk to a professional if you feel stuck.`;
      } else if ((bmi > 35 ) && (bmi < 39.9)) {
        result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Obesity (Class 2))`;
        hint.innerHTML = `Focus on small daily changes, like cooking at home. Talk to a professional if you feel stuck.`;
      } else if (bmi >= 40 ) {
        result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Obesity (Class 3))`;
        hint.innerHTML = `Focus on small daily changes, like cooking at home. Talk to a professional if you feel stuck.`;
      }          
  }

    // Male Age 40+
    if (document.body.classList.contains("male-mode") && (document.getElementById('age').value > 39)) {
        if (bmi < 18.5) {
            result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Underweight)`;
            hint.innerHTML = `Add healthy fats like nuts or olive oil to meals. Monitor bone health with regular checkups.`;
          } else if ((bmi > 18.5 ) && (bmi < 24.9)) {
            result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Normal weight)`;
            hint.innerHTML = ` Keep moving—daily walks help maintain mobility. Fiber is your friend for digestion.`;
          } else if ((bmi > 25 ) && (bmi < 29.9)) {
            result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Overweight)`;
             hint.innerHTML = `Watch portion sizes and reduce processed foods. Try gentle exercise like swimming or yoga.`;
          } else if ((bmi > 30 ) && (bmi < 34.9)) {
            result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Obesity (Class 1))`;
            hint.innerHTML = `Aim for gradual progress—5% weight loss can already boost health. Limit added sugar and alcohol.`;
          } else if ((bmi > 35 ) && (bmi < 39.9)) {
            result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Obesity (Class 2))`;
            hint.innerHTML = `Aim for gradual progress—5% weight loss can already boost health. Limit added sugar and alcohol.`;
          } else if (bmi >= 40 ) {
            result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Obesity (Class 3))`;
            hint.innerHTML = `Aim for gradual progress—5% weight loss can already boost health. Limit added sugar and alcohol.`;
          }          
      }

        // Female Age 18–39
  if (document.body.classList.contains("female-mode") && (document.getElementById('age').value <= 39)) {
    if (bmi < 18.5) {
        result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Underweight)`;
        hint.innerHTML = `Add calorie-rich but healthy snacks like avocado or nut butter. Make sure you’re getting enough iron.`;
      } else if ((bmi > 18.5 ) && (bmi < 24.9)) {
        result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Normal weight)`;
        hint.innerHTML = `Keep a good sleep schedule and move daily. Stay hydrated—your body needs it.`;
      } else if ((bmi > 25 ) && (bmi < 29.9)) {
        result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Overweight)`;
        hint.innerHTML = `Add veggies to every meal. Dancing or brisk walks can make exercise fun.`;
      } else if ((bmi > 30 ) && (bmi < 34.9)) {
        result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Obesity (Class 1))`;
        hint.innerHTML = `Small habits add up—start with one healthy change. Avoid skipping meals; eat balanced portions.`;
      } else if ((bmi > 35 ) && (bmi < 39.9)) {
        result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Obesity (Class 2))`;
        hint.innerHTML = `Small habits add up—start with one healthy change. Avoid skipping meals; eat balanced portions.`;
      } else if (bmi >= 40 ) {
        result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Obesity (Class 3))`;
        hint.innerHTML = `Small habits add up—start with one healthy change. Avoid skipping meals; eat balanced portions.`;
      }          
  }

    // Female Age 40+
    if (document.body.classList.contains("female-mode") && (document.getElementById('age').value > 39)) {
        if (bmi < 18.5) {
            result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Underweight)`;
            hint.innerHTML = `Bone density matters—include calcium-rich foods. Smoothies can help boost intake without big meals.`;
          } else if ((bmi > 18.5 ) && (bmi < 24.9)) {
            result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Normal weight)`;
            hint.innerHTML = `Strength training 2x a week supports muscle and bone. Stay consistent with meals and rest.`;
          } else if ((bmi > 25 ) && (bmi < 29.9)) {
            result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Overweight)`;
            hint.innerHTML = `Limit refined carbs and sugary snacks. Try cooking more at home.`;
          } else if ((bmi > 30 ) && (bmi < 34.9)) {
            result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Obesity (Class 1))`;
            hint.innerHTML = `Set gentle, realistic goals. Reducing stress can also support weight changes.`;
          } else if ((bmi > 35 ) && (bmi < 39.9)) {
            result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Obesity (Class 2))`;
            hint.innerHTML = `Set gentle, realistic goals. Reducing stress can also support weight changes.`;
          } else if (bmi >= 40 ) {
            result.innerHTML = `Your BMI is ${bmi.toFixed(1)} (Obesity (Class 3))`;
            hint.innerHTML = `Set gentle, realistic goals. Reducing stress can also support weight changes.`;
          }          
          }
          
  result.style.fontSize = '1.3rem';
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
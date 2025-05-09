// GENDER BUTTONS //
const maleIcon = document.getElementById('male');
const femaleIcon = document.getElementById('female');

maleIcon.addEventListener("click", () => {
    document.body.classList.add("male-mode");
    document.body.classList.remove("female-mode");
    maleIcon.classList.add("active");
    femaleIcon.classList.remove("active");
  });
  
  femaleIcon.addEventListener("click", () => {
    document.body.classList.add("female-mode");
    document.body.classList.remove("male-mode");
    femaleIcon.classList.add("active");
    maleIcon.classList.remove("active");
  });

  // HEIGHT UNIT BUTTONS //

  const cmButton = document.getElementById('cm');
  const ftButton = document.getElementById('ft')
  
  cmButton.addEventListener("click", () => {
    document.body.classList.add("cm-mode");
    document.body.classList.remove("ft-mode");
    cmButton.classList.add("active");
    ftButton.classList.remove("active");
    document.getElementById('height').placeholder = 'Type in your height in cm';
    document.getElementById("height").disabled = false;
  });
  
  ftButton.addEventListener("click", () => {
    document.body.classList.add("ft-mode");
    document.body.classList.remove("cm-mode");
    ftButton.classList.add("active");
    cmButton.classList.remove("active");
    document.getElementById('height').placeholder = 'Type in your height in ft';
    document.getElementById("height").disabled = false;
  });

  // HEIGHT UNIT BUTTONS //

  const kgButton = document.getElementById('kg');
  const lbsButton = document.getElementById('lbs');

  kgButton.addEventListener("click", () => {
    document.body.classList.add("kg-mode");
    document.body.classList.remove("lbs-mode");
    kgButton.classList.add("active");
    lbsButton.classList.remove("active");
    document.getElementById('weight').placeholder = 'Type in your weight in kg';
    document.getElementById("weight").disabled = false;


  });
  
  lbsButton.addEventListener("click", () => {
    document.body.classList.add("lbs-mode");
    document.body.classList.remove("kg-mode");
    lbsButton.classList.add("active");
    kgButton.classList.remove("active");
    document.getElementById('weight').placeholder = 'Type in your weight in lbs';
    document.getElementById("weight").disabled = false;

  });
  
  /* SUBMIT */

  // Get the form element
const form = document.querySelector("form");

form.addEventListener("submit", function (pageReload) {
    pageReload.preventDefault(); // prevent the page from reloading

  // DATA //
  const gender = document.getElementById("male").classList.contains("active")
  ? "male"
  : document.getElementById("female").classList.contains("active")
  ? "female"
  : null;

  const age = document.getElementById("age").value;

  const height = document.getElementById("height").value;
  const heightUnit = document.getElementById("cm").classList.contains("active")
    ? "cm"
    : document.getElementById("ft").classList.contains("active")
    ? "ft"
    : null;

  const weight = document.getElementById("weight").value;
  const weightUnit = document.getElementById("kg").classList.contains("active")
    ? "kg"
    : document.getElementById("lbs").classList.contains("active")
    ? "lbs"
    : null;

  /*
  console.log("Age:", age);
  console.log("Gender:", gender);
  console.log("Height:", height, heightUnit);
  console.log("Weight:", weight, weightUnit); */
});

 // Submit button 



// TASK 1
// Create an object car with these fields: brand, color, numOfDoors. Fill those fields with values and console.log each of them separately.
const carTaskOne = {
  brand: "Volga",
  color: "midnight-blue",
  numOfDoors: 3,
};

console.log(carTaskOne.brand);
console.log(carTaskOne.color);
console.log(carTaskOne.numOfDoors);


// TASK 2
// Create a function createPerson that takes first name and last name, age, and returns object with same named keys and its values are set to the passed arguments.

function createPerson(firstName, lastName, age) {
  const user = {}
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  user.isLegalAge = function () {
      if (age >= 20) {
          return true;
      } else {
          return false;
      }
  }
  user.isLegalAge(age);
  return user;
}
const user = createPerson("Arminas", "Bagdzevičius", 29);
console.log(user.isLegalAge());

// TASK 2.1
// Add a method to that object that when it's invoked it should return if that person is of legal age, legal age is 20.



// TASK 3
// Create two inputs and a button in your HTML, when button is clicked create and return an object with its key set as the first input value and its value is set to the second input value.

const elements = {
  inputOne: document.querySelector("#input-one"),
  inputTwo: document.querySelector("#input-two"),
  submitButton: document.querySelector("#submit-btn"),
};

function createObject() {
  const object = {};
  object[elements.inputOne.value] = elements.inputTwo.value;
  return object;
}

elements.submitButton.addEventListener("click", createObject);

// TASK 4
// Create a function isEqual that takes two objects and returns if they are equal. Use function created in second task to create objects that you need to compare. Remember functions are reference type just like objects are.

function isEqual() {
  const firstObj = createPerson("Tomas", "Ponas", 44);
  const secondObj = createPerson("Romas", "Fonas", 54);

  return firstObj.firstName === secondObj.firstName;
}


// TASK 5
/*
  Create inputs, dropdowns, checkboxes and a button:
      a. Car brand (input)
      b. Car color (input)
      c. Engine (dropdown with values)
          i. 80kW
          ii. 100kW
          iii. 120kW
      d. Transmition (dropdown with values)
          i. Manual
          ii. Automatic
      e. Premium package (optional checkbox)
      d. Winter package (optional checkbox)
*/


// TASK 5.1
/*
  Create a function that gets invoked when user clicks button it will construct an car object and return it. This object will hold all values that user has selected/written. Constraints: 
      a. car brand, car color, engine and transmition should be in the first layer of object. ( so if I would try to read value of car color I would need to traverse object as so: car.carColor )
      b. premium package and winter package should be its own separate object that is stored inside car object under 'extras' key. ( so if I would try to read value of winter package I would need to traverse object as so: car.extras.winterPackage )
*/


const taskFiveElements = {
  body: document.querySelector("body"),
  carBrandInput: document.querySelector("#car-brand"),
  carColorInput: document.querySelector("#car-color"),
  engineSelect: document.querySelector("#engine"),
  transmitionSelect: document.querySelector("#transmition"),
  premiumCheckbox: document.querySelector("#premium"),
  winterCheckbox: document.querySelector("#winter"),
  submitButton: document.querySelector("#submit-car-btn"),
};

function clearInputValue() {
  taskFiveElements.carBrandInput.value = "";
  taskFiveElements.carColorInput.value = "";
  taskFiveElements.engineSelect.value = "";
  taskFiveElements.transmitionSelect.value = "";
  taskFiveElements.premiumCheckbox.checked = false;
  taskFiveElements.winterCheckbox.checked = false;
}

function submitCar(event) {
  event.preventDefault();
  const car = {
      extras: {},
  };
  car.brand = taskFiveElements.carBrandInput.value;
  car.color = taskFiveElements.carColorInput.value;
  car.engine = taskFiveElements.engineSelect.value;
  car.transmition = taskFiveElements.transmitionSelect.value;
  car.extras.premiumPackage = taskFiveElements.premiumCheckbox.checked;
  car.extras.winterPackage = taskFiveElements.winterCheckbox.checked;

  taskFiveElements.body.append(displayResult(car));
  clearInputValue();
  return car;
}

taskFiveElements.submitButton.addEventListener("click", submitCar);

// TASK 5.2
/*
  Create a function that will be used to display result of 5.1 on our page and in addition it should also include button 'Edit' which when clicked will prefill form of 5 task with data it is editing.
  (apart 'Edit' button it should look simillar to how we implemented our forms in projects that we did where user enters information and on button click we created containers that we displayed on the right side, for checkboxes display their values as boolean type)
*/

function displayResult(someCar) {
  const resultContainer = document.createElement("div");
  const resultParagraph = document.createElement("p");
  const editButton = document.createElement("button");
  resultParagraph.textContent = JSON.stringify(someCar);
  editButton.textContent = "Edit";
  editButton.addEventListener("click", function () {
      taskFiveElements.carBrandInput.value = someCar.brand;
      taskFiveElements.carColorInput.value = someCar.color;
      taskFiveElements.engineSelect.value = someCar.engine;
      taskFiveElements.transmitionSelect.value = someCar.transmition;
      taskFiveElements.premiumCheckbox.checked = someCar.extras.premiumPackage;
      taskFiveElements.winterCheckbox.checked = someCar.extras.winterPackage;
  });
  resultContainer.append(resultParagraph, editButton);
  return resultContainer;
}

// TASK 6
/*
  Create a function validatePersonEntry which would take two arguments:
      a. person object constructed in task two
      b. expose age boolean, by default it should be false
  This function should return NEW object with these properties:
      a. firstName
      b. lastName
      c. age (only if expose age was set to true)
      d. entryAllowed ( should be return value of method that we have created in 2.1 )
*/


function validatePersonEntry(person, exposeAge) {
  newObject = {};
  newObject.firstName = person.firstName;
  newObject.lastName = person.lastName;
  if (exposeAge) {
      newObject.age = person.age;
      newObject.entryAllowed = person.isLegalAge();
  }
  return newObject;
}

const newUser = validatePersonEntry(createPerson("Arminas", "Bagdzevičius", 29), true);
console.log(newUser);


// BONUS TASK
// Demonstrate closures in javascript.

function lukeIAmYourFatha() {
  const iCanSeeYouFatha = {
      thisIsA: "secret",
  };
  function iAmLuke() {
      iCanSeeYouFatha.thisIsA = "secret no more";
  }
  iAmLuke();
  return iCanSeeYouFatha;
}
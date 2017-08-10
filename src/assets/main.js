let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(!answer.value || !attempt.value) {
      setHiddenField();
    }

    if (!validateInput(input.value)) {
      return false;
    }
    attempt.value++;
}

//implement new functions here
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function setHiddenFields() {
  attempt.value = 0;
  answer.value = getRandomInt(0,9999);

  while (answer.value.length < 4) {
    answer.value = "0" + answer.value;
  }
}

//function sets the message to supplied string
function setMessage(message){
    document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
  if (input.length == 4) {
    return true;
  } else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}

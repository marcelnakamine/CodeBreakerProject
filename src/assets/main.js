let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(!answer.value || !attempt.value) {
      setHiddenFields();
    }

    if (!validateInput(input.value)) {
      return false;
    }
    attempt.value++;

    if (getResults(input.value)) {
      setMessage("You Win! :)");
      showAnswer(true);
      showReplay();
    } else if (attempt.value >= 10) {
      setMessage("You Lose! :(");
      showAnswer(false);
      showReplay();
    } else {
      setMessage("Incorrect, try again.");
    }
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

function getResults(input) {
  let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  let correct = 0;

  for (var i = 0; i < input.length; i++) {
    if (answer.value.charAt(i) == input.charAt(i)) {
      html += '<span class="glyphicon glyphicon-ok"></span>';
      correct++;
    } else if (answer.value.indexOf(input.charAt(i)) != -1) {
      html += '<span class="glyphicon glyphicon-transfer"></span>';
    } else {
      html += '<span class="glyphicon glyphicon-remove"></span>';
    }
  }

  html += '</div></div>';

  document.getElementById('results').innerHTML += html;

  if (correct == answer.value.length) {
    return true;
  }
  return false;
}

function showAnswer(isThePlayerWon) {
  let code = document.getElementById('code');
  code.innerHTML = answer.value;
  if (isThePlayerWon) {
    code.className += ' success'
  } else {
    code.className += ' failure'
  }
}

function showReplay() {
  document.getElementById('guessing-div').style.display = 'none';
  document.getElementById('replay-div').style.display = 'block';
}

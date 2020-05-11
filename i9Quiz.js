const formItems = [];
const lname = document.getElementById("lname");
const startQuiz = document.getElementById("start-quiz");
const resetQuiz = document.getElementById("reset-quiz");
const submitQuiz = document.getElementById("submit-quiz");
const incorrectEmail = document.getElementById("email");
const incorrectDob = document.getElementById("dob");
const incorrectPhone = document.getElementById("phone");
const incorrectMiddle = document.getElementById("mlname");
const incorrectDate = document.getElementById("date");
const incorrectSign = document.getElementById("sign");
const incorrectCity = document.getElementById("city");
const incorrectZip = document.getElementById("zip");
const incorrectAddress = document.getElementById("address");
const incorrectCitizen = document.getElementById("citizen");
const incorrectSsn = document.getElementById("ssn");
const incorrectState = document.getElementById("state");
const incorrectFname = document.getElementById("fname");
const incorrectLname = document.getElementById("lname");
const errorsFound = document.getElementById("errors-matched");
const savings = document.getElementById("savings-total");
const labels = document.querySelectorAll("label._checkbox-label");
const totalfines = document.getElementById("missed-total");
let fines = 2000;
let score = 0;
let timer;

//timer
startTimer = (duration, display, status) => {
    timer = duration;
    let minutes, seconds;
    if (status === 'start') {
        startCount = setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
            //when it reaches 0 stop the timer
            if (timer === 0) {
                minutes = "00";
                seconds = "00";
                display.textContent = minutes + ":" + seconds;
                clearInterval(startCount)
                resetGame(true);
            }
        }, 1000);
    } else {
        //will reset back to start
        minutes = "01";
        seconds = "00";
        display.textContent = minutes + ":" + seconds;
        clearInterval(startCount)
        
    }
}

resetGame = (fullreset) => {
    const formItems = [incorrectEmail, incorrectDob, incorrectPhone, incorrectMiddle, incorrectDate, incorrectSign, errorsFound, savings, incorrectCity, incorrectZip, incorrectCitizen, incorrectSsn, incorrectState, incorrectFname, incorrectLname, incorrectAddress];
    const display = document.querySelector('#time');
    timer = 60 * 1;

    for (let i = 0; i < formItems.length; i++) {
        //set checkboxes to false when game resets
        formItems[i].checked = false;
        formItems[i].disabled = true;
        formItems[i].parentElement.classList.remove('end-game')
    }

    //remove hover css
    for (let j = 0; j < labels.length; j++) {
        labels[j].classList.remove("addInHover");
    }

    startQuiz.classList.remove("disabled-game-button");
    submitQuiz.classList.add("disabled-game-button");
    resetQuiz.classList.add("disabled-game-button");

    if (!fullreset) {
        errorsFound.textContent = 0;
        savings.textContent = 0;
        totalfines.textContent = "2K";
    }


    startTimer(timer, display, 'stop');
}

startGame = () => {
    const formItems = [incorrectEmail, incorrectDob, incorrectPhone, incorrectMiddle, incorrectDate, incorrectSign, errorsFound, savings, incorrectCity, incorrectZip, incorrectCitizen, incorrectSsn, incorrectState, incorrectFname, incorrectLname, incorrectAddress];
    const oneMinute = 60 * 1, display = document.querySelector('#time');

    //set inputs back on
    for (let i = 0; i < formItems.length; i++) {
        formItems[i].disabled = false;
    }

    //add hover css
    for (let j = 0; j < labels.length; j++) {
        labels[j].classList.toggle("addInHover");
    }
    errorsFound.textContent = 0;
    savings.textContent = 0;
    totalfines.textContent = "2K";
    
    startQuiz.classList.add("disabled-game-button");
    submitQuiz.classList.remove("disabled-game-button");
    resetQuiz.classList.remove("disabled-game-button");

    startTimer(oneMinute, display, 'start');
}

//start quiz
startQuiz.addEventListener("click", () => {
    startGame();
});

//reset quiz
resetQuiz.addEventListener("click", () => {
    resetGame(false);
});

//lastname
lname.addEventListener("click", (e) => {
    const checked = e.target.checked;
    if (checked) {
        console.log("checked")
    } else {
        console.log("unchecked")
    }
});

//submit quiz
submitQuiz.addEventListener("click", () => {
    const showIncorrectFields = [incorrectEmail, incorrectDob, incorrectMiddle, incorrectDate, incorrectSign];
    let foundErrorsCount = 0;
    if (incorrectEmail.checked) {
        score = score + 100;
        fines = fines - 100;
        foundErrorsCount++
    }
    if (incorrectDob.checked) {
        score = score + 100;
        fines = fines - 100;
        foundErrorsCount++
    }
    if (incorrectPhone.checked) {
        score = score + 100;
        fines = fines - 100;
        foundErrorsCount++
    }
    if (incorrectMiddle.checked) {
        score = score + 100;
        fines = fines - 100;
        foundErrorsCount++
    }
    if (incorrectDate.checked) {
        score = score + 100;
        fines = fines - 100;
        foundErrorsCount++
    }
    if (incorrectSign.checked) {
        score = score + 100;
        fines = fines - 100;
        foundErrorsCount++
    }
    errorsFound.textContent = foundErrorsCount.toString();
    savings.textContent = score.toString();
    totalfines.textContent = fines;

    resetGame(true);
    startQuiz.classList.add("disabled-game-button");
    resetQuiz.classList.remove("disabled-game-button");

        //set inputs back on
        for (let i = 0; i < showIncorrectFields.length; i++) {
            showIncorrectFields[i].checked = true;
            showIncorrectFields[i].disabled = true;
            showIncorrectFields[i].parentElement.classList.add('end-game');
        }
});






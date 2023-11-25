let intervalsArray = [];
let intervalsStandardArray = [];
let preIntervalsStandardArray = [];

var resetTime = 0;
var pauseRun = true;
var lastRun = new Date();

let AUDIO_READY = new Audio('audio/ready.wav');
let AUDIO_GO = new Audio('audio/go.wav');
let audioReadyPlayed = false;
let audioGoPlayed = false;

let intervalTime = 0;
let firstIntervalTime = 0;
let secondIntervalTime = 0;
let thirdIntervalTime = 0;
let firstPreIntervalTime = 0;
let secondPreIntervalTime = 0;

let preIntervalTime = 0;
let preIntervall = false;

let activeSPRBtn = null;
let activeIntervalBtn = null;
let activePreIntervalBtn = null;

// standard
let firstIntervalStandard = false;
let secondIntervalStandard = false;
let thirdIntervalStandard = false;
let firstPreIntervalStandard = false;
let secondPreIntervalStandard = false;
let thirdPreIntervalStandard = false;

let settings = false;

async function init() {
    await loadUsersArray();
    await loadLoggedInUser();
    await welcomeMessage();
    await createIndividuallyIntervalsArray();
    await loadIndividuallyIntervals();

    await createIndividuallyIntervalsStandardArray();
    await loadIndividuallyIntervalsStandard();
    await loadIntervals();

    await createIndividuallyPreIntervalsStandardArray();
    await loadIndividuallyPreIntervalsStandard();
    // await loadPreIntervals();

    checkIntervalsStandard();
    checkPreIntervalsStandard();

    setActiveSPRBtn('pauseBtnId');

    // setStandardIntervalTime();
    // setStandardPreIntervalTime();

    settings = false;
    toggleVisibilityById('contentStartPageId', true);
}

async function createIndividuallyIntervalsArray() {
    for (let i = 0; i < usersArray.length; i++) {
        const user = usersArray[i];
        id = user.id;
        if (loggedInUser[0].name === user.username) {
            intervalsArray = user[`individuallyIntervals_${id}`] = [];
            return id, intervalsArray;
        }
    }
}

async function createIndividuallyIntervalsStandardArray() {
    for (let i = 0; i < usersArray.length; i++) {
        const user = usersArray[i];
        id = user.id;
        if (loggedInUser[0].name === user.username) {
            intervalsStandardArray = user[`individuallyIntervalsStandardArray_${id}`] = [];
            return id, intervalsStandardArray;
        }
    }
}

async function createIndividuallyPreIntervalsStandardArray() {
    for (let i = 0; i < usersArray.length; i++) {
        const user = usersArray[i];
        id = user.id;
        if (loggedInUser[0].name === user.username) {
            preIntervalsStandardArray = user[`individuallyPreIntervalsStandardArray_${id}`] = [];
            return id, preIntervalsStandardArray;
        }
    }
}

async function loadIntervals() {
    firstIntervalTime = intervalsArray[0].firstIntervalTime;
    secondIntervalTime = intervalsArray[0].secondIntervalTime;
    thirdIntervalTime = intervalsArray[0].thirdIntervalTime;
    firstPreIntervalTime = intervalsArray[0].firstPreIntervalTime
    secondPreIntervalTime = intervalsArray[0].secondPreIntervalTime
    document.getElementById('firstIntervalBtnId').innerHTML = firstIntervalTime;
    document.getElementById('secondIntervalBtnId').innerHTML = secondIntervalTime;
    document.getElementById('thirdIntervalBtnId').innerHTML = thirdIntervalTime;
    document.getElementById('preFirstPreIntervalBtnId').innerHTML = firstPreIntervalTime;
    document.getElementById('preSecondIntervalBtnId').innerHTML = secondPreIntervalTime;
}

// async function loadIntervalsStandard() {
//     firstIntervalStandard = intervalsStandardArray[0].firstIntervalStandard;
//     secondIntervalStandard = intervalsStandardArray[0].secondIntervalStandard;
//     thirdIntervalStandard = intervalsStandardArray[0].thirdIntervalStandard;
// }

async function saveIntervals() {
    intervalsArray = [];
    firstIntervalTime = Number(document.getElementById('firstIntervalBtnId').innerHTML);
    secondIntervalTime = Number(document.getElementById('secondIntervalBtnId').innerHTML);
    thirdIntervalTime = Number(document.getElementById('thirdIntervalBtnId').innerHTML);
    firstPreIntervalTime = Number(document.getElementById('preFirstPreIntervalBtnId').innerHTML);
    secondPreIntervalTime = Number(document.getElementById('preSecondIntervalBtnId').innerHTML);
    intervalsArray.push({
        'firstIntervalTime': firstIntervalTime,
        'secondIntervalTime': secondIntervalTime,
        'thirdIntervalTime': thirdIntervalTime,
        'firstPreIntervalTime': firstPreIntervalTime,
        'secondPreIntervalTime': secondPreIntervalTime,
    });
    await setItem(`individuallyIntervals_${id}`, JSON.stringify(intervalsArray));
}

async function saveIntervalsStandard() {
    intervalsStandardArray = [];
    intervalsStandardArray.push({
        'firstIntervalStandard': firstIntervalStandard,
        'secondIntervalStandard': secondIntervalStandard,
        'thirdIntervalStandard': thirdIntervalStandard,
    })
    await setItem(`individuallyIntervalsStandardArray_${id}`, JSON.stringify(intervalsStandardArray));
}

async function savePreIntervalsStandard() {
    preIntervalsStandardArray = [];
    preIntervalsStandardArray.push({
        'firstPreIntervalStandard': firstPreIntervalStandard,
        'secondPreIntervalStandard': secondPreIntervalStandard,
        'thirdPreIntervalStandard': thirdPreIntervalStandard,
    })
    await setItem(`individuallyPreIntervalsStandardArray_${id}`, JSON.stringify(preIntervalsStandardArray));
}

function checkIntervalsStandard() {
    if (intervalsStandardArray[0].firstIntervalStandard === true) {
        setGoFirst();
    } else if (intervalsStandardArray[0].secondIntervalStandard === true) {
        setGoSecond();
    } else if (intervalsStandardArray[0].thirdIntervalStandard === true) {
        setGoThird();
    }
}

function checkPreIntervalsStandard() {
    if (preIntervalsStandardArray[0].firstPreIntervalStandard === true) {
        setPreIntervalOff();
    } else if (preIntervalsStandardArray[0].secondPreIntervalStandard === true) {
        setPreIntervalFirst();
    } else if (preIntervalsStandardArray[0].thirdPreIntervalStandard === true) {
        setPreIntervalSecond();
    }
}

async function welcomeMessage() {
    document.getElementById('welcomeMessageId').innerHTML = `Welcome ${loggedInUser[0].name}`;
}

function start() {
    setActiveSPRBtn('startBtnId');
    pauseRun = false;
}

function pause() {
    setActiveSPRBtn('pauseBtnId');
    pauseRun = true;
}

function reset() {
    setActiveSPRBtn('resetBtnId');
    pauseRun = true;
    resetTime = 0;
    audioReadyPlayed = false;
    audioGoPlayed = false;
    updateDisplay();
}

function updateTime() {
    if (pauseRun === false) {
        resetTime += new Date() - lastRun;
        updateDisplay();
    }

    lastRun = new Date();
    setTimeout(updateTime, 1);
}

function updateDisplay() {
    let h = Math.floor(resetTime / 3600000);
    let m = Math.floor(resetTime / 60000) % 60;
    let s = Math.floor(resetTime / 1000) % 60;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    document.getElementById('timeId').innerHTML = h + ":" + m + ":" + s;
    playSounds(m, s);
    console.log((((m % intervalTime === 0) && (m / intervalTime) % 2 === 0)));
}

function setGoFirst() {
    setActiveIntervalBtn('firstIntervalBtnId');
    intervalTime = 3;
}

function setGoSecond() {
    setActiveIntervalBtn('secondIntervalBtnId');
    intervalTime = 4;
}

function setGoThird() {
    setActiveIntervalBtn('thirdIntervalBtnId');
    intervalTime = 5;
}

function setPreIntervalOff() {
    setActivePreIntervalBtn('preOffIntervalBtnId');
    preIntervall = false;
}

function setPreIntervalFirst() {
    setActivePreIntervalBtn('preFirstPreIntervalBtnId');
    preIntervalTime = 45;
    preIntervall = true;
}

function setPreIntervalSecond() {
    setActivePreIntervalBtn('preSecondIntervalBtnId');
    preIntervalTime = 50;
    preIntervall = true;
}

function playSounds(m, s) {
    if (m % intervalTime === 0 && s <= 0.5 && !audioGoPlayed) {
        AUDIO_GO.play();
        audioGoPlayed = true;
    } else {
        audioGoPlayed = false;
    }
    if ((m % intervalTime === intervalTime - 1) && !audioReadyPlayed && s === preIntervalTime && preIntervall === true && (intervalTime !== 1 ? m > 0 : true)) {
        AUDIO_READY.play();
        audioReadyPlayed = true;
    } else {
        audioReadyPlayed = false;
    }
}

function setActiveSPRBtn(buttonId) {
    if (activeSPRBtn) {
        document.getElementById(activeSPRBtn).classList.remove('activeSPRBtn');
    }
    activeSPRBtn = buttonId;
    document.getElementById(buttonId).classList.add('activeSPRBtn');
}

function setActiveIntervalBtn(buttonId) {
    if (activeIntervalBtn) {
        document.getElementById(activeIntervalBtn).classList.remove('activeIntervalBtn');
    }
    activeIntervalBtn = buttonId;
    document.getElementById(buttonId).classList.add('activeIntervalBtn');
}

function setActivePreIntervalBtn(buttonId) {
    if (activePreIntervalBtn) {
        document.getElementById(activePreIntervalBtn).classList.remove('activePreIntervalBtn');
    }
    activePreIntervalBtn = buttonId;
    document.getElementById(buttonId).classList.add('activePreIntervalBtn');
}

// edit
function confirmFirstInterval(inputId, buttonId) {
    const newIntervalTime = document.getElementById(inputId).value;
    if (newIntervalTime.length !== 0) {
        intervalTime = parseInt(newIntervalTime);
        document.getElementById(buttonId).innerText = newIntervalTime;
        saveIntervals();
        document.getElementById(inputId).value = '';
    }
}

function confirmSecondInterval(inputId, buttonId) {
    const newIntervalTime = document.getElementById(inputId).value;
    if (newIntervalTime.length !== 0) {
        intervalTime = parseInt(newIntervalTime);
        document.getElementById(buttonId).innerText = newIntervalTime;
        saveIntervals();
        document.getElementById(inputId).value = '';
    }
}

function confirmThirdInterval(inputId, buttonId) {
    const newIntervalTime = document.getElementById(inputId).value;
    if (newIntervalTime.length !== 0) {
        intervalTime = parseInt(newIntervalTime);
        document.getElementById(buttonId).innerText = newIntervalTime;
        saveIntervals();
        document.getElementById(inputId).value = '';
    }
}

function confirmFirstPreInterval(inputId, buttonId) {
    const newIntervalTime = document.getElementById(inputId).value;
    if (newIntervalTime.length !== 0) {
        preIntervalTime = 60 - parseInt(newIntervalTime);
        document.getElementById(buttonId).innerText = newIntervalTime;
        saveIntervals();
        document.getElementById(inputId).value = '';
    }
}

function confirmSecondPreInterval(inputId, buttonId) {
    const newIntervalTime = document.getElementById(inputId).value;
    if (newIntervalTime.length !== 0) {
        preIntervalTime = 60 - parseInt(newIntervalTime);
        document.getElementById(buttonId).innerText = newIntervalTime;
        saveIntervals();
        document.getElementById(inputId).value = '';
    }
}

function confirmFirstIntervalAsStandard() {
    firstIntervalStandard = true;
    secondIntervalStandard = false;
    thirdIntervalStandard = false;
    setGoFirst();
    saveIntervalsStandard();
}

function confirmSecondIntervalAsStandard() {
    firstIntervalStandard = false;
    secondIntervalStandard = true;
    thirdIntervalStandard = false;
    setGoSecond();
    saveIntervalsStandard();
}

function confirmThirdIntervalAsStandard() {
    firstIntervalStandard = false;
    secondIntervalStandard = false;
    thirdIntervalStandard = true;
    setGoThird();
    saveIntervalsStandard();
}

function confirmOffPreIntervalAsStandard() {
    firstPreIntervalStandard = true;
    secondPreIntervalStandard = false;
    thirdPreIntervalStandard = false;
    setPreIntervalOff();
    savePreIntervalsStandard()
}

function confirmFirstPreIntervalAsStandard() {
    firstPreIntervalStandard = false;
    secondPreIntervalStandard = true;
    thirdPreIntervalStandard = false;
    setPreIntervalFirst();
    savePreIntervalsStandard()
}

function confirmSecondPreIntervalAsStandard() {
    firstPreIntervalStandard = false;
    secondPreIntervalStandard = false;
    thirdPreIntervalStandard = true;
    setPreIntervalSecond();
    savePreIntervalsStandard()
}


updateTime();
var resetTime = 0;
var pauseRun = true;
var lastRun = new Date();

let AUDIO_READY = new Audio('audio/ready.wav');
let AUDIO_GO = new Audio('audio/go.wav');
let audioReadyPlayed = false;
let audioGoPlayed = false;

let intervalTime = 0;

let preIntervalTime = 0;
let preIntervall = false;

let activeSPRBtn = null;
let activeIntervalBtn = null;
let activePreIntervalBtn = null;

let settings = false;

async function init() {
    await loadUsersArray();
    await loadLoggedInUser();
    await welcomeMessage();
    setActiveSPRBtn('pauseBtnId');
    setStandardIntervalTime();
    setStandardPreIntervalTime();
    settings = false;
    toggleVisibilityById('contentStartPageId', true);
}

async function welcomeMessage() {
    document.getElementById('welcomeMessageId').innerHTML = `Welcome ${loggedInUser[0].name}`;
}

function setStandardIntervalTime() {
    setActiveIntervalBtn('firstIntervalBtnId');
    setGoFirst();
}

function setStandardPreIntervalTime() {
    setActivePreIntervalBtn('preSecondIntervalBtnId');
    setPreIntervalSecond();
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
    }
}

function confirmSecondInterval(inputId, buttonId) {
    const newIntervalTime = document.getElementById(inputId).value;
    if (newIntervalTime.length !== 0) {
        intervalTime = parseInt(newIntervalTime);
        document.getElementById(buttonId).innerText = newIntervalTime;
    }
}

function confirmThirdInterval(inputId, buttonId) {
    const newIntervalTime = document.getElementById(inputId).value;
    if (newIntervalTime.length !== 0) {
        intervalTime = parseInt(newIntervalTime);
        document.getElementById(buttonId).innerText = newIntervalTime;
    }
}

function confirmFirstPreInterval(inputId, buttonId) {
    const newIntervalTime = document.getElementById(inputId).value;
    if (newIntervalTime.length !== 0) {
        preIntervalTime = 60 - parseInt(newIntervalTime);
        document.getElementById(buttonId).innerText = newIntervalTime;
    }
}

function confirmSecondPreInterval(inputId, buttonId) {
    const newIntervalTime = document.getElementById(inputId).value;
    if (newIntervalTime.length !== 0) {
        preIntervalTime = 60 - parseInt(newIntervalTime);
        document.getElementById(buttonId).innerText = newIntervalTime;
    }
}

function confirmFirstIntervalAsStandard() {
    setGoFirst();
}

function confirmSecondIntervalAsStandard() {
    setGoSecond();
}

function confirmThirdIntervalAsStandard() {
    setGoThird();
}

function confirmOffPreIntervalAsStandard() {
    setPreIntervalOff();
}

function confirmFirstPreIntervalAsStandard() {
    setPreIntervalFirst();
}

function confirmSecondPreIntervalAsStandard() {
    setPreIntervalSecond();
}


updateTime();
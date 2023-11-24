var resetTime = 0;
var pauseRun = true;
var lastRun = new Date();

let AUDIO_READY = new Audio('audio/ready.wav');
let AUDIO_GO = new Audio('audio/go.wav');
let audioReadyPlayed = false;
let audioGoPlayed = false;

let intervalTime = 3;

let preAlertTime = 50;
let preIntervall = false;

let activeSPRBtn = null;
let activeIntervalBtn = null;
let activePreIntervalBtn = null;

function init() {
    setActiveSPRBtn('pauseBtnId');
    setActiveIntervalBtn('3minBtnId');
    setActivePreIntervalBtn('pre50secBtnId');
    preIntervall = true;
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
}

function setGo(inputGoTime) {
    if (inputGoTime === 3) {
        setActiveIntervalBtn('3minBtnId');
        intervalTime = 3;
    } else if (inputGoTime === 4) {
        setActiveIntervalBtn('4minBtnId');
        intervalTime = 4;
    } else if (inputGoTime === 5) {
        setActiveIntervalBtn('5minBtnId');
        intervalTime = 5;
    }
}

function setPreGo(inputPreGoTime) {
    if (inputPreGoTime === 0) {
        setActivePreIntervalBtn('preOffBtnId');
        preIntervall = false;
    } else if (inputPreGoTime === 45) {
        setActivePreIntervalBtn('pre45secBtnId');
        preAlertTime = 45;
        preIntervall = true;
    } else if (inputPreGoTime === 50) {
        setActivePreIntervalBtn('pre50secBtnId');
        preAlertTime = 50;
        preIntervall = true;
    }
}

function playSounds(m, s) {
    if (m % intervalTime === 0 && s <= 0.5 && !audioGoPlayed) {
        AUDIO_GO.play();
        audioGoPlayed = true;
    } else {
        audioGoPlayed = false;
    }
    if ((m % intervalTime === 0) - (m = 1) && s == preAlertTime && !audioReadyPlayed && preIntervall === true) {
        console.log((m % intervalTime === 0) - (m = 1));
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

updateTime();
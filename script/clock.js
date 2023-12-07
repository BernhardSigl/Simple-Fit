let intervalsArray = [];
let intervalsStandardArray = [];
let preIntervalsStandardArray = [];
let gymDiaryArray = [];
let usersArray = [];
let languageArray = [];
let hideSaveImg = [];

var resetTime = 0;
var pauseRun = true;
var lastRun = new Date();

let AUDIO_READY = new Audio('audio/ready.wav');
let AUDIO_GO = new Audio('audio/go.wav');
let audioReadyPlayed = false;
let audioGoPlayed = false;

let intervalTime = 0;
let firstIntervalTime = null;
let secondIntervalTime = null;
let thirdIntervalTime = null;
let firstPreIntervalTime = null;
let secondPreIntervalTime = null;

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
let preCounterId;

async function init() {
    document.getElementById('requiresAlertTimeId').classList.add('visibilityHidden');
    setTimeout(() => {
        document.getElementById('requiresAlertTimeId').classList.remove('visibilityHidden');
    }, 3000);
    await loadUsersArray();
    await loadLoggedInUser();
    await loadRememberMe();
    await checkEmptyUsers();
    await createIndividuallyIntervalsArray();
    await loadIndividuallyIntervals();

    await createIndividuallyIntervalsStandardArray();
    await loadIndividuallyIntervalsStandard();
    await loadIntervals();
    await createIndividuallyPreIntervalsStandardArray();
    await loadIndividuallyPreIntervalsStandard();

    checkIntervalsStandard();
    checkPreIntervalsStandard();

    setActiveSPRBtn('pauseBtnId');
    settings = false;
    await createIndividuallyGymDiaryArray();
    await loadIndividuallyGymDiaryArray();

    let diaryRightBtnArea = document.getElementsByClassName('diaryRightBtnArea');
    for (let i = 0; i < diaryRightBtnArea.length; i++) {
        diaryRightBtnArea[i].style.display = 'none';
    }
    let inputDiaryBtns = document.getElementsByClassName('inputDiaryBtn');
    for (let i = 0; i < inputDiaryBtns.length; i++) {
        inputDiaryBtns[i].classList.add('inputDiaryBtnEdit');
        inputDiaryBtns[i].setAttribute('disabled', '');
    }
    let clickOnDiaryBtn = document.getElementsByClassName('clickOnDiaryBtn');
    for (let i = 0; i < clickOnDiaryBtn.length; i++) {
        clickOnDiaryBtn[i].classList.remove('dNone');
    }

    await welcomeMessage();
    if (firstIntervalTime === null || isNaN(firstIntervalTime)) {
        firstIntervalTime = false;
        document.getElementById('firstIntervalBtnId').innerHTML = 'Off';
    }
    if (secondIntervalTime === null) {
        secondIntervalTime = 3;
        document.getElementById('secondIntervalBtnId').innerHTML = '3';
    }
    if (thirdIntervalTime === null) {
        thirdIntervalTime = 4;
        document.getElementById('thirdIntervalBtnId').innerHTML = '4';
    }
    if (firstPreIntervalTime === null) {
        firstPreIntervalTime = 50;
        document.getElementById('preFirstPreIntervalBtnId').innerHTML = '10';
    } else {
        document.getElementById('preFirstPreIntervalBtnId').innerHTML = firstPreIntervalTime;
    }
    if (secondPreIntervalTime === null) {
        secondPreIntervalTime = 45;
        document.getElementById('preSecondIntervalBtnId').innerHTML = '15';
    } else {
        document.getElementById('preSecondIntervalBtnId').innerHTML = secondPreIntervalTime;
    }
    if (intervalTime === 0) {
        setGoFirst();
    }
    if (preIntervalTime === 0) {
        setPreIntervalOff();
    }
    if (intervalsStandardArray.length !== 0 && intervalsStandardArray[0].secondIntervalStandard === true) {
        document.getElementById('intervalSecondNumberFieldId').style.background = '#413534';
    } else if (intervalsStandardArray.length !== 0 && intervalsStandardArray[0].thirdIntervalStandard === true) {
        document.getElementById('intervalThirdNumberFieldId').style.background = '#413534';
    }
    if (preIntervalsStandardArray.length !== 0 && preIntervalsStandardArray[0].secondPreIntervalStandard === true && intervalsStandardArray[0].firstIntervalStandard === false) {
        document.getElementById('preIntervalFirstNumberFieldId').style.background = '#413534';
    } else if (preIntervalsStandardArray.length !== 0 && preIntervalsStandardArray[0].thirdPreIntervalStandard === true && intervalsStandardArray[0].firstIntervalStandard === false) {
        document.getElementById('preIntervalSecondNumberFieldId').style.background = '#413534';
    }
    document.getElementById('firstIntervalBtnId').innerHTML = 'Off';
    toggleVisibilityByClass('changeIntervalArea', false);
    toggleVisibilityById('contentStartPageId', true);
    document.getElementById('editAlertId').classList.remove('intervalLimit');
    document.getElementById('editPreAlertId').classList.remove('intervalLimit');
    document.getElementById('intervalSecondNumberFieldId').value = document.getElementById('secondIntervalBtnId').innerHTML;
    document.getElementById('intervalThirdNumberFieldId').value = document.getElementById('thirdIntervalBtnId').innerHTML;
    document.getElementById('preIntervalFirstNumberFieldId').value = document.getElementById('preFirstPreIntervalBtnId').innerHTML;
    document.getElementById('preIntervalSecondNumberFieldId').value = document.getElementById('preSecondIntervalBtnId').innerHTML;
    renderDiaryInputs();
    for (let i = 0; i < gymDiaryArray.length; i++) {
        toggleVisibilityById(`deleteDiaryBodypart_${i}`, false);
        toggleVisibilityById(`saveDiaryBodypart_${i}`, false);
    }
    await loadLanguage();
    if (languageArray[0] === undefined) {
        translateEnglish();
    } else if (languageArray[0] === 'english') {
        translateEnglish();
    } else if (languageArray[0] === 'german') {
        translateGerman();
    } else if (languageArray[0] === 'serbian') {
        translateSerbian();
    } else if (languageArray[0] === 'marokko') {
        translateMarokko();
    } else if (languageArray[0] === 'china') {
        translateChina();
    } else if (languageArray[0] === 'spain') {
        translateSpain();
    } else if (languageArray[0] === 'bavaria') {
        translateBavaria();
    }

    if (gymDiaryArray.length === 0) {
        document.getElementById('emptyDiaryTranslateId').style.display = 'flex';
    }

    hideSaveImg = [];
    for (let k = 0; k < gymDiaryArray.length; k++) {
        saveImg = gymDiaryArray[k];
        hideSaveImg[k] = false;
    }
    await createIndividuallyHideSaveImg();
    await loadIndividuallyHideSaveImg();
    checkSavedDiaryElement();
}

function checkSavedDiaryElement() {
    for (let k = 0; k < gymDiaryArray.length; k++) {
        saveImg = gymDiaryArray[k];
        if (hideSaveImg[k] === true) {
            document.getElementById(`saveDiaryBodypart_${k}`).style.display = 'none';
            document.getElementById(`bodypartTextId_${k}`).setAttribute('readonly', false);
            document.getElementById(`bodypartTextId_${k}`).style.caretColor = 'transparent';
        }
    }
}

async function checkEmptyUsers() {
    if (usersArray.length === 0) {
        window.location.href = 'index.html';
        rememberMe = [];
        loggedInUser = [];
        await saveRememberMe();
        await saveLoggedInUser();
    }
}

async function createIndividuallyHideSaveImg() {
    if (loggedInUser.length !== 0) {
        for (let i = 0; i < usersArray.length; i++) {
            const user = usersArray[i];
            id = user.id;
            if (loggedInUser[0].name === user.username) {
                hideSaveImg = user[`individuallyHideSaveImg_${id}`] = [];
                return id, hideSaveImg;
            }
        }
    } else {
        window.location.href = 'index.html';
    }
}

async function createIndividuallyIntervalsArray() {
    if (loggedInUser.length !== 0) {
        for (let i = 0; i < usersArray.length; i++) {
            const user = usersArray[i];
            id = user.id;
            if (loggedInUser[0].name === user.username) {
                intervalsArray = user[`individuallyIntervals_${id}`] = [];
                return id, intervalsArray;
            }
        }
    } else {
        window.location.href = 'index.html';
    }
}

async function createIndividuallyIntervalsStandardArray() {
    if (loggedInUser.length !== 0) {
        for (let i = 0; i < usersArray.length; i++) {
            const user = usersArray[i];
            id = user.id;
            if (loggedInUser[0].name === user.username) {
                intervalsStandardArray = user[`individuallyIntervalsStandardArray_${id}`] = [];
                return id, intervalsStandardArray;
            }
        }
    } else {
        window.location.href = 'index.html';
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
    if (intervalsArray.length !== 0) {
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
}

async function saveIntervals() {
    intervalsArray = [];
    firstIntervalTime = Number(document.getElementById('firstIntervalBtnId').innerHTML);
    secondIntervalTime = Number(document.getElementById('secondIntervalBtnId').innerHTML); // del
    thirdIntervalTime = Number(document.getElementById('thirdIntervalBtnId').innerHTML); // del
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
    if (intervalsStandardArray.length === 0) {
        firstIntervalStandard = false;
        secondIntervalStandard = false;
        thirdIntervalStandard = false;
    } else if (intervalsStandardArray[0].firstIntervalStandard === true) {
        setGoFirst();
    } else if (intervalsStandardArray[0].secondIntervalStandard === true) {
        setGoSecond();
    } else if (intervalsStandardArray[0].thirdIntervalStandard === true) {
        setGoThird();
    }
}

function checkPreIntervalsStandard() {
    if (preIntervalsStandardArray.length === 0) {
        firstPreIntervalStandard = false;
        secondPreIntervalStandard = false;
        thirdPreIntervalStandard = false;
    } else if (preIntervalsStandardArray[0].firstPreIntervalStandard === true) {
        setPreIntervalOff();
    } else if (preIntervalsStandardArray[0].secondPreIntervalStandard === true) {
        setPreIntervalFirst();
    } else if (preIntervalsStandardArray[0].thirdPreIntervalStandard === true) {
        setPreIntervalSecond();
    }
}

async function welcomeMessage() {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const capitalizedUserName = capitalizeFirstLetter(loggedInUser[0].name);
    document.getElementById('welcomeMessageId').innerHTML = `${capitalizedUserName}`;
}

let counterActive = false;
let preCounterActive = false;
function startTimer(duration, displayElementId) {
    let preTimer = duration, seconds;
    const display = document.getElementById(displayElementId);
    preCounterId = setInterval(function () {
        seconds = parseInt(preTimer % 60, 10);
        preCounterActive = true;
        let secondsString = seconds < 10 ? "0" + seconds : "" + seconds;
        display.textContent = secondsString;
        if (--preTimer < 0) {
            clearInterval(preCounterId);
            preTimer = 0;
            AUDIO_GO.play();
            pauseRun = false;
            preCounterActive = false;
            counterActive = true;
        }
    }, 1000);
}

function start() {
    setActiveSPRBtn('startBtnId');
    if (preIntervalTime !== false && counterActive === false && preIntervall === true) {
        startTimer(15, 'timeId');
    } else {
        pauseRun = false;
    }
}

function pause() {
    setActiveSPRBtn('pauseBtnId');
    pauseRun = true;
    clearInterval(preCounterId);
    if (preCounterActive === true) {
        updateDisplay();
    }
}

function reset() {
    setActiveSPRBtn('resetBtnId');
    pauseRun = true;
    resetTime = 0;
    audioReadyPlayed = false;
    audioGoPlayed = false;
    updateDisplay();
    AUDIO_GO.pause();
    clearInterval(preCounterId);
    counterActive = false;
}

function updateTime() {
    if (pauseRun === false) {
        resetTime += new Date() - lastRun;
        updateDisplay();
    }

    lastRun = new Date();
    setTimeout(updateTime, 1);
}

function setGoFirst() {
    setActiveIntervalBtn('firstIntervalBtnId');
    intervalTime = false;
    setPreIntervalOff();
}

function setGoSecond() {
    setActiveIntervalBtn('secondIntervalBtnId');
    if (intervalsArray.length === 0) {
        intervalTime = 1;
    } else {
        intervalTime = intervalsArray[0].secondIntervalTime;
    }
}

function setGoThird() {
    setActiveIntervalBtn('thirdIntervalBtnId');
    if (intervalsArray.length === 0) {
        intervalTime = 4;
    } else {
        intervalTime = intervalsArray[0].thirdIntervalTime;
    }
}

function setPreIntervalOff() {
    setActivePreIntervalBtn('preOffIntervalBtnId');
    preIntervall = false;
    preIntervalTime = false;
    clearInterval(preCounterId);
}

function setPreIntervalFirst() {
    setActivePreIntervalBtn('preFirstPreIntervalBtnId');
    if (intervalsArray.length === 0) {
        preIntervalTime = 10;
        intervalTimeFalse();
    } else {
        preIntervalTime = intervalsArray[0].firstPreIntervalTime;
        intervalTimeFalse();
    }
}

function setPreIntervalSecond() {
    setActivePreIntervalBtn('preSecondIntervalBtnId');
    if (intervalsArray.length === 0) {
        preIntervalTime = 15;
        intervalTimeFalse();
    } else {
        preIntervalTime = intervalsArray[0].secondPreIntervalTime;
        intervalTimeFalse();
    }
}

function intervalTimeFalse() {
    preIntervall = true;
    if (intervalTime === false) {
        setPreIntervalOff();
        toggleVisibilityById('requiresAlertTimeId', true);
        setTimeout(() => {
            toggleVisibilityById('requiresAlertTimeId', false);
        }, 2500);
    }
}

function updateDisplay() {
    let h = Math.floor(resetTime / 3600000);
    let m = Math.floor(resetTime / 60000) % 60;
    let s = Math.floor(resetTime / 1000) % 60;
    let sAlt = Math.floor(resetTime / 1000);
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    document.getElementById('timeId').innerHTML = h + ":" + m + ":" + s;
    playSounds(sAlt);
}

function playSounds(sAlt) {
    if (sAlt % (intervalTime * 60) === 0 && !audioGoPlayed) {
        AUDIO_GO.play();
        audioGoPlayed = true;
    } else {
        audioGoPlayed = false;
    }

    if ((sAlt + preIntervalTime) % (intervalTime * 60) === 0 && !audioReadyPlayed) {
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
        intervalTime = newIntervalTime;
        document.getElementById(buttonId).innerText = newIntervalTime;
        saveIntervals();
        document.getElementById(inputId).value = '';
    }
}

function confirmSecondInterval(inputId, buttonId) {
    const newIntervalTime = document.getElementById(inputId).value;
    if (newIntervalTime.length !== 0) {
        intervalTime = newIntervalTime;
        document.getElementById(buttonId).innerText = newIntervalTime;
        saveIntervals();
        document.getElementById('intervalSecondNumberFieldId').style.background = 'green';
        setTimeout(() => {
            if (secondIntervalStandard === true) {
                document.getElementById('intervalSecondNumberFieldId').style.background = '#413534';
            } else {
                document.getElementById('intervalSecondNumberFieldId').style.background = '';
            }
        }, 500);
    }
    toggleVisibilityById('deleteDiaryElementId', false);
}

function confirmThirdInterval(inputId, buttonId) {
    const newIntervalTime = document.getElementById(inputId).value;
    if (newIntervalTime.length !== 0) {
        intervalTime = newIntervalTime;
        document.getElementById(buttonId).innerText = newIntervalTime;
        saveIntervals();
        document.getElementById('intervalThirdNumberFieldId').style.background = 'green';
        setTimeout(() => {
            if (thirdIntervalStandard === true) {
                document.getElementById('intervalThirdNumberFieldId').style.background = '#413534';
            } else {
                document.getElementById('intervalThirdNumberFieldId').style.background = '';
            }
        }, 500);
    }
    toggleVisibilityById('deleteDiaryElementId', false);
}

function confirmFirstPreInterval(inputId, buttonId) {
    const newIntervalTime = document.getElementById(inputId).value;
    if (newIntervalTime.length !== 0) {
        preIntervalTime = parseInt(newIntervalTime); // del
        document.getElementById(buttonId).innerText = newIntervalTime;
        saveIntervals();
        document.getElementById('preIntervalFirstNumberFieldId').style.background = 'green';
        setTimeout(() => {
            if (preIntervalsStandardArray[0].secondPreIntervalStandard === true) {
                document.getElementById('preIntervalFirstNumberFieldId').style.background = '#413534';
            } else {
                document.getElementById('preIntervalFirstNumberFieldId').style.background = '';
            }
        }, 500);
    }
    toggleVisibilityById('deleteDiaryElementId', false);
}

function confirmSecondPreInterval(inputId, buttonId) {
    const newIntervalTime = document.getElementById(inputId).value;
    if (newIntervalTime.length !== 0) {
        preIntervalTime = parseInt(newIntervalTime); // del
        document.getElementById(buttonId).innerText = newIntervalTime;
        saveIntervals();
        document.getElementById('preIntervalSecondNumberFieldId').style.background = 'green';
        setTimeout(() => {
            if (preIntervalsStandardArray[0].thirdPreIntervalStandard === true) {
                document.getElementById('preIntervalSecondNumberFieldId').style.background = '#413534';
            } else {
                document.getElementById('preIntervalSecondNumberFieldId').style.background = '';
            }
        }, 500);
    }
    toggleVisibilityById('deleteDiaryElementId', false);
}

function confirmFirstIntervalAsStandard() {
    firstIntervalStandard = true;
    secondIntervalStandard = false;
    thirdIntervalStandard = false;
    setGoFirst();
    saveIntervalsStandard();
    document.getElementById('intervalSecondNumberFieldId').style.background = '';
    document.getElementById('intervalThirdNumberFieldId').style.background = '';
    toggleVisibilityById('deleteDiaryElementId', false);
}

function confirmSecondIntervalAsStandard() {
    firstIntervalStandard = false;
    secondIntervalStandard = true;
    thirdIntervalStandard = false;
    setGoSecond();
    saveIntervalsStandard();
    document.getElementById('intervalSecondNumberFieldId').style.background = '#413534';
    document.getElementById('intervalThirdNumberFieldId').style.background = '';
    toggleVisibilityById('deleteDiaryElementId', false);
}

function confirmThirdIntervalAsStandard() {
    firstIntervalStandard = false;
    secondIntervalStandard = false;
    thirdIntervalStandard = true;
    setGoThird();
    saveIntervalsStandard();
    document.getElementById('intervalSecondNumberFieldId').style.background = '';
    document.getElementById('intervalThirdNumberFieldId').style.background = '#413534';
    toggleVisibilityById('deleteDiaryElementId', false);
}

function confirmOffPreIntervalAsStandard() {
    firstPreIntervalStandard = true;
    secondPreIntervalStandard = false;
    thirdPreIntervalStandard = false;
    setPreIntervalOff();
    savePreIntervalsStandard()
    document.getElementById('preIntervalFirstNumberFieldId').style.background = '';
    document.getElementById('preIntervalSecondNumberFieldId').style.background = '';
    toggleVisibilityById('deleteDiaryElementId', false);
}

function confirmFirstPreIntervalAsStandard() {
    firstPreIntervalStandard = false;
    secondPreIntervalStandard = true;
    thirdPreIntervalStandard = false;
    setPreIntervalFirst();
    savePreIntervalsStandard()
    if (intervalTime === false) {
        setPreIntervalOff();
        toggleVisibilityById('requiresAlertTimeId', true);
        setTimeout(() => {
            toggleVisibilityById('requiresAlertTimeId', false);
        }, 2500);
    } else {
        document.getElementById('preIntervalFirstNumberFieldId').style.background = '#413534';
        document.getElementById('preIntervalSecondNumberFieldId').style.background = '';
    }
    toggleVisibilityById('deleteDiaryElementId', false);
}

function confirmSecondPreIntervalAsStandard() {
    firstPreIntervalStandard = false;
    secondPreIntervalStandard = false;
    thirdPreIntervalStandard = true;
    setPreIntervalSecond();
    savePreIntervalsStandard()
    if (intervalTime === false) {
        setPreIntervalOff();
        toggleVisibilityById('requiresAlertTimeId', true);
        setTimeout(() => {
            toggleVisibilityById('requiresAlertTimeId', false);
        }, 2500);
    } else {
        document.getElementById('preIntervalFirstNumberFieldId').style.background = '';
        document.getElementById('preIntervalSecondNumberFieldId').style.background = '#413534';
    }
    toggleVisibilityById('deleteDiaryElementId', false);
}

let bodypartIndex = -1;
let preGymDiaryArray = [];
function addNewBodypart() {
    if (preGymDiaryArray.length < 1) {
        const gymDiaryElement = document.getElementById('gymDiaryBtns');
        const newIndex = gymDiaryArray.length;
        const newBodypartElement = document.createElement('div');
        newBodypartElement.className = 'inputDiaryBtnArea column';
        newBodypartElement.id = `bodypartField_${newIndex}`;
        newBodypartElement.innerHTML = /*html*/ `
        <div class="relative">
            <div class="clickOnDiaryBtn">
            </div>
            <input type="text" class="inputDiaryBtn font11" id="bodypartTextId_${newIndex}">
        </div>
        <div class="deleteAndMemoryDiaryBtns">
            <div class="column spaceBetween diaryRightBtnArea">
            <img src="img/garbage.png" class="saveDiaryImg" onclick="deleteDiaryElement(${newIndex})">
            </div>
            <img src="img/save.png" class="saveDiaryImg" onclick="saveDiaryElement(${newIndex})" style="margin-top: 3px;" id="saveDiaryBodypart_${newIndex}">
        </div>
    `;
        gymDiaryElement.appendChild(newBodypartElement);
        let clickOnDiaryBtn = document.getElementsByClassName('clickOnDiaryBtn');
        for (let i = 0; i < clickOnDiaryBtn.length; i++) {
            clickOnDiaryBtn[i].classList.add('dNone');
        }
        preGymDiaryArray.push(`bodypartTextId_${newIndex}`);
    } else {
        toggleVisibilityById('saveDeleteLastDiaryElementTranslateId', true);
        setTimeout(() => {
            toggleVisibilityById('saveDeleteLastDiaryElementTranslateId', false);
        }, 3500);
    }
}

async function saveDiaryElement(index) {
    if (gymDiaryArray.length === index) {
        preGymDiaryArray = [];
    }
    const bodypartTextElement = document.getElementById(`bodypartTextId_${index}`);
    const bodypartValue = bodypartTextElement.value;

    if (!gymDiaryArray[index]) {
        gymDiaryArray[index] = {};
    }
    document.getElementById(`bodypartTextId_${index}`).style.background = 'green';
    setTimeout(() => {
        document.getElementById(`bodypartTextId_${index}`).style.background = '#202124';
    }, 500);
    gymDiaryArray[index] = {
        'bodypart': bodypartValue,
        'diaryelements': [],
    };
    document.getElementById(`saveDiaryBodypart_${index}`).style.display = 'none';
    document.getElementById(`bodypartTextId_${index}`).setAttribute('readonly', true);
    document.getElementById(`bodypartTextId_${index}`).style.caretColor = 'transparent';
    hideSaveImg[index] = true;
    await setItem(`individuallyHideSaveImg_${id}`, JSON.stringify(hideSaveImg));

    toggleVisibilityById('cancelSaveSettingsId', false);
    await saveGymDiaryArray();
    await setItem(`individuallyGymDiaryArray_${id}`, JSON.stringify(gymDiaryArray));
    toggleVisibilityById('deleteDiaryElementId', false);
}

function renderDiaryInputs() {
    const gymDiaryElement = document.getElementById('gymDiaryBtns');
    gymDiaryElement.innerHTML = '';

    for (let i = 0; i < gymDiaryArray.length; i++) {
        const newBodypartElement = document.createElement('div');
        newBodypartElement.className = 'inputDiaryBtnArea column';
        newBodypartElement.id = `bodypartField_${i}`;
        newBodypartElement.innerHTML = /*html*/ `
        <div class="clickOnDiaryBtn">&nbsp;</div>
        <input type="text" class="inputDiaryBtn font11" id="bodypartTextId_${i}" onclick="openDiary(${i})" readonly>
        <div class="deleteAndMemoryDiaryBtns">
            <div class="column spaceBetween diaryRightBtnArea dNone" id="deleteDiaryBodypart_${i}">
            <img src="img/garbage.png" class="saveDiaryImg" onclick="deleteDiaryElement(${i})">
            </div>
            <img src="img/save.png" id="saveDiaryBodypart_${i}" class="saveDiaryImg" onclick="saveDiaryElement(${i})">
        </div>
        `;

        gymDiaryElement.appendChild(newBodypartElement);

        if (gymDiaryArray[i].bodypart) {
            document.getElementById(`bodypartTextId_${i}`).value = gymDiaryArray[i].bodypart;
        }

        let clickOnDiaryBtn = document.getElementsByClassName('clickOnDiaryBtn');
        for (let j = 0; j < clickOnDiaryBtn.length; j++) {
            clickOnDiaryBtn[j].classList.add('dNone');
        }
        if (settings === true) {
            toggleVisibilityById(`deleteDiaryBodypart_${i}`, true);
            toggleVisibilityById(`saveDiaryBodypart_${i}`, true);
        } else {
            toggleVisibilityById(`deleteDiaryBodypart_${i}`, false);
            toggleVisibilityById(`saveDiaryBodypart_${i}`, false);
        }
    }
}

async function purgeDiaryCategory(bodypartIndex) {
    gymDiaryArray.splice(bodypartIndex, 1);
    await setItem(`individuallyGymDiaryArray_${id}`, JSON.stringify(gymDiaryArray));
    preGymDiaryArray = [];
    backToMenu();
    showSettings();
    toggleVisibilityById('deleteDiaryElementId', false);
    preGymDiaryArray = [];
}

function deleteDiaryElement(bodypartIndex) {
    let lastNotSavedGymDiaryElement = gymDiaryArray.length;
    if (lastNotSavedGymDiaryElement === bodypartIndex) {
        preDelete(bodypartIndex);
    } else if (preGymDiaryArray.length > 0) {
        toggleVisibilityById('saveDeleteLastDiaryElementTranslateId', true);
        setTimeout(() => {
            toggleVisibilityById('saveDeleteLastDiaryElementTranslateId', false);
        }, 3000);
    } else {
        preDelete(bodypartIndex);
    }
}

function preDelete(bodypartIndex) {
    toggleVisibilityById('deleteDiaryElementId', true);
    document.getElementById('deleteDiaryElementId').innerHTML = /*html*/ `
    <button id="stopDeleteId" onclick="toggleVisibilityById('deleteDiaryElementId', false)">Abbrechen</button>
    <button id="acceptDeleteId" onclick="purgeDiaryCategory(${bodypartIndex})">Löschen</button>
    `;
    toggleVisibilityById('cancelSaveSettingsId', false);
}

function deleteGymDiaryArray() {
    gymDiaryArray = [];
    saveDiaryInputs();
    renderDiaryInputs();
}

async function deleteAllUser() {
    usersArray = [];
    await setItem('usersArray', JSON.stringify(usersArray));
}

function downloadDiary() {
    let textInDownload = '';
    if (intervalsArray.length > 0) {
        textInDownload += 'First interval time: ' + intervalsArray[0].secondIntervalTime + '\n';
        textInDownload += 'Second interval time: ' + intervalsArray[0].thirdIntervalTime + '\n';
        textInDownload += '_______________________________';
        textInDownload += '\n';
        textInDownload += '\n';
        textInDownload += '\n';
    }
    gymDiaryArray.forEach(function (entry) {
        textInDownload += 'Exercise: ' + entry.bodypart + '\n';
        entry.diaryelements.reverse().forEach(function (diaryEntry) {
            if (diaryEntry.date) {
                textInDownload += 'Date: ' + diaryEntry.date + '\n';
            }
            if (diaryEntry.weight) {
                textInDownload += 'Weight/Info: "' + diaryEntry.weight + '"\n';
            }
            if (diaryEntry.reps && diaryEntry.reps.length > 0) {
                let repsWithoutEmptyValues = diaryEntry.reps.filter(function (rep) {
                    return rep !== '';
                });
                if (repsWithoutEmptyValues.length > 0) {
                    textInDownload += 'Reps: ' + repsWithoutEmptyValues.join(', ') + '\n';
                }
            }
            textInDownload += '\n';
        });
        textInDownload += '-------------------------------\n';
        textInDownload += '\n';
    });
    textInDownload += '\n';
    let blob = new Blob([textInDownload], { type: 'text/plain' });
    let downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = 'gymDiary.txt';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

function validateInputInterval(input) {
    input.value = input.value.replace(',', '.');
    let parsedValue = parseFloat(input.value);
    if (isNaN(parsedValue) || parsedValue <= 0) {
        input.value = '0.00';
    } else {
        input.value = parsedValue.toFixed(2);
    }
}

function validatePreIntervalInput(input) {
    let sanitizedValue = input.value.replace(/\D/g, '');
    let numberValue = parseInt(sanitizedValue, 10);
    if (isNaN(numberValue) || numberValue < 1) {
        input.value = '> 0 !';
    } else {
        input.value = numberValue.toString();
    }
}

updateTime();
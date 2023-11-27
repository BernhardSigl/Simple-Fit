let intervalsArray = [];
let intervalsStandardArray = [];
let preIntervalsStandardArray = [];
let gymDiaryArray = [];

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

async function init() {
    await loadUsersArray();
    await loadLoggedInUser();
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
    await loadGymDiaryArray();
    renderDiaries();
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
    document.getElementById('scrollboxId').classList.add('scrollboxStartPage');

    await welcomeMessage();

    if (intervalsStandardArray.length === 0) {
        setGoFirst();
    }
    if (preIntervalsStandardArray.length === 0) {
        setPreIntervalOff();
    }
    toggleVisibilityByClass('changeIntervalArea', false);
    toggleVisibilityById('contentStartPageId', true);
    // addDiary();
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
    document.getElementById('welcomeMessageId').innerHTML = `Welcome ${capitalizedUserName}`;
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

function setGoFirst() {
    setActiveIntervalBtn('firstIntervalBtnId');
    intervalTime = false;
}

function setGoSecond() {
    setActiveIntervalBtn('secondIntervalBtnId');
    if (intervalsArray.length === 0) {
        intervalTime = 4;
    } else {
        intervalTime = intervalsArray[0].secondIntervalTime;
    }
}

function setGoThird() {
    setActiveIntervalBtn('thirdIntervalBtnId');
    if (intervalsArray.length === 0) {
        intervalTime = 5;
    } else {
        intervalTime = intervalsArray[0].thirdIntervalTime;
    }
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

function addDiary(bodypartIndex) {
    document.getElementById('gymDiaryBtns').innerHTML += /*html*/ `
    <div class="inputDiaryBtnArea dFlex" id="bodypartField_${bodypartIndex}" onclick="saveAfterInput()">
        <input type="text" class="inputDiaryBtn inputDiaryBtnEdit" id="bodypartTextId_${bodypartIndex}" disabled>
        <div class="column spaceBetween diaryRightBtnArea">
            <img src="img/cross.png" class="standardConfirmBtn" id="diaryDeleteId_${bodypartIndex}" onclick="saveAfterInput(), deleteDiaryElement(${bodypartIndex})">
            <img src="img/confirm.png" class="standardConfirmBtn" id="addDiaryElementId_${bodypartIndex}" onclick="addDiaryElement(${bodypartIndex})">
        </div>
    <div>
    `;
}

function renderDiaries() {
    let gymDiaryElement = document.getElementById('gymDiaryBtns');
    gymDiaryElement.innerHTML = "";
    for (let bodypartIndex = 0; bodypartIndex < gymDiaryArray.length; bodypartIndex++) {
        const bodypart = gymDiaryArray[bodypartIndex];
        const newBodypartElement = document.createElement('div');
        newBodypartElement.className = 'inputDiaryBtnArea dFlex';
        newBodypartElement.id = `bodypartField_${bodypartIndex}`;
        newBodypartElement.innerHTML = /*html*/ `
        <div class="relative">
            <div class="clickOnDiaryBtn" onclick="openDiary(${bodypartIndex})">
            </div>
              <input type="text" class="inputDiaryBtn inputDiaryBtnEdit" id="bodypartTextId_${bodypartIndex}" onclick="saveAfterInput()">
        </div>
            <div class="column spaceBetween diaryRightBtnArea">
                <img src="img/cross.png" class="standardConfirmBtn" onclick="saveAfterInput(), deleteDiaryElement(${bodypartIndex})">
            </div>
        `;
        gymDiaryElement.appendChild(newBodypartElement);
        document.getElementById(`bodypartTextId_${bodypartIndex}`).value = bodypart;
    }
}

function addNewBodypart() {
    saveDiaryInputs();
    const gymDiaryElement = document.getElementById('gymDiaryBtns');
    const newBodypartIndex = gymDiaryArray.length;
    const newBodypartElement = document.createElement('div');
    newBodypartElement.className = 'inputDiaryBtnArea dFlex';
    newBodypartElement.id = `bodypartField_${newBodypartIndex}`;
    newBodypartElement.innerHTML = /*html*/ `
    <div class="relative">
        <div class="clickOnDiaryBtn" onclick="openDiary(${newBodypartIndex})">
        </div>
        <input type="text" class="inputDiaryBtn" id="bodypartTextId_${newBodypartIndex}" onclick="saveAfterInput()">
    </div>
        <div class="column spaceBetween diaryRightBtnArea">
            <img src="img/cross.png" class="standardConfirmBtn" onclick="deleteDiaryElement(${newBodypartIndex})">
        </div>
    `;
    gymDiaryElement.appendChild(newBodypartElement);
    gymDiaryArray.push('');
}

function saveDiaryInputs() {
    for (let bodypartIndex = 0; bodypartIndex < gymDiaryArray.length; bodypartIndex++) {
        const bodypartValue = document.getElementById(`bodypartTextId_${bodypartIndex}`).value;
        gymDiaryArray[bodypartIndex] = bodypartValue;
    }
    savegGymDiaryArray();
}

function deleteDiaryElement(bodypartIndex) {
    gymDiaryArray.splice(bodypartIndex, 1);
    renderDiaries();
    savegGymDiaryArray();
}

function saveAfterInput() {
    saveDiaryInputs();
}

function deleteGymDiaryArray() {
    gymDiaryArray = [];
    savegGymDiaryArray();
}

function openDiary(bodypartIndex) {
    // console.log(bodypartIndex);
}

updateTime();
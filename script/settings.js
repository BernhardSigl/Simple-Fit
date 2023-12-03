function showSettings() {
    settings = true;
    changeShowSettingsFunction();
    document.getElementById('settingsImgId').src = 'img/backArrow.png';
    document.getElementById('btnAreaId').classList.add('btnArea');
    toggleVisibilityById('settingstitleId', true);
    toggleVisibilityById('dumbellId', false);
    toggleVisibilityById('SPRBtnAreaId', false);
    toggleVisibilityById('settingsDescriptionId', true);
    toggleVisibilityById('logOutBtnId', false);
    toggleVisibilityById('logOutBtnId', false);
    toggleVisibilityById('welcomeMessageId', false);
    toggleVisibilityByClass('changeIntervalArea', true);
    toggleVisibilityByClass('intervalLimit', true);
    toggleVisibilityById('flagsId', true);
    toggleVisibilityById('welcomeMessageTranslateId', false);
    document.getElementById('gymDiaryAreaId').classList.add('dNone');
    document.getElementById('addDiaryBtnImgId').classList.remove('dNone');
    toggleVisibilityById('updateImgId', false);
    document.getElementById('editAlertId').classList.add('intervalLimit');
    document.getElementById('editPreAlertId').classList.add('intervalLimit');
    // document.getElementById('scrollboxId').classList.remove('scrollboxStartPage');
    let diaryRightBtnArea = document.getElementsByClassName('diaryRightBtnArea');
    for (let i = 0; i < diaryRightBtnArea.length; i++) {
        diaryRightBtnArea[i].style.display = 'block';
    }
    let inputDiaryBtns = document.getElementsByClassName('inputDiaryBtn');
    for (let i = 0; i < gymDiaryArray.length; i++) {
        toggleVisibilityById(`deleteDiaryBodypart_${i}`, true);
        toggleVisibilityById(`saveDiaryBodypart_${i}`, true);
        inputDiaryBtns[i].removeAttribute('readonly');
        // inputDiaryBtns[i].setAttribute('data-original-onclick', inputDiaryBtns[i].getAttribute('onclick'));
        inputDiaryBtns[i].removeAttribute('onclick');
    }
    let clickOnDiaryBtn = document.getElementsByClassName('clickOnDiaryBtn');
    for (let i = 0; i < clickOnDiaryBtn.length; i++) {
        clickOnDiaryBtn[i].classList.add('dNone');
    }
    renderDiaryInputs();
}

function backToMenu() {
    settings = false;
    renderDiaryInputs();
    originalShowSettingsFunction();
    document.getElementById('settingsImgId').src = 'img/settings.png';
    document.getElementById('btnAreaId').classList.remove('btnArea');
    toggleVisibilityById('settingstitleId', false);
    toggleVisibilityById('dumbellId', true);
    toggleVisibilityById('SPRBtnAreaId', true);
    toggleVisibilityById('settingsDescriptionId', false);
    toggleVisibilityById('logOutBtnId', true);
    toggleVisibilityById('welcomeMessageId', true);
    toggleVisibilityByClass('changeIntervalArea', false);
    toggleVisibilityById('flagsId', false);
    toggleVisibilityById('welcomeMessageTranslateId', true);
    document.getElementById('gymDiaryAreaId').classList.add('dNone'); //
    document.getElementById('addDiaryBtnImgId').classList.add('dNone');
    toggleVisibilityById('updateImgId', true);
    document.getElementById('editAlertId').classList.remove('intervalLimit');
    document.getElementById('editPreAlertId').classList.remove('intervalLimit');
    // document.getElementById('scrollboxId').classList.add('scrollboxStartPage');
    let diaryRightBtnArea = document.getElementsByClassName('diaryRightBtnArea');
    for (let i = 0; i < diaryRightBtnArea.length; i++) {
        diaryRightBtnArea[i].style.display = 'none';
    }
    let inputDiaryBtns = document.getElementsByClassName('inputDiaryBtn');
    for (let i = 0; i < gymDiaryArray.length; i++) {
        toggleVisibilityById(`deleteDiaryBodypart_${i}`, false);
        toggleVisibilityById(`saveDiaryBodypart_${i}`, false);
        inputDiaryBtns[i].setAttribute('readonly', '');
        // inputDiaryBtns[i].setAttribute('onclick', inputDiaryBtns[i].getAttribute('data-original-onclick'));
    }
    let clickOnDiaryBtn = document.getElementsByClassName('clickOnDiaryBtn');
    for (let i = 0; i < clickOnDiaryBtn.length; i++) {
        clickOnDiaryBtn[i].classList.remove('dNone');
    }
    toggleVisibilityById('deleteDiaryElementId', false);
}

function changeShowSettingsFunction() {
    document.getElementById('settingsImgId').onclick = function () {
        backToMenu();
    };
}

function originalShowSettingsFunction() {
    const editContactForm = document.getElementById('settingsImgId');
    editContactForm.onclick = function () {
        showSettings();
    };
}

function doNotClose(event) {
    event.stopPropagation();
}
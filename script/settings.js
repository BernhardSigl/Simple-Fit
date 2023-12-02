function showSettings() {
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
    toggleVisibilityById('addDiaryBtnImgId', true);
    toggleVisibilityById('updateImgId', false);
    document.getElementById('editAlertId').classList.add('intervalLimit');
    document.getElementById('editPreAlertId').classList.add('intervalLimit');
    document.getElementById('scrollboxId').classList.remove('scrollboxStartPage');
    let diaryRightBtnArea = document.getElementsByClassName('diaryRightBtnArea');
    for (let i = 0; i < diaryRightBtnArea.length; i++) {
        diaryRightBtnArea[i].style.display = 'block';
    }
    let inputDiaryBtns = document.getElementsByClassName('inputDiaryBtn');
    for (let i = 0; i < inputDiaryBtns.length; i++) {
        inputDiaryBtns[i].classList.remove('inputDiaryBtnEdit');
        inputDiaryBtns[i].removeAttribute('disabled');
    }
    let clickOnDiaryBtn = document.getElementsByClassName('clickOnDiaryBtn');
    for (let i = 0; i < clickOnDiaryBtn.length; i++) {
        clickOnDiaryBtn[i].classList.add('dNone');
    }
}

function backToMenu() {
    saveDiaryInputs();
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
    toggleVisibilityById('addDiaryBtnImgId', false);
    toggleVisibilityById('updateImgId', true);
    document.getElementById('editAlertId').classList.remove('intervalLimit');
    document.getElementById('editPreAlertId').classList.remove('intervalLimit');
    document.getElementById('scrollboxId').classList.add('scrollboxStartPage');
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
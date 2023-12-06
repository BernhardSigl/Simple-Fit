function showManual() {
    changeShowManualFunction();
    document.getElementById('settingsImgId').src = 'img/close.png';
    toggleVisibilityById('logOutBtnId', false);
    toggleVisibilityById('settingsImgId', true);
    toggleVisibilityById('welcomeMessageId', false);
    toggleVisibilityById('btnAreaId', false);
    toggleVisibilityById('gymDiaryBtns', false);
    toggleVisibilityById('dumbellId', false);
    toggleVisibilityById('gymDiaryTxtWithBtnId', false);
    toggleVisibilityById('gymDiaryAreaId', false);
    toggleVisibilityById('manualImgId', false);
    toggleVisibilityById('manualTitleId', true);
    toggleVisibilityById('settingsDescriptionId', true);
    // toggleVisibilityById('updatesDescriptionId', true);
    toggleVisibilityById('updateImgId', false);
    toggleVisibilityById('welcomeMessageTranslateId', false);
    document.getElementById('emptyDiaryTranslateId').style.display = 'none';
}

function fromManualToMenu() {
    originalShowSettingsFunction();
    document.getElementById('settingsImgId').src = 'img/settings.png';
    toggleVisibilityById('logOutBtnId', true);
    toggleVisibilityById('settingsImgId', true);
    toggleVisibilityById('welcomeMessageId', true);
    toggleVisibilityById('btnAreaId', true);
    toggleVisibilityById('gymDiaryBtns', true);
    toggleVisibilityById('gymDiaryAreaId', false);
    toggleVisibilityById('dumbellId', true);
    toggleVisibilityById('gymDiaryTxtWithBtnId', true);
    toggleVisibilityById('manualImgId', true);
    toggleVisibilityById('settingsDescriptionId', false);
    // toggleVisibilityById('updatesDescriptionId', false);
    toggleVisibilityById('manualTitleId', false);
    toggleVisibilityById('updateImgId', true);
    toggleVisibilityById('welcomeMessageTranslateId', true);
    if (gymDiaryArray.length === 0) {
        document.getElementById('emptyDiaryTranslateId').style.display = 'flex';
    }
}

function changeShowManualFunction() {
    const changeShowManualBtn = document.getElementById('settingsImgId');
    changeShowManualBtn.onclick = function () {
        fromManualToMenu();
    };
}
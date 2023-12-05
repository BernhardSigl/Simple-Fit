function showUpdates() {
    changeShowUpdatesFunction();
    document.getElementById('settingsImgId').src = 'img/backArrow.png';
    toggleVisibilityById('logOutBtnId', false);
    toggleVisibilityById('settingsImgId', true);
    toggleVisibilityById('welcomeMessageId', false);
    toggleVisibilityById('btnAreaId', false);
    toggleVisibilityById('gymDiaryBtns', false);
    toggleVisibilityById('dumbellId', false);
    toggleVisibilityById('gymDiaryTxtWithBtnId', false);
    toggleVisibilityById('gymDiaryAreaId', false);
    toggleVisibilityById('updatesTitleId', true);
    toggleVisibilityById('updatesDescriptionId', true);
    toggleVisibilityById('updateImgId', false);
    toggleVisibilityById('welcomeMessageTranslateId', false);
    document.getElementById('emptyDiaryTranslateId').style.display = 'none';
}

function fromUpdatesToMenu() {
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
    toggleVisibilityById('updatesTitleId', false);
    toggleVisibilityById('updatesDescriptionId', false);
    toggleVisibilityById('updateImgId', true);
    toggleVisibilityById('welcomeMessageTranslateId', true);
    if (gymDiaryArray.length === 0) {
        document.getElementById('emptyDiaryTranslateId').style.display = 'flex';
    }
}

function changeShowUpdatesFunction() {
    const changeShowUpdatesBtn = document.getElementById('settingsImgId');
    changeShowUpdatesBtn.onclick = function () {
        fromUpdatesToMenu();
    };
}
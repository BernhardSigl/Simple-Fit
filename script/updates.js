function showUpdates() {
    changeShowUpdatesFunction();
    document.getElementById('settingsImgId').src = 'img/backArrow.png';
    toggleVisibilityById('logOutBtnId', false);
    toggleVisibilityById('settingsImgId', true);
    toggleVisibilityById('welcomeMessageId', false);
    toggleVisibilityById('btnAreaId', false);
    toggleVisibilityById('gymDiaryBtns', false);
    // toggleVisibilityById('scrollboxId', true);
    toggleVisibilityById('dumbellId', false);
    toggleVisibilityById('gymDiaryTitleId', false);
    toggleVisibilityById('gymDiaryAreaId', false);
    toggleVisibilityById('updatesTitleId', true);
    toggleVisibilityById('updatesDescriptionId', true);
    toggleVisibilityById('updateImgId', false);
}

function fromUpdatesToMenu() {
    originalShowSettingsFunction();
    document.getElementById('settingsImgId').src = 'img/settings.png';
    toggleVisibilityById('logOutBtnId', true);
    toggleVisibilityById('settingsImgId', true);
    toggleVisibilityById('welcomeMessageId', true);
    toggleVisibilityById('btnAreaId', true);
    toggleVisibilityById('gymDiaryBtns', true);
    // toggleVisibilityById('scrollboxId', true);
    toggleVisibilityById('gymDiaryAreaId', false);
    toggleVisibilityById('dumbellId', true);
    toggleVisibilityById('gymDiaryTitleId', true);
    toggleVisibilityById('updatesTitleId', false);
    toggleVisibilityById('updatesDescriptionId', false);
    toggleVisibilityById('updateImgId', true);
}

function changeShowUpdatesFunction() {
    const changeShowUpdatesBtn = document.getElementById('settingsImgId');
    changeShowUpdatesBtn.onclick = function () {
        fromUpdatesToMenu();
    };
}
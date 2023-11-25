function showSettings() {
    changeShowSettingsFunction();
    document.getElementById('settingsImgId').src = 'img/backArrow.png';
    document.getElementById('btnAreaId').classList.add('btnArea');
    toggleVisibilityById('settingstitleId', true);
    toggleVisibilityById('dumbellId', false);
    toggleVisibilityById('timeId', false);
    toggleVisibilityById('SPRBtnAreaId', false);
    toggleVisibilityById('settingsDescriptionId', true);
    toggleVisibilityById('logOutBtnId', false);
    toggleVisibilityById('logOutBtnId', false);
    toggleVisibilityById('welcomeMessageId', false);
    toggleVisibilityByClass('changeIntervalArea', true);
}

function backToMenu() {
    originalShowSettingsFunction();
    document.getElementById('settingsImgId').src = 'img/settings.png';
    document.getElementById('btnAreaId').classList.remove('btnArea');
    toggleVisibilityById('settingstitleId', false);
    toggleVisibilityById('dumbellId', true);
    toggleVisibilityById('timeId', true);
    toggleVisibilityById('SPRBtnAreaId', true);
    toggleVisibilityById('settingsDescriptionId', false);
    toggleVisibilityById('logOutBtnId', true);
    toggleVisibilityById('welcomeMessageId', true);
    toggleVisibilityByClass('changeIntervalArea', false);
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
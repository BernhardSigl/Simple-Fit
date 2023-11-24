function showSettings() {
    changeShowSettingsFunction();
    document.getElementById('settingsImgId').src = 'img/backArrow.png';
    document.getElementById('btnAreaId').classList.add('btnArea');
    toggleVisibilityById('settingstitleId', true);
    toggleVisibilityById('dumbellId', false);
    toggleVisibilityById('timeId', false);
    toggleVisibilityById('SPRBtnAreaId', false);
    toggleVisibilityById('settingsDescriptionId', true);
}

function backToMenu() {
    originalShowSettingsFunction();
    document.getElementById('settingsImgId').src = 'img/settings.png';
    document.getElementById('btnAreaId').classList.remove('btnArea');
    toggleVisibilityById('dumbellId', true);
    toggleVisibilityById('timeId', true);
    toggleVisibilityById('SPRBtnAreaId', true);
    toggleVisibilityById('settingsDescriptionId', false);
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
// let i = 0;

function openDiary(bodypartIndex) {
    changeShowDiaryFunction();
    document.getElementById('settingsImgId').src = 'img/backArrow.png';
    toggleVisibilityById('dumbellId', false);
    toggleVisibilityById('welcomeMessageId', false);
    toggleVisibilityById('btnAreaId', false);
    toggleVisibilityById('gymDiaryBtns', false);
    toggleVisibilityById('logOutBtnId', false);
    toggleVisibilityById('updateImgId', false);
    toggleVisibilityById('gymDiaryStartPageId', false);
    toggleVisibilityById('gymDiaryAreaId', true);
    toggleVisibilityById('welcomeMessageTranslateId', false);
    document.getElementById('gymDiaryAreaId').innerHTML = /*html*/ `
        <span class="font24 bold white">${gymDiaryArray[bodypartIndex].bodypart}</span>
        <div id="gymDiaryContainer" class="column gap10">
            <img src="img/plus.png" class="symbol28" onclick="renderGymDiaryElement(${bodypartIndex})">
            <div id="gymDiaryContent" class="column gap10 scrollbox scrollboxDiary"></div>
        </div>
    `;
}

function changeShowDiaryFunction() {
    document.getElementById('settingsImgId').onclick = function () {
        fromDiaryToMenu();
    };
}

function fromDiaryToMenu() {
    document.getElementById('settingsImgId').src = 'img/settings.png';
    toggleVisibilityById('dumbellId', true);
    toggleVisibilityById('welcomeMessageId', true);
    toggleVisibilityById('btnAreaId', true);
    toggleVisibilityById('gymDiaryBtns', true);
    toggleVisibilityById('gymDiaryStartPageId', true);
    toggleVisibilityById('gymDiaryAreaId', false);
    toggleVisibilityById('logOutBtnId', true);
    toggleVisibilityById('updateImgId', true);
    toggleVisibilityById('gymDiaryContent', false);
    toggleVisibilityById('gymDiaryContainer', false);
    toggleVisibilityById('deleteDiaryElementId', false);
    toggleVisibilityById('welcomeMessageTranslateId', true);
    originalShowSettingsFunction();
}

function renderGymDiaryElement(index) {
    const gymDiaryContent = document.getElementById('gymDiaryContent');
    index++;

    const gymDiaryContentElement = document.createElement('div');
    gymDiaryContentElement.id = `gymDiaryContentElement_${index}`;
    gymDiaryContentElement.className = 'gymDiaryContentElement';

    // Erstelle dateWeightArea
    const dateWeightArea = document.createElement('div');
    dateWeightArea.className = 'dateWeightArea';

    const dateInputElement = document.createElement('input');
    dateInputElement.type = 'text';
    dateInputElement.className = 'dateInputField font16 textCenter';
    dateInputElement.id = `datePickerInput_${index}`;
    dateWeightArea.appendChild(dateInputElement);

    flatpickr(dateInputElement, {
        enableTime: false,
        dateFormat: 'd/m/Y',
        defaultDate: 'today',
    });

    const additionalInputElement = document.createElement('input');
    additionalInputElement.type = 'text';
    additionalInputElement.className = 'weights font16 textCenter';
    additionalInputElement.id = `additionalInput_${index}`;
    additionalInputElement.placeholder = 'Weights';
    dateWeightArea.appendChild(additionalInputElement);

    const lastWeight = document.createElement('img');
    lastWeight.src = 'img/backArrow.png';
    lastWeight.alt = 'Calendar';
    lastWeight.className = 'lastWeightImg';
    dateWeightArea.appendChild(lastWeight);

    lastWeight.onclick = function () {
        copyLastWeight(index);
    };

    const garbageImage = document.createElement('img');
    garbageImage.src = 'img/garbage.png';
    garbageImage.className = 'lastWeightImg';
    garbageImage.onclick = function () {
        deleteGymDiaryElement(index);
    };
    dateWeightArea.appendChild(garbageImage);

    gymDiaryContentElement.appendChild(dateWeightArea);

    // Erstelle inputFieldRepsArea
    const additionalInputsContainer = document.createElement('div');
    additionalInputsContainer.className = 'inputFieldRepsArea';
    additionalInputsContainer.style.display = 'flex';

    for (let j = 1; j <= 5; j++) {
        const repsFieldAndBtnsArea = document.createElement('div');
        repsFieldAndBtnsArea.className = 'repsFieldAndBtnsArea';

        const additionalInput = document.createElement('input');
        additionalInput.type = 'text';
        additionalInput.className = 'inputFieldReps font16 textCenter';
        additionalInput.id = `additionalInput_${index}_${j}`;
        repsFieldAndBtnsArea.appendChild(additionalInput);

        const addRemoveBtnArea = document.createElement('div');
        addRemoveBtnArea.className = 'addRemoveBtnArea';

        const addRepButton = document.createElement('button');
        addRepButton.textContent = '+';
        addRepButton.className = 'addRep';
        addRepButton.onclick = function () {
            increaseNumber(additionalInput);
        };
        addRemoveBtnArea.appendChild(addRepButton);

        const removeRepButton = document.createElement('button');
        removeRepButton.textContent = '-';
        removeRepButton.className = 'removeRep';
        removeRepButton.onclick = function () {
            decreaseNumber(additionalInput);
        };
        addRemoveBtnArea.appendChild(removeRepButton);

        repsFieldAndBtnsArea.appendChild(addRemoveBtnArea);
        additionalInputsContainer.appendChild(repsFieldAndBtnsArea);
    }

    gymDiaryContentElement.appendChild(additionalInputsContainer);

    // Füge den gymDiaryContentElement zum Gym-Diary-Inhalt hinzu
    gymDiaryContent.insertBefore(gymDiaryContentElement, gymDiaryContent.firstChild);
}

function copyLastWeight(index) {
    if (index > 0) {
        const currentAdditionalInput = document.getElementById(`additionalInput_${index}`);
        const previousAdditionalInput = document.getElementById(`additionalInput_${index - 1}`);

        if (currentAdditionalInput && previousAdditionalInput) {
            currentAdditionalInput.value = previousAdditionalInput.value;
        }
    }
}

function increaseNumber(inputField) {
    const currentValue = parseInt(inputField.value, 10) || 0;
    inputField.value = currentValue + 1;
}

function decreaseNumber(inputField) {
    const currentValue = parseInt(inputField.value, 10) || 0;
    inputField.value = Math.max(currentValue - 1, 0);
}

function deleteGymDiaryElement(index) {
    toggleVisibilityById('deleteDiaryElementId', true);
    document.getElementById('deleteDiaryElementId').innerHTML = /*html*/ `
    <button id="stopDeleteId" onclick="toggleVisibilityById('deleteDiaryElementId', false)">Abbrechen</button>
    <button id="acceptDeleteId" onclick="purgeGymDiaryElement(${index})">Löschen</button>
    `;
}

function purgeGymDiaryElement(index) {
    toggleVisibilityById('deleteDiaryElementId', false);
    const gymDiaryContentElement = document.getElementById(`gymDiaryContentElement_${index}`);
    const acceptDeleteElement = document.getElementById('acceptDeleteId');
    acceptDeleteElement.classList.add('wobble');
    if (gymDiaryContentElement) {
        gymDiaryContentElement.remove();
    }
}

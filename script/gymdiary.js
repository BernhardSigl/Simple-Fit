let i = 0;

function openDiary(bodypartIndex) {
    toggleVisibilityById('dumbellId', false);
    toggleVisibilityById('welcomeMessageId', false);
    toggleVisibilityById('btnAreaId', false);
    toggleVisibilityById('gymDiaryBtns', false);
    toggleVisibilityById('logOutBtnId', false);
    toggleVisibilityById('updateImgId', false);
    document.getElementById('gymDiaryAreaId').innerHTML = /*html*/ `
        <span class="font24 bold white">${gymDiaryArray[bodypartIndex]}</span>
        <div id="gymDiaryContainer" class="column gap10">
            <img src="img/plus.png" class="symbol28" onclick="renderGymDiaryElement(i)">
            <div id="gymDiaryContent" class="column gap10"></div>
        </div>
    `;
}

function renderGymDiaryElement(index) {
    const gymDiaryContent = document.getElementById('gymDiaryContent');
    i++;

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
    const gymDiaryContentElement = document.getElementById(`gymDiaryContentElement_${index}`);
    if (gymDiaryContentElement) {
        gymDiaryContentElement.remove();
    }
}

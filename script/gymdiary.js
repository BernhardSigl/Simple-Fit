let index = -1;
let preGymDiaryElementArray = [];

async function openDiary(bodypartIndex) {
    index = -1;
    preGymDiaryElementArray = [];
    changeShowDiaryFunction();
    // gymDiaryArray[bodypartIndex] = [];
    // await loadGymDiaryArray();
    await loadIndividuallyGymDiaryArray();
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
            <img src="img/plus.png" class="symbol28" onclick="addGymDiaryElement(${bodypartIndex})">
            <div id="gymDiaryContent" class="column gap10 scrollbox scrollboxDiary"></div>
        </div>
    `;
    fillDiary(bodypartIndex);
}

async function createIndividuallyGymDiaryArray() {
    if (loggedInUser.length !== 0) {
        for (let i = 0; i < usersArray.length; i++) {
            const user = usersArray[i];
            id = user.id;
            if (loggedInUser[0].name === user.username) {
                gymDiaryArray = user[`individuallyGymDiaryArray_${id}`] = [];
                return id, gymDiaryArray;
            }
        }
    } else {
        window.location.href = 'index.html';
    }
}

function fillDiary(bodypartIndex) {
    let diaryelements = gymDiaryArray[bodypartIndex].diaryelements;
    for (let i = 0; i < diaryelements.length; i++) {
        const diaryelement = diaryelements[i];
        addGymDiaryElement(bodypartIndex);
        document.getElementById(`datePickerInput_${i}`).value = diaryelement.date;
        document.getElementById(`additionalInput_${i}`).value = diaryelement.weight;
        let repsArray = diaryelement.reps;
        for (let j = 0; j < repsArray.length; j++) {
            const rep = repsArray[j];
            document.getElementById(`additionalInput_${i}_${j + 1}`).value = rep;
        }
        preGymDiaryElementArray = [];
    }
}

function changeShowDiaryFunction() {
    document.getElementById('settingsImgId').onclick = function () {
        fromDiaryToMenu();
    };
}

function cancelSaveDiary() {
    toggleVisibilityById('cancelSaveId', false);
}

function continueDiary() {
    toggleVisibilityById('cancelSaveId', false);
    preGymDiaryElementArray = [];
    fromDiaryToMenu();
}

function fromDiaryToMenu() {
    if (preGymDiaryElementArray.length === 1) {
        toggleVisibilityById('cancelSaveId', true);
    } else {
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
}

function addGymDiaryElement(bodypartIndex) {
    preGymDiaryElementArray.push(`diaryelementPlaceholder_${bodypartIndex}`);
    if (preGymDiaryElementArray.length > 1) {
        toggleVisibilityById('saveDeleteNewestDiaryElementTranslateId', true);
        setTimeout(() => {
            toggleVisibilityById('saveDeleteNewestDiaryElementTranslateId', false);
        }, 3000);
    } else {
        const gymDiaryContent = document.getElementById('gymDiaryContent');
        index++;
        let localIndex = index;
        const gymDiaryContentElement = document.createElement('div');
        gymDiaryContentElement.id = `gymDiaryContentElement_${index}`;
        gymDiaryContentElement.className = 'gymDiaryContentElement';

        // Erstelle dateWeightArea
        const dateWeightArea = document.createElement('div');
        dateWeightArea.className = 'dateWeightArea';

        const dateAndSaveBtn = document.createElement('div');
        dateAndSaveBtn.className = 'dateAndSaveBtn';
        dateWeightArea.appendChild(dateAndSaveBtn);

        const dateInputElement = document.createElement('input');
        dateInputElement.type = 'text';
        dateInputElement.className = 'dateInputField font16 textCenter';
        dateInputElement.id = `datePickerInput_${index}`;
        if (languageArray[0] === 'english') {
            dateInputElement.placeholder = 'Enter date';
        } else if (languageArray[0] === 'german') {
            dateInputElement.placeholder = 'Datum hinzufügen';
        } else if (languageArray[0] === 'serbian') {
            dateInputElement.placeholder = 'Унесите датум';
        } else if (languageArray[0] === 'marokko') {
            dateInputElement.placeholder = 'أدخل التاريخ';
        } else if (languageArray[0] === 'china') {
            dateInputElement.placeholder = '输入日期';
        } else if (languageArray[0] === 'spain') {
            dateInputElement.placeholder = 'Introduce la fecha';
        } else if (languageArray[0] === 'bavaria') {
            dateInputElement.placeholder = 'Datum eigeem';
        }

        dateAndSaveBtn.appendChild(dateInputElement);

        const picker = new Pikaday({
            field: dateInputElement,
            format: 'DD/MM/YYYY',
            showYearDropdown: true,
            yearRange: [1900, new Date().getFullYear()],
        });

        //date today
        const todayDateImage = document.createElement('img');
        todayDateImage.src = 'img/date.png';
        todayDateImage.className = 'lastWeightImg';
        todayDateImage.onclick = function () {
            const today = new Date();
            picker.setDate(today);
        };
        dateAndSaveBtn.appendChild(todayDateImage);

        //save
        const saveDiarayElementImage = document.createElement('img');
        saveDiarayElementImage.src = 'img/save.png';
        saveDiarayElementImage.className = 'lastWeightImg';
        saveDiarayElementImage.onclick = function () {
            saveGymDiaryData(bodypartIndex, localIndex);
        };
        dateAndSaveBtn.appendChild(saveDiarayElementImage);

        const weightAndBtns = document.createElement('div');
        weightAndBtns.className = 'weightAndBtns';
        dateWeightArea.appendChild(weightAndBtns);

        const additionalInputElement = document.createElement('input');
        additionalInputElement.type = 'text';
        additionalInputElement.className = 'weights font16 textCenter';
        additionalInputElement.id = `additionalInput_${index}`;
        if (languageArray[0] === 'english') {
            additionalInputElement.placeholder = 'Weights / Info';
        } else if (languageArray[0] === 'german') {
            additionalInputElement.placeholder = 'Gewicht / Info';
        } else if (languageArray[0] === 'serbian') {
            additionalInputElement.placeholder = 'Тежине / Инфо';
        } else if (languageArray[0] === 'marokko') {
            additionalInputElement.placeholder = 'الأوزان / المعلومات';
        } else if (languageArray[0] === 'china') {
            additionalInputElement.placeholder = '重量 / 信息';
        } else if (languageArray[0] === 'spain') {
            additionalInputElement.placeholder = 'Pesos / Información';
        } else if (languageArray[0] === 'bavaria') {
            additionalInputElement.placeholder = 'Gwicht / Info';
        }

        weightAndBtns.appendChild(additionalInputElement);

        const lastWeight = document.createElement('img');
        lastWeight.src = 'img/backArrow.png';
        lastWeight.className = 'lastWeightImg';
        weightAndBtns.appendChild(lastWeight);

        lastWeight.onclick = function () {
            copyLastWeight(index);
        };

        const garbageImage = document.createElement('img');
        garbageImage.src = 'img/garbage.png';
        garbageImage.className = 'lastWeightImg';
        garbageImage.onclick = function () {
            deleteGymDiaryElement(bodypartIndex, localIndex);
        };
        weightAndBtns.appendChild(garbageImage);

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

function deleteGymDiaryElement(bodypartIndex, localIndex) {
    if (localIndex !== index && preGymDiaryElementArray.length !== 0) {
        toggleVisibilityById('saveDeleteNewestDiaryElementTranslateId', true);
        setTimeout(() => {
            toggleVisibilityById('saveDeleteNewestDiaryElementTranslateId', false);
        }, 3000);
    } else {
        toggleVisibilityById('deleteDiaryElementId', true);
        setTimeout(() => {
            toggleVisibilityById('deleteDiaryElementId', false);
        }, 3000);
        document.getElementById('deleteDiaryElementId').innerHTML = /*html*/ `
        <button id="stopDeleteId" onclick="toggleVisibilityById('deleteDiaryElementId', false)">Abbrechen</button>
        <button id="acceptDeleteId" onclick="purgeGymDiaryElement(${bodypartIndex}, ${localIndex})">Löschen</button>
        `;
        document.getElementById(`gymDiaryContentElement_${localIndex}`).style.background = 'red';
        setTimeout(() => {
            const gymDiaryContentElement = document.getElementById(`gymDiaryContentElement_${localIndex}`);
            if (gymDiaryContentElement) {
                gymDiaryContentElement.style.background = '#343541';
            }
        }, 3000);
    }
    toggleVisibilityById('cancelSaveId', false);
}

async function purgeGymDiaryElement(bodypartIndex, localIndex) {
    toggleVisibilityById('deleteDiaryElementId', false);
    const gymDiaryContentElement = document.getElementById(`gymDiaryContentElement_${localIndex}`);
    const acceptDeleteElement = document.getElementById('acceptDeleteId');
    acceptDeleteElement.classList.add('wobble');
    if (gymDiaryContentElement) {
        gymDiaryContentElement.remove();
        gymDiaryArray[bodypartIndex].diaryelements.splice(localIndex, 1);
        // saveGymDiaryArray(); /////////
        await setItem(`individuallyGymDiaryArray_${id}`, JSON.stringify(gymDiaryArray));
        preGymDiaryElementArray = [];
        // document.getElementById(`gymDiaryContentElement_${localIndex}`).style.background = '#343541';
    }
}

async function saveGymDiaryData(bodypartIndex, localIndex) {
    if (localIndex !== index && preGymDiaryElementArray.length !== 0) {
        toggleVisibilityById('saveDeleteNewestDiaryElementTranslateId', true);
        setTimeout(() => {
            toggleVisibilityById('saveDeleteNewestDiaryElementTranslateId', false);
        }, 3000);
    } else {
        const gymDiaryContentElement = document.getElementById(`gymDiaryContentElement_${localIndex}`);
        if (gymDiaryContentElement) {
            const datePickerInput = document.getElementById(`datePickerInput_${localIndex}`);
            const additionalInput = document.getElementById(`additionalInput_${localIndex}`);
            if (datePickerInput && additionalInput) {
                const diaryElement = {
                    date: datePickerInput.value,
                    weight: additionalInput.value,
                    reps: [],
                };

                for (let j = 1; j <= 5; j++) {
                    const repsInput = document.getElementById(`additionalInput_${localIndex}_${j}`);
                    if (repsInput) {
                        diaryElement.reps.push(repsInput.value);
                    }
                }
                const existingElement = gymDiaryArray[bodypartIndex].diaryelements[localIndex];
                if (existingElement) {
                    Object.assign(existingElement, diaryElement);
                } else {
                    gymDiaryArray[bodypartIndex].diaryelements.push(diaryElement);
                }
                // saveGymDiaryArray(); //////
                await setItem(`individuallyGymDiaryArray_${id}`, JSON.stringify(gymDiaryArray));
            }
        }
        preGymDiaryElementArray = [];
        document.getElementById(`gymDiaryContentElement_${localIndex}`).style.background = 'green';
        setTimeout(() => {
            document.getElementById(`gymDiaryContentElement_${localIndex}`).style.background = '#343541';
        }, 500);
    }
    toggleVisibilityById('cancelSaveId', false);
}


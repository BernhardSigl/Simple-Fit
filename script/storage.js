const STORAGE_TOKEN = '70XCXWWHIH306P46RV9H6HK1FB2J5UHH3G6QN168';
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';

async function setItem(key, value) {
    const payload = { key, value, token: STORAGE_TOKEN };
    return fetch(STORAGE_URL, { method: 'POST', body: JSON.stringify(payload) })
        .then(res => res.json());
}

async function getItem(key) {
    const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    return fetch(url).then(res => res.json()).then(res => {
        if (res.data) {
            return res.data.value;
        }
    });
}

async function loadUsersArray() {
    try {
        usersArray = JSON.parse(await getItem('usersArray'));
    } catch {
        console.warn('Token invalid becauce no user has been created yet');
    }
}

async function loadIndividuallyIntervals() {
    try {
        intervalsArray = JSON.parse(await getItem(`individuallyIntervals_${id}`));
        console.log(id);
    } catch {
        console.warn('Token invalid becauce no intervals has been created yet');
    }
}

async function loadIndividuallyIntervalsStandard() {
    try {
        intervalsStandardArray = JSON.parse(await getItem(`individuallyIntervalsStandardArray_${id}`));
        console.log(id);
    } catch {
        console.warn('Token invalid becauce no standards has been created yet');
    }
}

async function loadIndividuallyPreIntervalsStandard() {
    try {
        preIntervalsStandardArray = JSON.parse(await getItem(`individuallyPreIntervalsStandardArray_${id}`));
        console.log(id);
    } catch {
        console.warn('Token invalid becauce no pre standards has been created yet');
    }
}

// save locally
async function saveRememberMe() {
    let rememberMeAsText = JSON.stringify(rememberMe);
    localStorage.setItem('rememberMe', rememberMeAsText);
}

async function loadRememberMe() {
    let rememberMeAsText = localStorage.getItem('rememberMe');
    if (rememberMeAsText) {
        rememberMe = JSON.parse(rememberMeAsText);
    }
}

async function saveLoggedInUser() {
    let loggedInUserAsText = JSON.stringify(loggedInUser);
    localStorage.setItem('loggedInUser', loggedInUserAsText);
}

async function loadLoggedInUser() {
    let loggedInUserAsText = localStorage.getItem('loggedInUser');
    if (loggedInUserAsText) {
        loggedInUser = JSON.parse(loggedInUserAsText);
    }
}
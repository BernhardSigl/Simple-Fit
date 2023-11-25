function toggleVisibilityById(id, show) {
    const showHide = document.getElementById(id);
    showHide.classList.toggle('dNone', !show);
}

function toggleVisibilityByClass(className, show) {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('dNone', !show);
    }
}

function logOut() {
    rememberMe = [];
    loggedInUser = [];
    saveRememberMe();
    saveLoggedInUser();
    window.location.href = 'authentication.html';
}

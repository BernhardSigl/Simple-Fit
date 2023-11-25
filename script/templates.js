function toggleVisibilityById(id, show) {
    const showHide = document.getElementById(id);
    showHide.classList.toggle('dNone', !show);
}

function logOut() {
    rememberMe = [];
    loggedInUser = [];
    saveRememberMe();
    saveLoggedInUser();
    window.location.href = 'authentication.html';
}

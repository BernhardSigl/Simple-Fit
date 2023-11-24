function toggleVisibilityById(id, show) {
    const showHide = document.getElementById(id);
    showHide.classList.toggle('dNone', !show);
}


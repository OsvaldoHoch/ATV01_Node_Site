const select = (function() {
    let route = window.location.pathname;
    route = route.slice(1);

    const selected = document.getElementById(`navbar-${route}`);
    selected.classList.add('selected');
})();
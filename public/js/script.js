const select = (function() {
    let route = window.location.pathname;

    console.log(route);

    if(route == "/skates"){
        let selected = document.getElementById("navbar-skates");
        selected.classList.add('selected');
    } else if (route == "/pranchas"){
        let selected = document.getElementById("navbar-pranchas");
        selected.classList.add('selected');
    } else if (route == "/"){
        let selected = document.getElementById("navbar-home");
        selected.classList.add('selected');
    } else if (route == "/patrocinados"){
        let selected = document.getElementById("navbar-patrocinados");
        selected.classList.add('selected');
    }
})();
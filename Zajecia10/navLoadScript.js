load('navbar.html',document.getElementById('navbar'));

function load(url, element)
{
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send(null);

    element.innerHTML = request.responseText; 
}
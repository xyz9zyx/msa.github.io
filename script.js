function f(url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            callback(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function showCV(xhttp) {
    document.getElementById("main-box").innerHTML = xhttp.responseText;
}

function showContact(xhttp) {
    document.getElementById("main-box").innerHTML = xhttp.responseText;
}

function get(id) {
    container = document.getElementById('box');
    container.style.opacity = "0%";
    container.innerHTML = "";
    var r = new XMLHttpRequest();
    url = id + '.content';
    r.open('GET', url, true);
    r.send();
    r.onreadystatechange = function() {
        if (r.readyState == 4 && r.status == 200) {
            var c = r.responseText;
            container.innerHTML = c;
        };
    }
    container.style.opacity = "100%";
}
var report = function (celsius, fahrenheit) {
    document.getElementById("convert").innerHTML =
        celsius + "\xb0C = " + fahrenheit + "\xb0F";
};

document.getElementById("f-to-c").onclick = function () {
    var f = document.getElementById("temp").value;
    report((f - 32) / 1.8, f);
    document.getElementById("c-to-f").value = Math.round(c);

};

document.getElementById("c-to-f").onclick = function () {
    var c = document.getElementById("temp").value;
    report(c, 1.8 * c + 32);
    document.getElementById("f-to-c").value = Math.round(f);
};


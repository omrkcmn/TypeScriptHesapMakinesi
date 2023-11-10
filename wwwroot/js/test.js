var sayilar = [];
var sonuc = 0;
var sonucAlindi = false;
var yapilanIslem;
var s1 = document.getElementById("1");
var s2 = document.getElementById("2");
var s3 = document.getElementById("3");
var s4 = document.getElementById("4");
var s5 = document.getElementById("5");
var s6 = document.getElementById("6");
var s7 = document.getElementById("7");
var s8 = document.getElementById("8");
var s9 = document.getElementById("9");
var s0 = document.getElementById("0");
var addButton = document.getElementById("add");
var subsButton = document.getElementById("subs");
var lblSonuc = document.getElementById("sonucLabel");
var remove = document.getElementById("remove");
var clearData = document.getElementById("clear");
var btnSonuc = document.getElementById("btnSonuc");
var btnMultiple = document.getElementById("multi");
s1 === null || s1 === void 0 ? void 0 : s1.addEventListener("click", function (evt) {
    clear();
    sonucAlindi = false;
    lblSonuc.value += s1.innerText;
});
s2 === null || s2 === void 0 ? void 0 : s2.addEventListener("click", function (evt) {
    clear();
    sonucAlindi = false;
    lblSonuc.value += s2.innerText;
});
s3 === null || s3 === void 0 ? void 0 : s3.addEventListener("click", function (evt) {
    clear();
    sonucAlindi = false;
    lblSonuc.value += s3.innerText;
});
s4 === null || s4 === void 0 ? void 0 : s4.addEventListener("click", function (evt) {
    clear();
    sonucAlindi = false;
    lblSonuc.value += s4.innerText;
});
s5 === null || s5 === void 0 ? void 0 : s5.addEventListener("click", function (evt) {
    clear();
    sonucAlindi = false;
    lblSonuc.value += s5.innerText;
});
s6 === null || s6 === void 0 ? void 0 : s6.addEventListener("click", function (evt) {
    clear();
    sonucAlindi = false;
    lblSonuc.value += s6.innerText;
});
s7 === null || s7 === void 0 ? void 0 : s7.addEventListener("click", function (evt) {
    clear;
    sonucAlindi = false;
    lblSonuc.value += s7.innerText;
});
s8 === null || s8 === void 0 ? void 0 : s8.addEventListener("click", function (evt) {
    clear();
    sonucAlindi = false;
    lblSonuc.value += s8.innerText;
});
s9 === null || s9 === void 0 ? void 0 : s9.addEventListener("click", function (evt) {
    clear();
    sonucAlindi = false;
    lblSonuc.value += s9.innerText;
});
s0 === null || s0 === void 0 ? void 0 : s0.addEventListener("click", function (evt) {
    clear();
    sonucAlindi = false;
    lblSonuc.value += s0.innerText;
});
clearData === null || clearData === void 0 ? void 0 : clearData.addEventListener("click", function (evt) {
    lblSonuc.value = "0";
    sonuc = 0;
});
remove === null || remove === void 0 ? void 0 : remove.addEventListener("click", function (evt) {
    var getText = lblSonuc.value;
    if (getText.length > 0) {
        getText = getText.slice(0, -1);
        lblSonuc.value = getText;
    }
    if (getText.length == 0) {
        lblSonuc.value = "0";
    }
});
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", function (evt) {
    topla();
    yapilanIslem = "+";
});
btnMultiple === null || btnMultiple === void 0 ? void 0 : btnMultiple.addEventListener("click", function (evt) {
    carp();
    yapilanIslem = "*";
});
subsButton.addEventListener("click", function (evt) {
    cikar();
    yapilanIslem = "-";
});
function carp() {
    var sayi = stringToNumber(lblSonuc.value);
    if (sonuc == 0) {
        sonuc = 1;
    }
    sonuc *= sayi;
    lblSonuc.value = sonuc.toString();
    sonucAlindi = true;
    return sonuc;
}
function cikar() {
    var sayi = stringToNumber(lblSonuc.value);
    if (sonuc < sayi && sonuc != 0) {
        sonuc = sonuc - sayi;
        lblSonuc.value = sonuc.toString();
    }
    else {
        sonuc = sayi - sonuc;
        lblSonuc.value = Math.abs(sonuc).toString();
    }
    sonucAlindi = true;
    return sonuc;
}
btnSonuc === null || btnSonuc === void 0 ? void 0 : btnSonuc.addEventListener("click", function (evt) {
    if (yapilanIslem == "+") {
        topla();
        sonuc = 0;
    }
    if (yapilanIslem == "*") {
        carp();
        sonuc = 1;
    }
    if (yapilanIslem == "-") {
        cikar();
        sonuc = 0;
    }
});
function topla() {
    var sayi = stringToNumber(lblSonuc.value);
    sonuc += sayi;
    lblSonuc.value = sonuc.toString();
    sonucAlindi = true;
    return sonuc;
}
function stringToNumber(x) {
    return parseFloat(x);
}
//ilk değer sıfırsa bunu işleme koyma.
function clear() {
    if (lblSonuc.value == "0" || sonucAlindi) {
        lblSonuc.value = "";
    }
}
//# sourceMappingURL=test.js.map
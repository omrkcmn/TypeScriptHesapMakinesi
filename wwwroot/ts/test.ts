var sayilar: number[] = [];

var sonuc: number = 0;
var sonucAlindi: boolean = false;
var yapilanIslem: string;
const s1 = document.getElementById("1") as HTMLButtonElement;
const s2 = document.getElementById("2") as HTMLButtonElement;
const s3 = document.getElementById("3") as HTMLButtonElement;
const s4 = document.getElementById("4") as HTMLButtonElement;
const s5 = document.getElementById("5") as HTMLButtonElement;
const s6 = document.getElementById("6") as HTMLButtonElement;
const s7 = document.getElementById("7") as HTMLButtonElement;
const s8 = document.getElementById("8") as HTMLButtonElement;
const s9 = document.getElementById("9") as HTMLButtonElement;
const s0 = document.getElementById("0") as HTMLButtonElement;
const addButton = document.getElementById("add") as HTMLButtonElement;
const subsButton = document.getElementById("subs") as HTMLButtonElement;
var lblSonuc = document.getElementById("sonucLabel") as HTMLInputElement;
const remove = document.getElementById("remove") as HTMLButtonElement;
const clearData = document.getElementById("clear") as HTMLButtonElement;
const btnSonuc = document.getElementById("btnSonuc") as HTMLButtonElement;
const btnMultiple = document.getElementById("multi") as HTMLButtonElement;

s1?.addEventListener("click", (evt: MouseEvent) => {
    clear();
    sonucAlindi = false;
    lblSonuc.value += s1.innerText;
});

s2?.addEventListener("click", (evt: MouseEvent) => {
    clear();
    sonucAlindi = false;
    lblSonuc.value += s2.innerText;
});
s3?.addEventListener("click", (evt: MouseEvent) => {
    clear();
    sonucAlindi = false;
    lblSonuc.value += s3.innerText;
});
s4?.addEventListener("click", (evt: MouseEvent) => {
    clear();
    sonucAlindi = false;
    lblSonuc.value += s4.innerText;
});
s5?.addEventListener("click", (evt: MouseEvent) => {
    clear();
    sonucAlindi = false;
    lblSonuc.value += s5.innerText;
});

s6?.addEventListener("click", (evt: MouseEvent) => {
    clear();
    sonucAlindi = false;
    lblSonuc.value += s6.innerText;
});

s7?.addEventListener("click", (evt: MouseEvent) => {
    clear
    sonucAlindi = false;
    lblSonuc.value += s7.innerText;
});

s8?.addEventListener("click", (evt: MouseEvent) => {
    clear();
    sonucAlindi = false;
    lblSonuc.value += s8.innerText;
});

s9?.addEventListener("click", (evt: MouseEvent) => {
    clear();
    sonucAlindi = false;
    lblSonuc.value += s9.innerText;
});

s0?.addEventListener("click", (evt: MouseEvent) => {
    clear();
    sonucAlindi = false;
    lblSonuc.value += s0.innerText;
});

clearData?.addEventListener("click", (evt: MouseEvent) => {
    lblSonuc.value = "0";
    sonuc = 0;
});

remove?.addEventListener("click", (evt: MouseEvent) => {
    let getText = lblSonuc.value;
    if (getText.length > 0) {
        getText = getText.slice(0, -1);
        lblSonuc.value = getText;
    }
    if (getText.length == 0) {
        lblSonuc.value = "0";
    }
});

addButton?.addEventListener("click", (evt: MouseEvent) => {
    topla();
    yapilanIslem = "+";
});


btnMultiple?.addEventListener("click", (evt: MouseEvent) => {
    carp();
    yapilanIslem = "*";
});


subsButton.addEventListener("click", (evt: MouseEvent) => {
    cikar();
    yapilanIslem = "-";
});

function carp(): number {
    let sayi = stringToNumber(lblSonuc.value);
    if (sonuc == 0) {
        sonuc = 1;
    }
    sonuc *= sayi;
    lblSonuc.value = sonuc.toString();
    sonucAlindi = true;
    return sonuc;
}
function cikar(): number {
    let sayi = stringToNumber(lblSonuc.value);
    if (sonuc < sayi && sonuc != 0) {
        sonuc = sonuc - sayi;
        lblSonuc.value = sonuc.toString();
    } else {
        sonuc = sayi - sonuc;
        lblSonuc.value = Math.abs(sonuc).toString();
    }
    sonucAlindi = true;
    return sonuc;
}

btnSonuc?.addEventListener("click", (evt: MouseEvent) => {
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
})

function topla(): number {
    let sayi = stringToNumber(lblSonuc.value);
    sonuc += sayi;
    lblSonuc.value = sonuc.toString();
    sonucAlindi = true;
    return sonuc;
}
function stringToNumber(x: string): number {
    return parseFloat(x);
}

//ilk deðer sýfýrsa bunu iþleme koyma.
function clear(): void {
    if (lblSonuc.value == "0" || sonucAlindi) {
        lblSonuc.value = "";
    }
}






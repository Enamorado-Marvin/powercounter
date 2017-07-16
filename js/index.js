

function save() {
    var lecturaAnterior = document.getElementById("lecturaAnt").value;
    if (lecturaAnterior === null){
        document.getElementById('empty').innerHTML = "Please enter a valid number";
        window.location = "index.html";
    } else{
    localStorage.setItem("LectAnt", lecturaAnterior);
    document.getElementById("lecturaAnt").value = "";
    window.location = "lectura1.html";
    }
    
}

function saveLectura1() {
    var lecturaUno = document.getElementById("lectura1").value;
    localStorage.setItem("Lect1", lecturaUno);
    document.getElementById("lectura1").value = "";
    window.location = "lectura2.html";
}

function saveLectura2() {
    var lecturaDos = document.getElementById("lectura2").value;
    localStorage.setItem("Lect2", lecturaDos);
    document.getElementById("lectura2").value = "";
    window.location = "lectura3.html";
}

function saveLectura3() {
    var lecturaTres = document.getElementById("lectura3").value;
    localStorage.setItem("Lect3", lecturaTres);
    document.getElementById("lectura3").value = "";
    window.location = "lectura4.html";
}

function saveLectura4() {
    var lecturaCuatro = document.getElementById("lectura4").value;
    localStorage.setItem("Lect4", lecturaCuatro);
    document.getElementById("lectura4").value = "";
    window.location = "lectura5.html";
}

function saveLectura5() {
    var lecturaCinco = document.getElementById("lectura5").value;
    localStorage.setItem("Lect5", lecturaCinco);
    document.getElementById("lectura5").value = "";
    window.location = "resultado.html";
}

function resultado() {
    var lectAnte = localStorage.getItem("LectAnt");
    var lectUno = localStorage.getItem("Lect1");
    var lectDos = localStorage.getItem("Lect2");
    var lectTres = localStorage.getItem("Lect3");
    var lectCuatro = localStorage.getItem("Lect4");
    var lectCinco = localStorage.getItem("Lect5");
    
    var lectActual = lectUno + lectDos + lectTres + lectCuatro + lectCinco;
    var kwh = lectActual - lectAnte;
    
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth()+1; //hoy es 0!
    var yyyy = hoy.getFullYear();

    if(dd<10) {
        dd='0'+dd;
    } 

    if(mm<10) {
        mm='0'+mm;
    } 

    hoy = mm+'/'+dd+'/'+yyyy;

    var costKwh = 3.51;
    var costoLemp = kwh * costKwh;
    var costoRedn = Math.round(costoLemp);
    
    var alumbrado = 25.5;
    var ajuste = 35.01;
    
    var totalPago = alumbrado + ajuste + costoRedn;
    
    document.getElementById('fechaAct').innerHTML = "Date: " + hoy;
    document.getElementById('consumo').innerHTML = "Consumption in KWH: " + kwh;
    document.getElementById('alumbrado').innerHTML = "L " + alumbrado;
    document.getElementById('ajuste').innerHTML = "L " + ajuste;
    document.getElementById('costLemp').innerHTML = "L " + costoRedn;
    document.getElementById('totalPago').innerHTML = "L " + totalPago;
    
}

function enterKeyPress(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode === 13)
    {
        document.getElementById('enter').click();
        return false;
    }
    return true;
}

function getFocus() {
    document.getElementById("lecturaAnt").focus();
}

function getFocus1() {
    document.getElementById("lectura1").focus();
}
function getFocus2() {
    document.getElementById("lectura2").focus();
}
function getFocus3() {
    document.getElementById("lectura3").focus();
}
function getFocus4() {
    document.getElementById("lectura4").focus();
}
function getFocus5() {
    document.getElementById("lectura5").focus();
}

import cipher from './cipher.js';

const buttonCode = document.getElementById('btnCodificar');

function codificarMensagem() {
    var display1 = document.getElementById('cifrar').style.display;
    if (display1 == 'block') {
        document.getElementById('cifrar').style.display = 'none';
    } else {
        document.getElementById('cifrar').style.display = 'block';
        document.getElementById('welcome').style.display = 'none';
    };
    
};

buttonCode.addEventListener('click', function () {
    codificarMensagem();
});


const buttonCode2 = document.getElementById('btnDecodificar');

function decodificarMensagem() {
    var display2 = document.getElementById('decifrar').style.display;
    if (display2 == 'block') {
        document.getElementById('decifrar').style.display = 'none';
    } else {
        document.getElementById('decifrar').style.display = 'block';
        document.getElementById('welcome').style.display = 'none';
    };
};

buttonCode2.addEventListener('click', function () {
    decodificarMensagem();
})

const backC = document.getElementById('voltarC');

function backHome1() {
    var display3 = document.getElementById('welcome').style.display;
    if (display3 == 'block') {
        document.getElementById('welcome').style.display = 'none';
    } else {
        document.getElementById('welcome').style.display = 'block';
        document.getElementById('cifrar').style.display = 'none';
    };
    
};

backC.addEventListener('click', function () {
    backHome1();
})

const backD = document.getElementById('voltarD');

function backHome2() {
    var display4 = document.getElementById('welcome').style.display;
    if (display4 == 'block') {
        document.getElementById('welcome').style.display = 'none';
    } else {
        document.getElementById('welcome').style.display = 'block';
        document.getElementById('decifrar').style.display = 'none';
    };
    
};

backD.addEventListener('click', function () {
    backHome2();
})
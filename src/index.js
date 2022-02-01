import cipher from './cipher.js';

const btnEncode = document.getElementById('buttonEncode');
function encodeMessage() {
    var display1 = document.getElementById('encodeLocation').style.display;
    if (display1 == 'block') {
        document.getElementById('encodeLocation').style.display = 'none';
    } else {
        document.getElementById('encodeLocation').style.display = 'block';
        document.getElementById('root').style.display = 'none';
    }
}
btnEncode.addEventListener('click', function () {
    encodeMessage();
});


const btnDecode = document.getElementById('buttonDecode');
function decodeMessage() {
    var display2 = document.getElementById('decodeLocation').style.display;
    if (display2 == 'block') {
        document.getElementById('decodeLocation').style.display = 'none';
    } else {
        document.getElementById('decodeLocation').style.display = 'block';
        document.getElementById('root').style.display = 'none';
    }
}
btnDecode.addEventListener('click', function () {
    decodeMessage();
});


const back1 = document.getElementById('return1');
function backHome1() {
    var display3 = document.getElementById('root').style.display;
    if (display3 == 'block') {
        document.getElementById('root').style.display = 'none';
    } else {
        document.getElementById('root').style.display = 'block';
        document.getElementById('encodeLocation').style.display = 'none';
    }   
}
back1.addEventListener('click', function () {
    backHome1();
});


const back2 = document.getElementById('return2');
function backHome2() {
    var display4 = document.getElementById('root').style.display;
    if (display4 == 'block') {
        document.getElementById('root').style.display = 'none';
    } else {
        document.getElementById('root').style.display = 'block';
        document.getElementById('decodeLocation').style.display = 'none';
    }
}
back2.addEventListener('click', function () {
    backHome2();
});


const btnEncoding = document.getElementById('code1');
function encodingMessage () {
    let string = document.getElementById("messageEncode").value;
    let offset = Number(document.getElementById("displacement1").value);
    const encoding = cipher.encode(offset, string);
    document.getElementById("printLocationEncode").innerHTML = encoding;
}
btnEncoding.addEventListener('click', encodingMessage);


const btnDecoding = document.getElementById('code2');
function decodingMessage () {
    let string = document.getElementById("messageDecode").value;
    let offset = Number(document.getElementById("displacement2").value);
    const decoding = cipher.decode(offset, string);
    document.getElementById("printLocationDecode").innerHTML = decoding;
}
btnDecoding.addEventListener('click', decodingMessage);
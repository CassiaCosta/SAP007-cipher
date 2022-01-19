import cipher from './cipher.js';

const buttonCode = document.getElementById('btnCodificar');

buttonCode.addEventListener('click', function () {
    decifrarMensagem();
});

function decifrarMensagem() {
    var display = document.getElementById('cifrar').style.display;
    if (display == "none") {
        document.getElementById('cifrar').style.display = 'block';
    } else {
        document.getElementById('cifrar').style.display = 'none';
    };
    
};

console.log(cipher);


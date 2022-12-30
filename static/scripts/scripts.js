
//  Función de la encriptación
function encriptador(mensaje, forma) {
    let listaletras = ['i', 'e', 'a', 'o', 'u'];
    let listaremplazo = ['imes ', 'enter', 'ai', 'ober', 'ufat'];

    if (forma == 1) {
        for (let i = 0; i < listaletras.length; i++) {
            mensaje = mensaje.replaceAll(listaletras[i], listaremplazo[i]);
        }
    }
    else if (forma == 2) {
        for (let i = 0; i < listaletras.length; i++) {
            mensaje = mensaje.replaceAll(listaremplazo[i], listaletras[i]);
        }
    }
    return mensaje;
}

// Selección de botones
const btnEncrypt = document.getElementById('btn-encrypt');
const encryptArea = document.getElementById('encrypt-area');
const btnCopy = document.getElementById('btn-copy');
const btnDesencrypt = document.getElementById('btn-desencrypt');
const encryptedArea = document.getElementById('text-to-encrypt');
const textEncrypt = document.getElementById('text-encrypt');

btnEncrypt.addEventListener(('click'), () => {
    let texto = encryptArea.value;
    if (texto == '') {
        console.log('No hay nada aqui')
        alert('No puedes darle click sin poner texto')
    }
    else {
        textEncrypted = encriptador(texto, 1);
        encryptText(textEncrypted, 1)
        btnCopy.className = 'btn';
    }
})


btnDesencrypt.addEventListener(('click'), () => {
    let texto = encryptedArea.textContent;
    console.log(texto)
    if (texto == '') {
        console.log('No hay nada aqui')
        alert('No puedes darle click sin poner texto')
    }
    else {
        textEncrypted = encriptador(texto, 2);
        encryptText(textEncrypted, 2);
    }
})


function encryptText(parameter, number) {
    if (number == 1) {
        const title = document.getElementById('title-encrypt');
        title.textContent = 'Mensaje Encriptado';
        encryptedArea.className = '';
        encryptedArea.textContent = parameter;
        textEncrypt.className = 'hide';
        encryptArea.value = '';
    }
    else if (number == 2) {
        encryptArea.value = parameter;
    }
}

function copyBtn() {
    encryptedArea.disabled = false;
    console.log(encryptedArea)
    encryptedArea.select();
    document.execCommand("copy");
    encryptedArea.disabled = true;
}

btnCopy.addEventListener('click', () => {
    copyBtn()
})
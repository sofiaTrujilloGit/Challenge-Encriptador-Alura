// Maria Sofia Trujillo Muza 
const texto = document.querySelector('.texto');
const mensaje = document.querySelector('.mensaje');
const lupa = document.querySelector('.lupa');
const encriptarBt = document.querySelector('.btEncriptar');
const desencriptarBt = document.querySelector('.btDesencriptar');
const Copiar = document.querySelector('.Copiar');



function encriptar(textoEncriptado) {
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();
    for(let i=0; i < codigo.length; i++) {
        if(textoEncriptado.includes(codigo[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(codigo[i][0], codigo[i][1]);           
        }
    }
    return textoEncriptado;
}

function desencriptar(textoDesencriptado) {
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(let i=0; i < codigo.length; i++) {
        if(textoDesencriptado.includes(codigo[i][1])) {
            textoDesencriptado = textoDesencriptado.replaceAll(codigo[i][1], codigo[i][0]);
        }
    }
    return textoDesencriptado;
}

function btEncriptar() {
    const textoCifrado = encriptar(texto.value);
    mensaje.value = textoCifrado;
    mensaje.placeholder = '';
    limpiarCampo();
    document.querySelector('.Copiar').style.display = 'block';
}

function btDesencriptar() {
    const textoCifrado = desencriptar(texto.value);
    mensaje.value = textoCifrado;
    mensaje.placeholder = '';
    
}

document.querySelector('.Copiar').addEventListener('click', function() {
    const mensaje = document.querySelector('.mensaje');
    const texto = document.querySelector('.texto');
    texto.value = mensaje.value;
    alert('Texto encriptado copiado, ahora puedes Desencriptarlo!');
});


function limpiarCampo() {
    texto.value = '';
    lupa.style.display = 'none';
}
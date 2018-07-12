"use strict";
//Uso de parametros: obligatorio, por default,opcional
function beber(quien, bebida, lugar) {
    if (bebida === void 0) { bebida = "Cerveza"; }
    var mensaje;
    if (lugar) {
        mensaje = quien + " esta tomando " + bebida + "en " + lugar;
    }
    else {
        mensaje = quien + " esta tomando " + bebida;
    }
    console.log(mensaje);
}
beber("Homero", "pisco", "la taberna Moe");

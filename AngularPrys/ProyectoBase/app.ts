//Uso de parametros: obligatorio, por default,opcional
function beber(quien : string, bebida : string = "Cerveza" , lugar?:string){
    let mensaje :string;
    if(lugar){
        mensaje = quien + " esta tomando " + bebida + " en " + lugar;    
        
    }
    else{
        mensaje = quien + " esta tomando " + bebida;
        
    }
    
    console.log(mensaje);
}

beber ("Homero", "pisco","la taberna Moe");


//Uso de funciones flecha

let miFuncion = function (a : number){
    return a;
 }

let miFuncionF = (a : number) => a;

let miFuncion2 = function (a:number , b:number){
    return a+b;
}

let miFuncion2F = (a:number, b:number) => a+b;


let miFuncion3 = function (nombre : string){
    nombre = nombre.toUpperCase();
    return nombre; 
}

let miFuncion3F = (nombre: string) => {
    nombre = nombre.toUpperCase();
    return nombre; 
}
//let nombre = prompt('Cual es tu nombre');
//let edad = prompt('Cual es tu edad');
// se pueden desde ventanas en crome
//document.getElementById('app').innerHTML = `Bienvenido ${nombre} de ${edad} años`

//var nombre = 'Damian';
//
//var carrito = 'libro';
//
//var carito = 'libro',
//    carito1 = 'libro1'
//
//
//nombre = 'Gaby';
//console.log(nombre);
//
//console.log(carito);
//console.log(carito1);

//var dias99;
//
//console.log(dias99);

// mas de una palabra

//var primerNombre = 'Damian';
//var primer_nomre = 'Gaby';
//var PrimerNombre = 'Vania';

//let nombre = juan,
//    producto = 'libro';
//
//const prodc = 'cosa';let aprendiendo = 'Apendiendo',
//tecnologia = 'JavaScript' + ' ';
//
//console.log(`${aprendiendo} ${tecnologia}`);
//
//console.log(tecnologia.concat(' ', 'es genial'));
//
//console.log(tecnologia.toLocaleUpperCase());
//console.log(tecnologia.toLowerCase());
//
//let mensaje = 'Aprendiendo JavaScrip, CSS, HTML para frontend';

//console.log(mensaje.indexOf('Java'));
//console.log(mensaje.split(','));
////console.log(mensaje.replace('CSS', 'PHP'));
////console.log(mensaje.includes('CSS1'));
////console.log(tecnologia.repeat(10));
//
//const numero1 = 30,
//    numero2 = 20,
//    numero3 = 20.20,
//    numero4 = .1020,
//    numero5 = -3;
//
//let resultado;
////suma
//
//resultado = numero1 + numero2;
////resta
//resultado = numero2 - numero3;
////multiplicasion
//resultado = numero2 * numero3;
////div
//resultado = numero2 / numero3;
//
//resultado = Math.PI;
//
//
////valor = Symbol('simbolo');
//let valor;
//
//valor = 'damian'
//valor = 20;
//valor = '20';
//
//valor = true;
//valor = null;
//
//valor = [1, 2, 3, 4, 5];
//
//valor = {
//    nombre: 'damian',
//    profesion: 'desarollador'
//}
//
//valor = new Date();
//
//
//console.log(typeof valor);

//const numero1 = 20;
//const numero2 = 50;
//const numero3 = "20";
//
//console.log(numero1 > numero2);
//console.log(numero1 < numero2);
//
//console.log(numero1 == numero3);
//console.log(numero1 === numero3);
//
//console.log(3 != 2);
//
//console.log('hola' == ' hola');
//
//console.log('a' < 'b');
//
//console.log(null === undefined);

//const numero1 = "50",
//    numero2 = 10,
//    numero3 = 'tres';
//

//console.log(Number(numero1) + numero2);
//console.log(parseInt(numero1) + numero2);
//
//console.log(Number(numero3) + numero2);

//let dato;
//dato = Number("20");
//dato = Number("20.20");
//
//dato = Number(false);
//dato = Number(null);
//dato = Number(undefined);
//dato = Number('hola mundo');
//dato = Number([1, 2, 3]);
//
//dato = parseInt('100');
//dato = parseFloat('100')
//console.log(dato);

//let cp;
//
//cp = String(90210);
//
//console.log(cp.length);

//const producto = 'Pizza',
//    precio1 = 30,
//    producto2 = 'Hamburguesa',
//    precio2 = 20;
//
//let html;

//html = '<ul>' +
//    '<li>Orden: ' + producto + '</li>' +
//    '<li>Precio: ' + precio1 + '</li>' +
//    '<li>Orden: ' + producto2 + '</li>' +
//    '<li>Precio: ' + precio2 + '</li>' +
//    '<li>Total: ' + (precio1 + precio2) + '</li>' +
//    '</ul>';

//html = `
//<ul>
//<li> Orden : ${producto} </li>
//<li> precio : ${precio1} </li>
//<li> Orden : ${producto2} </li>
//<li> precio : ${precio2} </li>
//<li> precio : ${total(precio1, precio2)} </li>
//
//</ul>`;
//
//function total(precio1, precio2) {
//    return precio1 + precio2;
//}
//
//document.getElementById('app').innerHTML = html;

// como crear areglos

//const numeros = [10, 20, 30, 40, 50, 60];

//console.log(numeros);

//const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio');

//console.log(meses);
//const mezcla = ['hola', 20, true, null, false, undefined];

//console.log(meses.length);

//console.log(Array.isArray(meses));
//

//meses.unshift('mes 0')
//
////final del areglo
//meses.pop();
////eliminar el mes 0
//
//meses.shift();
//// quiar un rango
//
//meses.splice(2, 1);
//
//// revertir
//meses.reverse();
//// unit areglos
//let areglo1 = [1, 2, 3],
//areglo2 = [9, 87, 7];

//console.log(areglo1.concat(areglo2));

////ordenar un areglo
//
//const frutas = ['Platano', 'Manzana', 'Zanahoria', 'Fresa', 'Naranja'];
////ordena por orden alfaberico
//frutas.sort();
//console.log(frutas);
//
////ordenar numeros
//
//areglo1 = [2, 5, 3, 54, 12, 9];
//areglo1.sort(function(a, b) {
//    // ordena menor a mayor
//    return b - a;
//
//    // ordena mayor a menor
//    //return b - a;
//});
//console.log(areglo1);
//

//console.log(meses.indexOf('Abril'));
//console.log(meses);



//for (i = 0; i == meses.length; i++) {
//    if (meses[i] == meses.indexOf('Abril')) {
//        console.log('se encontro' + meses[i]);
//    }
//}
// en el caso de los areglos en constantes si se pueden cambiar
// o agregar datos siempre i cuando no sea todo el areglo
//const numeros = [1, 2, 3];
//
//numeros[0] = 4;
//numeros.push(5);
//console.log(numeros);

// un objeto utiliza esta forma
// los objetos  se separan por comas
//const persona = {
//    nombre: 'Damian',
//    aprellido: 'Susano',
//    prefesion: 'Ingeniero',
//    email: 'damian@gmail.com',
//    edad: 20,
//    musica: ['Trance', 'Rock', 'Grunge'],
//    hogar: {
//        ciudad: 'mexico',
//        pais: 'Mexico'
//    },
//    nacimiento: function() {
//        return new Date().getFullYear() - this.edad;
//    }
//}
//
//
//const persona2 = {
//        nombre: 'Damian',
//        aprellido: 'Susano',
//        prefesion: 'Ingeniero',
//        email: 'damian@gmail.com',
//        edad: 30,
//        musica: ['Trance', 'Rock', 'Grunge'],
//        hogar: {
//            ciudad: 'mexico',
//            pais: 'Mexico'
//        },
//        nacimiento: function() {
//            return new Date().getFullYear() - this.edad;
//        }
//    }
//    // en los objetos cambia para obtener un balor en espesifico
//    // el punto sirve para ingresar a los valores del objeto
//    // en este caso el nombre
//persona.musica.push('Jazz')
//    //console.log(persona.hogar.pais);
//    //console.log(persona['hogar']['pais']);
//console.log(persona2.nacimiento());

//const autos = [
//
//    { modelo: 'Mustang', motor: 6.0 },
//    { modelo: 'Camaro', motor: 6.1 },
//    { modelo: 'Challenger', motor: 6.2 },
//];

//for (let i = 0; i < autos.length; i++) {
//
//    console.log(`${autos[i].modelo} ${autos[i].motor}`);
//
//}

//autos[0].motor = 'audi'
//
//console.log(autos);

// funcion ddeclaration

//function saludar(nombre) {
//    console.log(`hola ${nombre}`);
//}
//
//saludar('Alma');
//saludar('Pedro');
//saludar('Gaby');


//function sumar(num1, num2) {
//    let suma = num1 + num2;
//
//    return console.log(`la suma de ${num1} + ${num2} = ${suma}`);
//}
//
//sumar(2, 3);
//sumar(2, 5)

//function sumar(a, b) {
//    return a + b;
//}
//
//let suma = sumar(2, 3);
//
//console.log(sumar);


//function saludar(nombre = 'Idiota') {
//    //if (typeof nombre === 'undefined') {
//    //    nombre = 'idiota'
//    //}
//    return `Hola ${nombre}`;
//
//}
//
//
//let saludo;
//saludo = saludar()
//
//
//console.log(saludo);

//funciones de exprecion

//const suma = function(a = 0, b = 0) {
//    return a + b;
//}
//
//console.log(suma(1, 4));
//console.log(suma(1, 23));
//console.log(suma(1, ));
//console.log(suma());
//console.log(suma(1, 4));
//
//const saludar = function(nombre = 'Gaby', edad = 22, trabajo = 'desarollador') {
//    return `Hola ${nombre} tu edad es : ${edad} y eres : ${trabajo}`;
//}
//
//console.log(saludar('Damian', 20));

//iife se invocan de inmediato


//(function(tecnologia) {
//    console.log(`Aprendiendo ${tecnologia}`);
//})('JavaScript');
//
//// metodos de propiedad
//// son cuando una funcion se pone dentro de un objeto
//
//const musica = {
//    reproducir: function(id) {
//        console.log(`reproduciendo cansion : ${id}`);
//    },
//    pausar: function() {
//        console.log(`Pausar musica`);
//    }
//}
//
//// los metodos tambien se pueden crear fuera del objeto
//
//musica.borrar = function(id) {
//    console.log(`borando la cancion con el ${id}`);
//}
//
//musica.reproducir(30);
//musica.pausar();
//
//musica.borrar();

//funcion que no existe
//
//try {
//    algo();
//} catch (e) {
//    console.log(e);
//} finally {
//    console.log('No importa se ejecuta');
//}
//
//function obtenerClientes() {
//    console.log('Descargando...');
//
//    setTimeout(function() {
//        console.log('Completo');
//    }, 3000);
//}
//
//obtenerClientes();
// para las fechas

//
//let navidad = new Date('12-25-2020');
//
//console.log(diaHoy);
//
//console.log(`navidad es el dia : ${navidad}`);

//const diaHoy = new Date();
//
//let valor = diaHoy.getMonth();
//
//valor = diaHoy.getDay();
//valor = diaHoy.getMinutes();
//// valor de obtener el año
//valor = diaHoy.getFullYear();
//
//valor = diaHoy.getHours();
//
//valor = diaHoy.getTime();
//
//valot = diaHoy.setFullYear(2016);
//valor = diaHoy.getFullYear();
//console.log(valor);


//
//if (edad != 18) {
//    console.log('puedes entrar');
//} else {
//    console.log('no puedes entrar');
//}
//let puntaje;
//if (typeof puntaje != 'undefined') {
//    console.log(`el puntaje fue de ${puntaje}`);
//} else {
//    console.log('no hay puntaje');
//}
//
//console.log(puntaje);

//let efectivo = 500;
//let totalCarito = 600;
//
//if (efectivo > totalCarito) {
//    console.log('pago correcto');
//} else {
//    console.log('no te alcanza');
//}

//else if


//let horaActual = 25;
//
//if (horaActual > 0 && horaActual <= 10) {
//    console.log('buenos dias');
//} else if (horaActual > 10 && horaActual <= 18) {
//    console.log('buenas tardes');
//} else if (horaActual > 18 && horaActual <= 24) {
//    console.log('buenas noches');
//} else {
//    console.log('Hora no valida');
//}

//let efectivo = 300,
//    credito = 300,
//    disponible = efectivo + credito,
//    totalCarrito = 500;
//
//
//if (totalCarrito < efectivo || totalCarrito < credito) {
//    console.log('puedes pagar');
//} else if (totalCarrito < disponible) {
//    console.log('pague con ambos');
//} else {
//    console.log('no se puede pagar :C');
//}

//const logueado = false;
//// para solo generarlo en una linea
//console.log(logueado === true ? ' si se logueo' : 'no se logueo');

// switch
//const metodoPago = 'cheque1'
//switch (metodoPago) {
//
//    case 'efectivo':
//        console.log(`pago con: ${metodoPago}`);
//        break;
//
//    case 'cheque':
//        console.log(`pago con: ${metodoPago}`);
//        break;
//
//    case 'tarjeta':
//        console.log(`pago con: ${metodoPago}`);
//        break;
//
//    default:
//
//        console.log('metodo de pago no soportado');
//        break;
//
//}
/*
let mes;


const diaHoy = new Date();

let valor = diaHoy.getMonth();

switch (new Date().getMonth()) {
    case 0:
        mes = 'enero'
        break;

    case 1:
        mes = 'febrero'
        break;

    case 2:
        mes = 'marzo'
        break;

    case 3:
        mes = 'abril'
        break;

    case 4:
        mes = 'mayo'
        break;

    case 5:
        mes = 'junio'
        break;

    case 6:
        mes = 'julio'
        break;

    case 7:
        mes = 'agosto'
        break;


    case 8:
        mes = 'septiembre'
        break;

    case 9:
        mes = 'octubre'
        break;

    case 10:
        mes = 'noviembre'
        break;

    case 11:
        mes = 'diciembre'
        break;
}


console.log(`Este es es: ${mes}`);

*/
//const aregloProductos = ['camisa', 'boleto', 'guitarra', 'disco', ':c']
//
//console.log(aregloProductos.length);
//for (let i = 0; i < aregloProductos.length; i++) {
//    console.log(`Tu producto ${aregloProductos[i]} fue agregado`);
//}

//const musica = ['cansion1', 'cansion2', 'cansion3']
//let i = 0;
//while (i < musica.length) {
//    console.log(`mReproduciendo : ${musica[i]}`);
//    i++;
//}

//let i = 0;
//
//do {
//    console.log(`numero : ${i}`);
//    i++
//} while (i < 10);


//const pendientes = ['tarea', 'comer', 'proyectp', 'aprender'];
//
////foreach
//
//pendientes.forEach(function(pendiente, index) {
//    console.log(`${index}:  ${pendiente}`);
//})

//for (i = 0; i <= pendientes.length; i++) {
//    console.log(pendientes[i]);
//}


//map para recorrer un areglo de objetos

//const carrito = [
//    { id: 1, producto: 'libro' },
//    { id: 2, producto: 'camisa' },
//    { id: 3, producto: 'guitarra' },
//    { id: 4, producto: 'disco' }
//];
//
//const nombreProducto = carrito.map(function(carrito) {
//    return carrito.producto;
//})
//
//console.log(nombreProducto);


//const automovil = {
//        modelo: ' Camaro',
//        motor: 6.1,
//        anio: 1997,
//        marca: 'Chevrolet'
//    }
//    // forma para recorrer objetos
//for (let auto in automovil) {
//    console.log(`${auto}: ${automovil[auto]}`);
//}
//
//console.log(automovil);

const ciudades = ['Longre', 'New York', 'Madril', 'Paris'];
const ordenes = new Set([123, 231, 132, 102]);
const datos = new Map();

datos.set('nombre', 'juan');
datos.set('profecion', 'desarollador web');


//values
//for (let entrada of ciudades) {
//    console.log(entrada);
//}
// por llave
//for (let entrada of ciudades.keys()) {
//    console.log(entrada);
//}
//default
//for (let entrada of ciudades) {
//    console.log(entrada);
//}



//entries iterator
// entries a las ciudades
//for (let entrada of ciudades.entries()) {
//    console.log(entrada);
//}
//entries para las ordenes
//for (let entradas of ordenes.entries()) {
//console.log(entradas);
//}
//
//for (let entrada of datos.entries()) {
//    console.log(entrada);
//}

//const mensaje = 'Aprender JavaScript';
//
//for (let letra of mensaje) {
//    console.log(letra);
//}

//for (let i = 0; i < mensaje.length; i++) {
//    console.log(mensaje[i]);
//}

//const enlaces = document.getElementsByTagName('a');
//
//for (let enlace of enlaces) {
//    console.log(enlace.href);
//}

//const nombre = prompt();
//
//console.log(`bienvenido ${nombre}`);

//if (confirm('Eliminar')) {
//    console.log('eliminado');
//} else {
//    console.log('nada paso');
//}

//let altura,
//    anchura;
//
//altura = window.innerHeight;
//anchura = window.outerWidth;
//
//console.log(altura);
//console.log(anchura);

// let ubicacion;
// ubicacion = window.location;
// 
// ubicacion = window.navigator.language;
// console.log(ubicacion);


//console.log('Globales: ' + a, b, c);
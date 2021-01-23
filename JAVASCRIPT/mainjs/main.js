
/*var nombre = "Cesar";

var altura = 190;

var concatenacion = " " +nombre +" "+altura;

document.write(nombre); /* document para pasar como documento  .write Añade la variable al docuemtno html */
/*document.write(altura);
document.write(concatenacion); /*Esta manera de trabajar con documetn write es muy poco optima */

/* Aqui es para imprimir dentro del id datos que pusimos al div de HTML */
/*var datos = document.getElementById("datos"); /*Se utiliza ese ya que le pusimos un id al elemento en HTML */
/*datos.innerHTML = concatenacion;

datos.innerHTML = `
    <h1>Hola yo soy: ${nombre}</h1>
    <h2>Y mido: ${altura} cm </h2>
    <h3>y esto junto es: ${nombre} ${altura} cm</h3>

`;

/*Estructuras de control */

/*if(altura >= 190){
    datos.innerHTML+=`<h1>Eres una persona alta</h1>` ;/* Realizando esto lo de arriba se va a borrar ya que esto lo sobreescribe para eso se 
                                                        le colocala la coma delante del signo igaul par aque no se sobreescriba si no que continue */
/*}else{
    datos.innerHTML+=`<h1>Eres una persona baja</h1>`;
}


/* Para for primero es el valor luego la condicion y al final el valor para el aumetno a hasta donde quieres que llegue */
/*for( var i = 2010; i <= 2020; i++){
    datos.innerHTML += "<h2>Estamos en el año: " +i;
}
*/

/*Funciones */

var nombre = "cesar";
var altura = 190;

function MuestraNombre(nombre, altura){
    var misdatos=`
        <h1>Hola yo soy: ${nombre}</h1>
        <h2>Y mido: ${altura} cm </h2>
        <h3>y esto junto es: ${nombre} ${altura} cm</h3>
    `;
    return misdatos;
}

function imprimir(){
    var datos = document.getElementById("datos")
    datos.innerHTML=MuestraNombre("cesar","190");
}

imprimir();

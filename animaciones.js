/* FUNCIONES PARA EL CONTADOR DE BOLAS */

function incrementValue()
{
	//Empezamos creando una variable que 
	var value = parseInt(document.getElementById('cont_crear').innerHTML, 10);
	//guardamos en la variable la condición resultante. Si no es un número, guardará, si lo es, el valor de la variable
	value = isNaN(value) ? 0 : value;
	//incrementamos la variable cada vez que se clique.
	value++;
	//guardaremos en el el botón con ese Id el resultado de la variable craeda
	document.getElementById('cont_crear').innerHTML = value;
}

function moverArbol()
{
	var bolas_suelo = parseInt(document.getElementById('cont_elim').innerHTML, 10);
	var bolas_arbol = parseInt(document.getElementById('cont_crear').innerHTML);
	bolas_suelo = isNaN(bolas_suelo) ? 0 : bolas_suelo;
	//En este caso, guardamos en las bolas del suelo, las bolas que ya había más las que se han caído del árbol
	bolas_suelo = bolas_suelo + bolas_arbol; 
	document.getElementById('cont_elim').innerHTML = bolas_suelo;
	//Y ponemos a 0 el contador de las bolas en el árbol
	document.getElementById('cont_crear').innerHTML = 0;
}

/* FUNCION PARA EL BOTON "PONER BOLA" */

/*Introducimos jQuery para realizar las siguientes funciones.
Para que funcione, debemos decirle que una vez se cargue el documento y esté listo, realizará la siguiente función:*/
$(document).ready(function(){
	//llamamos al boton con ese id (poner bolas) y le decimos que:
	$("#boton1").click(function(){
		/*guardamos en una variable un número random (math.floor para que redondee) entre el 1 y el 1000 (suponiendo que nunca se apretará más de mil veces el botón).
		Podriamos haber quitado posteriorme los id de las bolas caídas, o poner un contador infinito para crear ids, pero, por falta 
		de tiempo y experiencia, me ha resultado más sencillo crear esta variable. */
		var idbola = Math.floor(Math.random() * (1000-1) ) +1;
		//guardamos en img la imagen con los métodos attr dónde introducimos el src, la clase y el id (transformado).
		var img = $("<img></img>").attr("src","img/ball.png").attr("class", "ball").attr("id", idbola.toString());
		//Con la id de la imagen del arbol, le añadimos (append) nuestra variable img de las bolas
		$("#imagen").append(img);
		/*A continuación debemos definir dónde posicionar las variables. Para ello he utilizado Gimp. He medido
		los píxeles top y left de cada parte del árbol. Lo he dividio en 5 partes y en cada parte he imaginado un
		cuadrado en donde meter las bolas. */
		//La variable top está comprendida entre un número entre el 60 (el pixel más cercado al top) y el 320.
		var top= Math.floor(Math.random() * (320-60))+60;
		//Aunque la imagen mida más pixeles, como hemos definido en los estilos, no todo es árbol.
		/*A continuación definimos left. Si top está en el tope del arbol (en la copa, por llamarla de alguna manaera,
		entonces left valdrá los valores que hay en el cuadrado dibujado en la capa de la copa. Y así vamos haciendo 
		cuadrados definiendo los píxeles del top y del left, hasta llegar al tronco (exluido)*/
		if ((top>60)&&(top<110)){
			var left= Math.floor(Math.random() *(232-165)) + 165;
		} else if ((top>110)&&(top<170)) {
			var left= Math.floor(Math.random() *(252-140)) + 140;
		} else if ((top>170)&&(top<220)) {
			var left= Math.floor(Math.random() *(280-120)) + 120;
		} else if ((top>220)&&(top<270)) {
			var left= Math.floor(Math.random() *(300-105)) + 105;
		} else if ((top>270)&&(top<320)) {
			var left= Math.floor(Math.random() *(320-75)) + 75;
		}
		/*Una vez posicionada la bola, guardaremos estos valores en el id correspondiente y le diremos que,
		desde el pixel top 0 left 0, q es dónde se situará automáticamente con la posición absolute, nos coloque
		con animate la bola en la posición random definida anteriormente.*/
		$("#" + idbola.toString()).animate({top: top.toString(), left: left.toString()}, 'slow');
	});
});

/* FUNCIONES PARA EL BOTON "MOVER ARBOL" */

$(document).ready(function(){
    $("#boton2").click(function(){
		//llamamos la id de la imagen (el arbol) y le ponemos el efecto shake (para agitarlo)
        $("#imagen").effect("shake");
		//lo mismo hacemos con la clase ball
		$(".ball").effect("shake");
	});
});

$(document).ready(function(){
  $("#boton2").click(function(){
	//la clase ball la animamos para que se caiga suavemente hasta el suelo, midiendo exactamente los pixeles con Gimp.  
	$(".ball").animate({top: '370'}, 'slow');
	
  });
});		

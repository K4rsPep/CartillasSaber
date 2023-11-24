const cloud = document.getElementById("cloud");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const lis = document.querySelectorAll("li");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");
const linea = document.querySelector(".linea")

menu.addEventListener("click",()=>{
    barraLateral.classList.toggle("max-barra-lateral");
    if(barraLateral.classList.contains("max-barra-lateral")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if(window.innerWidth<=320){
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }
});

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("");
    circulo.classList.toggle("prendido");
});

cloud.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    linea.classList.toggle("oculto")
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
    lis.forEach((li)=>{
        li.classList.toggle("oculto");
    });
});


//animacion de escritura pajina de inicio
const typed = new Typed('.typed', {
	strings: [
		'<i class="mascota">Las pruebas Saber que se llevan a cabo en cuatro ciclos durante la educación, tienen como objetivo servir como base de una medición nacional de competencias de los estudiantes. <br><br>Ésta base dará información acerca del desempeño de los estudiantes y suministrará datos sobre sus habilidades socioemocionales y factores que pueden incidir en el desarrollo de los aprendizajes.<br><br>Las pruebas divididas en los cuatro ciclos son aplicadas a los grados 3°, 5°, 9° y 11°. En esta página podrás acceder a cartillas de práctica enfocadas en las habilidades básicas de aprendizaje del lenguaje. Así podrás estar preparado para todo.</i>'
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 0, // Velocidad en mlisegundos para poner una letra,
	startDelay: 100, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: false, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '📕', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
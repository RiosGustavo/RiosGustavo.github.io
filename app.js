/// Menu Lateral

let menu_visible = false;

let menu = document.getElementById("nav");

const mostrarOcultarMenu = () => {
  if (menu_visible === false) {
    /// si el menu esta oculto
    menu.style.display = "block";
    menu_visible = true;
  } else {
    menu.style.display = "none";
    menu_visible = false;
  }
};

///oculto el menu una vez que selecciono
let links = document.querySelectorAll("nav a");
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    menu.style.display = "none";
    menu_visible = false;
  };
}

/// crear las barritas  dinamicas por su id

const crearBarra = (id_barra) => {
  for (let i = 0; i <= 16; i++) {
    let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
  }
};
/// seleccciono todas las barras generales para luego manipularlas

let java = document.getElementById("java");
crearBarra(java);

let javaspring = document.getElementById("javaspring");
crearBarra(javaspring);

let mysql = document.getElementById("mysql");
crearBarra(mysql);

let html = document.getElementById("html");
crearBarra(html);

let javascript = document.getElementById("javascript");
crearBarra(javascript);

let react = document.getElementById("react");
crearBarra(react);

let nodejs = document.getElementById("nodejs");
crearBarra(nodejs);

let scrum = document.getElementById("scrum");
crearBarra(scrum);

/// se guarda la cantida de barras que se van a ir pintando

/// utilizaremso un arreglo cada posicion corresponde a un elemento
/// se inicia en -1 ya que al principio no hay ninguna pintada
let contadores = [-1,-1,-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let bandera = false;

//función que aplica las animaciones de la habilidades

const efectoHabilidades = () => {
    const habilidades = document.getElementById("habilidades");
    const distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_skills >= 300 && !bandera) {
        bandera = true;
        const intervalJava = setInterval(() => {
            pintarBarra(java, 14, 0, intervalJava);
        }, 100);

        const intervalJavasspring = setInterval(() => {
            pintarBarra(javaspring, 14, 1, intervalJavasspring);
        }, 100);

        const intervalMysql = setInterval(() => {
            pintarBarra(mysql, 14, 2, intervalMysql);
        }, 100);

        const intervalHtml = setInterval(() => {
            pintarBarra(html, 14, 3, intervalHtml);
        }, 100);

        const intervalJavascript = setInterval(() => {
            pintarBarra(javascript, 13, 4, intervalJavascript);
        }, 100);

        const intervalReact = setInterval(() => {
            pintarBarra(react, 10, 5, intervalReact);
        }, 100);

        const intervalNodeJs = setInterval(() => {
            pintarBarra(nodejs, 10, 6, intervalNodeJs);
        }, 100);

        const IntervalScrum = setInterval(() => {
            pintarBarra(scrum, 8, 7, IntervalScrum);
        }, 100);
    }
}

const pintarBarra = (id_barra, cantidad, indice, interval) => {
    contadores[indice]++;
    const x = contadores[indice];
    if (x < cantidad) {
        const elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    } else {
        clearInterval(interval);
    }
}


window.onscroll = () => {
    efectoHabilidades();
}


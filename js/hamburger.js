import {temporizador} from "./temporizador.js";

/***********************Botón 1 ----Menú*************************************** */

const d = document,
  $menu = d.getElementById("menu"),  
  $boton = d.getElementById("boton");

$boton.addEventListener("click", () => {
  $boton.classList.toggle("botonActivado");
  $menu.classList.toggle("cerrado");
});

/**************************Botón 2 -----Control scroll************************************************************** */

const $boton2=d.getElementById("boton2");

window.addEventListener("scroll",()=>{
  if(window.scrollY>=800){
    $boton2.classList.remove("oculto");
    
  }else{
    $boton2.classList.add("oculto");
  }
})
$boton2.addEventListener("click",()=>{
    window.scrollTo(0,0);
})



/**********************************************************AUDIOS Y RELOJ*********************** */ 

const $audio = d.getElementById("beep"),
  $start = d.getElementById("Start"),
  $stop = d.getElementById("Stop"),
  $startAlarm = d.getElementById("StartAlarm"),
  $stopAlarm = d.getElementById("StopAlarm"),
  $time = d.getElementById("time");

let reloj = "";

$start.addEventListener("click", () => {
  reloj = setInterval(() => {
    let fecha = new Date();
    $time.innerHTML = `${
      fecha.getHours() < 10 ? "0" + fecha.getHours() : fecha.getHours()
    }:${
      fecha.getMinutes() < 10 ? "0" + fecha.getMinutes() : fecha.getMinutes()
    }:${
      fecha.getSeconds() < 10 ? "0" + fecha.getSeconds() : fecha.getSeconds()
    }`;
    $start.setAttribute("disabled", "true");
    $start.classList.add("activo");
  }, 1000);
});

$stop.addEventListener("click", () => {
  clearInterval(reloj);
  $start.removeAttribute("disabled");
  $start.classList.remove("activo");
  $time.innerHTML=`Stop`;
});

$startAlarm.addEventListener("click", () => {
  $audio.play();
  $startAlarm.setAttribute("disabled", "true");
  $startAlarm.classList.add("activo");
});
$stopAlarm.addEventListener("click", () => {
  $audio.pause();
  $startAlarm.removeAttribute("disabled");
  $startAlarm.classList.remove("activo");
});
/**************************fin reloj*********************** */

const $ball = d.getElementById("ball"),
$pizarra=d.getElementById("pizarra"),
  MAX_WIDTH = $pizarra.getBoundingClientRect().width - $ball.getBoundingClientRect().width,
  MIN_WIDTH = 0,
  MAX_HEIGHT = $pizarra.getBoundingClientRect().height - $ball.getBoundingClientRect().height,
  MIN_HEIGHT = 0;
let posx = 0,
  posy = 0;
/*************control pelota ************************************************************ */
d.addEventListener("keydown", (e) => {
 
  if (e.key === "ArrowRight") {
    e.preventDefault();
    if (posx < MAX_WIDTH) {
      posx += 10;
      $ball.style.setProperty("transform", `translate(${posx}px,${posy}px)`);
    }else{
      alert($ball.style.getProperty("width"));
    }
  }
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    if (posx > MIN_WIDTH) {
      posx -= 10;
      $ball.style.setProperty("transform", `translate(${posx}px,${posy}px)`);
    }
  }
  if (e.key === "ArrowDown") {
    e.preventDefault();
    if (posy < MAX_HEIGHT) {
      posy += 10;
      $ball.style.setProperty("transform", `translate(${posx}px,${posy}px)`);
    }
  }
  if (e.key === "ArrowUp") {
    e.preventDefault();
    if (posy > MIN_HEIGHT) {
      posy -= 10;
      $ball.style.setProperty("transform", `translate(${posx}px,${posy}px)`);
    }
  }
  if (e.altKey && e.key === "a") {
    alert("esto es una alerta");
  }
  if (e.altKey && e.key === "c") {
    confirm("Esto es un confirm...");
  }
  if (e.altKey && e.key === "p") {
    prompt("Esto es un prompt!!");
  }
});
/***********************cuenta atras************************************* */

d.addEventListener("DOMContentLoaded", temporizador("countdown","txt-countdown",'2023-1-14 8:0:0',"El programador ninja les desea ¡¡¡¡¡SUERTE EN LOS EXÁMENES!!!!"));
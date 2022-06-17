import {temporizador} from "./temporizador.js";
import {modoOscuro} from "./darkTheme.js";
import responsiveMedia from "./responsives.js";
import {nueva_ventana,cerrar} from "./responsiveTester.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import connStatus from "./connectionStatus.js";
import {muestraWebcam,detieneWebcam} from "./webcam.js";
import gioLocalizacion from "./glocalizacion.js";

/***********************Botón 1 ----Menú*************************************** */

const d = document,
w=window,
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
d.addEventListener("DOMContentLoaded",()=>{
  
})
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
/***********************cuenta atras y reposonsible responsive************************************* */

d.addEventListener("DOMContentLoaded",()=>{
  temporizador("countdown","txt-countdown",'2023-1-1 0:0',"El programador ninja les desea ¡¡¡FELIZ AÑO NUEVO!!!");
  responsiveMedia("youtube","(min-width:1024px)",`<a href="https://www.youtube.com/embed/5k2DWMRTXMM" noopener noreferrer target="_blank">Ir al video</a>`,`<iframe width="600" height="350" src="https://www.youtube.com/embed/5k2DWMRTXMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  responsiveMedia("map","(min-width:1024px)",`<a href="https://goo.gl/maps/abYCiW65uprrBSLGA" noopener noreferrer target="_blank">Ir al mapa</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.6711244945695!2d2.017773615683429!3d41.31601760837904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49cf18b64c017%3A0x6fc52cfd5c30c223!2sAyuntamiento%20de%20Viladecans!5e0!3m2!1ses!2ses!4v1655286803598!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
 gioLocalizacion('geoResult');

}) 
/******************modo oscuro************************************************** */

 modoOscuro(".dark-theme-btn","dark-mode");

 /**************************Responsive Tester************************************************************************* */


 const $uri=d.getElementById("uri-web"),
 $ancho=d.getElementById("res-x"),
 $alto=d.getElementById("res-y");


 d.addEventListener("click",(e)=>{
 
  e.preventDefault;
   if(e.target.id==="btn-probe"){
    console.log(`uri:${$uri.value}<br>
    ancho: ${$ancho.value}<br>
    alto:${$alto.value}`);
    nueva_ventana(`${$uri.value}`,`${$ancho.value}`,`${$alto.value}`);
   }
   if(e.target.id==="btn-close"){
     cerrar();
   }
 })

 /*****************************DETECCION DISPOSITIVOS********** */
 d.addEventListener("DOMContentLoaded",userDeviceInfo("userA"));


 /****************************DETECCIÓN DE LA CONEXIÓN************************************************************* */
  connStatus("estado");
  /*****************************MOSTRAR LA WEBCAM********************************************** */
  
  d.addEventListener("click",(e)=>{
    if(e.target.id==="play"){
      muestraWebcam("webcamVideo");
    }
    if(e.target.id==="stop"){
      detieneWebcam("webcamVideo");
    }
    
  })

 

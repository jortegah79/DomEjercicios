const d = document;
const DIA = 60 * 60 * 24;
const HORA = 60 * 60;
const MINUTO = 60;
const SEGUNDO = 1000;

export let temporizador = ((contenedor, muestraTxt, fechaFinal, mensaje) => {
  //constantes
  let fechaFin = new Date(fechaFinal).getTime();
  let txtResActual = d.getElementById(contenedor);
  let txtMensaje = d.getElementById(muestraTxt);
  let tiActual;

  setInterval(() => {
   
    let hoy = new Date().getTime();
    tiActual = tiempo(fechaFin - hoy, SEGUNDO);
    let dias = tiempo(tiActual, DIA);
    let horas = tiempo(resto(tiActual, DIA), HORA);
    let minutos = tiempo(resto(tiActual, HORA), MINUTO);
    let segundos = tiempo(resto(tiActual, MINUTO), 1);
    txtResActual.innerHTML = `${dias} dias ${horas} horas ${minutos} minutos y ${segundos} segundos <BR>para ${new Date(fechaFinal).toLocaleDateString()}  ${new Date(fechaFinal).toLocaleTimeString()} `;
    if (dias === 0 && horas === 0 && minutos === 0 && segundos === 0) {
      txtMensaje.innerHTML = `${mensaje}`;
    }
  }, 1000);

});

export let contador = ((muestra_dias, fechaInicial,caja,button_del) => {
  
  d.getElementById(caja).style.display="none";
  d.getElementById(button_del).style.display="block";
   let fechaInicio = new Date(fechaInicial).getTime();
  let txtActual = d.getElementById(muestra_dias);
  let tiActual;
   let terminar;
   terminar= setInterval(() => {
    
    let hoy = new Date().getTime();
    tiActual = tiempo(hoy - fechaInicio, SEGUNDO);
    let dias = tiempo(tiActual, DIA);
    txtActual.innerHTML = `${dias} dias <BR>desde  ${new Date(fechaInicial).toLocaleDateString()} hasta hoy.`;
    console.log("actua");
    d.addEventListener("click",(e)=>{
      if(e.target.id==="detener-fecha-inicial"){
        clearInterval(terminar);
      }
      });
  }, 1000);

});


let tiempo = ((valorTiempo, divisor) => {
  if (valorTiempo === 0) return 0;
  return Math.floor(valorTiempo / divisor);
});
let resto = ((valorTiempo, divisor) => {
  return valorTiempo % divisor;
});

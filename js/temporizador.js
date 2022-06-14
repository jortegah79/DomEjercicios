const d=document;

export let temporizador=((contenedor,muestraTxt,fechaFinal,mensaje)=>{
//constantes
let fechaFin=new Date(fechaFinal).getTime();
let txtResActual=d.getElementById(contenedor);
let txtMensaje=d.getElementById(muestraTxt);
let tiActual;
const DIA=60*60*24;
const HORA=60*60;
const MINUTO=60;
const SEGUNDO=1000;
setInterval(()=>{
    let hoy=new Date().getTime();
      tiActual=tiempo(fechaFin-hoy,SEGUNDO);
      let dias=tiempo(tiActual,DIA);
      let horas=tiempo(resto(tiActual,DIA),HORA);
      let minutos=tiempo(resto(tiActual,HORA),MINUTO);
      let segundos=tiempo(resto(tiActual,MINUTO),1);
      txtResActual.innerHTML=`${dias} dias ${horas} horas ${minutos} minutos y ${segundos} segundos <BR>para ${new Date(fechaFinal).toLocaleDateString()}  ${new Date(fechaFinal).toLocaleTimeString()} `;
      if(dias===0 &&horas===0 && minutos===0 && segundos===0){
        txtMensaje.innerHTML=`${mensaje}`;
      }      
},1000);
});

let tiempo= ((valorTiempo,divisor)=>{
          if(valorTiempo===0)return 0;
  return Math.floor(valorTiempo/divisor);
});
let resto=((valorTiempo,divisor)=>{
  return valorTiempo%divisor;  
});
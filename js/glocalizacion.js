const n=navigator,
w=window,
d=document;

export default function gioLocalizacion(id){
   const     $div=d.getElementById(id);
    n.geolocation.getCurrentPosition((position)=>{
      $div.innerHTML=`latitud:${position.coords.latitude}<br/>
      longitud:${position.coords.longitude}<br/>
      acuracy:${position.coords.accuracy}<br/>
      <a href="https://www.google.com/maps/@${position.coords.latitude}.${position.coords.longitud},18Z" target="_blank" noopener noreferrer>Ir a Google Maps.</a>`;
},(e)=>{

    $div.innerHTML=`<h3>Error:${e.code}.-${e.message}</h3>`;
},{enableHighAccuracy:true,timeout:5000,maximunAge:0})
};
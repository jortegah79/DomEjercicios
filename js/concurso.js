const d=document;

export default function concursoLng(id,clase,idResultado){
const $boton=d.getElementById(id);
const $lista=d.querySelectorAll(clase);
const $resultado=d.getElementById(idResultado);
d.addEventListener("click",(e)=>{
   if(e.target.id===id){
    let indice=Math.floor(Math.random()*($lista.length-1));   
    $resultado.innerHTML=`El ganador es ...  <b>${$lista[indice].children[0].textContent}</b>`;
};
})
}

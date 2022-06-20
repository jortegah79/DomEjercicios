const d=document,
w=window,
n=navigator;

export default function handleText(clase){

  let carta=d.querySelectorAll(clase);
    d.addEventListener("keyup",(e)=>{         
    if(e.key==="Escape")console.log(e.target.value);
    carta.forEach(x=>{
    if(!x.textContent.toLowerCase().includes(e.target.value.toLowerCase())){
         x.classList.add("ocultado");
   }else{
    x.classList.remove("ocultado");
   }
   })
})}

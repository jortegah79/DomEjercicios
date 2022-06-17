const n = navigator,
  w = window,
  d = document;
  

export default function connStatus(id) {
  const isOnline = () => {
  let $el=d.getElementById(id);


 if(n.onLine){
  $el.classList.add("online");
  $el.classList.remove("offline");
   $el.textContent="CONEXIÓN RESTABLECIDA";
 }else{
  $el.classList.add("offline");
  $el.classList.remove("online");
   $el.textContent="CONEXIÓN PERDIDA";
}
setTimeout(()=>{
$el.classList.remove("online");
$el.classList.remove("offline");
$el.textContent="";
},3000);
}  


  w.addEventListener("online", (e) => isOnline());
  w.addEventListener("offline", (e) => isOnline());
}

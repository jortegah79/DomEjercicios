const w=window;
let ventana=null;
export  function nueva_ventana(uri,ancho,alto){
 
 ventana= window.open(uri, "Finestra filla", `left=200,top=100,width=${ancho},height=${alto} `);
}
 export function cerrar(){
    if(ventana ===null){
        alert("algo no ha ido bien...");
    }else{
        ventana.close();
    }
 }
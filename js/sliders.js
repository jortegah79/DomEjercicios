const d=document;

export default function controlSlider(){
    const $diapos=d.querySelectorAll(".slider-slide"),
    $prev=d.querySelector(".slider-btns .prev"),
    $next=d.querySelector(".slider-btns .next");
   let indice=0;
       d.addEventListener("click",(e)=>{ 
       
        if(e.target===$prev){            
             e.preventDefault();          
            $diapos[indice].classList.remove("active");
            indice--;
            indice=indice<0?$diapos.length-1:indice;            
            $diapos[indice].classList.add("active");
        }
        if(e.target===$next){
            e.preventDefault();
            $diapos[indice].classList.remove("active");
            indice++;
            indice= indice>=$diapos.length? 0:indice;
            $diapos[indice].classList.add("active");
        }
    })
}
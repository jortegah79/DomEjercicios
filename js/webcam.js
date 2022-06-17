const w = window,
  d = document,
  n = navigator;
let localStream;
export  function muestraWebcam(id) {
  const $video = d.getElementById(id);
  
  n.mediaDevices.getUserMedia({audio: false,      
      video: { 
        width: 1280,
         height: 720 } })
    .then((StreamVideo) => {         
     localStream=StreamVideo;
      $video.srcObject=StreamVideo;
      
      $video.style.visibility="visible";
      $video.play();

     
    })
    .catch((e)=>{
      d.getElementById("error_webcam").innerHTML=`Ha habido un problema <b>Pero muy grande"`;
    });
   
   }
  
  export function detieneWebcam(id){
    const $video = d.getElementById(id);
    if(localStream.active){
  let track = localStream.getTracks()[0]; 
  track.stop();
$video.src="";
 }
  }
 
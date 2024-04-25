const adelante = document.getElementById('adelante');
const atras    = document.getElementById('atras');
const v1       = document.getElementById('video1');
const v2       = document.getElementById('video2');
const v3       = document.getElementById('video3');
const arrayVideo = [v1,v2,v3]
let eleccion = 0;

const cambiar = (arrayVideo,eleccion)=>{
    for (let i = 0; i < arrayVideo.length; i++) {
        if (i==eleccion) {
            arrayVideo[i].classList.value = 'video videoA'
        }
        else{
            arrayVideo[i].classList.value = 'video'
        }
    }
}
        
atras.addEventListener('click',()=>{
    eleccion = eleccion-1;
    if(eleccion<0){eleccion=arrayVideo.length-1}
    cambiar(arrayVideo,eleccion);
})
adelante.addEventListener('click',()=>{
    eleccion = eleccion+1;
    if(eleccion>=arrayVideo.length){eleccion=0}
    cambiar(arrayVideo,eleccion);
})  
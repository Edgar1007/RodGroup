const CCgrande = document.querySelector(".med");
const CCchico = document.querySelector(".med2");
const anterior = document.getElementById("anteriorCC");
const siguiente = document.getElementById("siguienteCC");
const Im1       = document.getElementById('Imc1');
const Im2       = document.getElementById('Imc2');
const Im3       = document.getElementById('Imc3');
const Im4       = document.getElementById('Imc4');
const Im5       = document.getElementById('Imc5');
const Im6       = document.getElementById('Imc6');
const Im7       = document.getElementById('Imc7');
const Im8       = document.getElementById('Imc8');
const Im9       = document.getElementById('Imc9');
const arrayImagesS = [Im1,Im2,Im3,Im4,Im5,Im6,Im7,Im8,Im9]
let BI = 0;
let BS = 6;
let posicionCC = 0;
let positionArray = 0;
let posicionCCC = 0;
let flagOne = 0;
let flagTwo = 0;

siguiente.addEventListener("click", () => {
    if (posicionCC > -(CCgrande.children.length - 1) * 100) {
        posicionCC -= 100;
        CCgrande.style.transform = `translateX(${posicionCC}%)`;
    }
    //========Para colocar el margen de color alrededor de la imagen miniatura=======
    positionArray += 1;
    if(positionArray>=arrayImagesS.length){
        positionArray=arrayImagesS.length-1;
        flagOne = 1;
    }
    cambiaSelector(positionArray)
    //==============================================================================
    //========Para controlar el dezplazamiento del carrusel pequeno=================
    if(positionArray>BS && positionArray<=arrayImagesS.length-1){
        if(flagOne!=1){
            BI = BI+1; //mueve el limite inferior de los bordes en turno
            BS = BS+1; //mueve el limite superior de los bordes en turno
            mueveCarruselChico('ASC');
            flagTwo=0;
        }
    }
    //==============================================================================
});

anterior.addEventListener("click", () => {
    if (posicionCC < 0) {
        posicionCC += 100;
        CCgrande.style.transform = `translateX(${posicionCC}%)`;
    }
    //========Para colocar el margen de color alrededor de la imagen miniatura=======
    positionArray -= 1;
    if(positionArray<0){
        positionArray=0;
        flagTwo=1;
    }
    cambiaSelector(positionArray)
    //==============================================================================
    //========Para controlar el dezplazamiento del carrusel pequeno=================
    if(positionArray<BI && positionArray>=0){
        if(flagTwo!=1){
            BI = BI-1; //mueve el limite inferior de los bordes en turno
            BS = BS-1; //mueve el limite superior de los bordes en turno
            mueveCarruselChico('DESC')
            flagOne=0;
        }
    }
    //==============================================================================
});

const cambiaSelector=(positionArray)=>{
    for (let i = 0; i < arrayImagesS.length; i++) {
        if (i==positionArray) {
            arrayImagesS[i].classList.value = 'imgChica selected'
        }
        else{
            arrayImagesS[i].classList.value = 'imgChica'
        }
    }
}
const mueveCarruselChico=(indicador)=>{
    if(indicador=='ASC'){
        if (posicionCCC > -(CCchico.children.length - 1) * 14.28) {
            posicionCCC -= 14.28;
            CCchico.style.transform = `translateX(${posicionCCC}%)`;
        }
    }
    if(indicador=='DESC'){
        if (posicionCCC < 0) {
            posicionCCC += 14.28;
            CCchico.style.transform = `translateX(${posicionCCC}%)`;
        }
    }
}
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const milesimos = document.querySelector('#milesimos')
const start = document.querySelector('#start')
const pausa = document.querySelector('#pausa')
const resume = document.querySelector('#resume')
const reset = document.querySelector('#reset')

let Interval
let min = 0
let seg = 0
let mile = 0
let pausado = false


start.addEventListener('click', startTimer)
pausa.addEventListener('click', pausaTempo)
resume.addEventListener('click', resumir)
reset.addEventListener('click', resetarTempo)

function startTimer(){

    Interval = setInterval(()=> {
        if(!pausado){
            mile +=10
        }
        if(mile === 1000){
            seg++
            mile = 0
        }
        if(seg === 60){
            min ++;
            seg = 0
        }
        minutos.textContent= formaTime(min)
        segundos.textContent= formaTime(seg)
        milesimos.textContent= formaMile(mile)

        }, 10)
        start.style.display ='none'
        pausa.style.display = 'block'
 
}
function resetarTempo(){
    clearInterval(Interval)
    min = 0
    seg = 0
    mile = 0

    minutos.textContent= '00'
        segundos.textContent= '00'
        milesimos.textContent= '000'

        start.style.display = 'block'
        pausa.style.display = 'none'
        resume.style.display = 'none'
}

function resumir(){
    pausado = false
    pausa.style.display = 'block'
    resume.style.display = 'none'
}

function pausaTempo(){
    pausado = true
    pausa.style.display ='none'
    resume.style.display ='block'
}


function formaTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formaMile(time){
    return time < 100 ? `${time}`.padstart(3, '0') : time;
}



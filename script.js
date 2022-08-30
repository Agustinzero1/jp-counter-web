// jp date 5/4/2021
const jpDate = new Date("April 05, 2021");

// creating today date
var today = new Date();

var pagina = document.getElementsByClassName("pagina")[0];

var counter = document.getElementsByClassName("num-frente")[0];
var counter_blur = document.getElementsByClassName("num-frente-blur")[0];

console.log( "today " + today.getDay() + "/" + today.getMonth() + "/" + today.getFullYear() );
console.log( "JP date " + jpDate.getDay() + "/" +  jpDate.getMonth() + "/" + jpDate.getFullYear() );

let difference = today.getTime() - jpDate.getTime() ;
let TotalDays = Math.floor(difference / (1000 * 3600 * 24));

console.log( "JP counter " + TotalDays);

var TotalDaysCalculated = 0;
var time = 1;
var duration = 300 //in milisecond
var speed_number = Math.ceil(TotalDays/duration);

tick();

// counter.textContent = TotalDays;


function tick()
{
    setTimeout(() => {
        if(TotalDaysCalculated < TotalDays){
            TotalDaysCalculated += speed_number
            counter.textContent = TotalDaysCalculated;
            counter_blur.textContent= TotalDaysCalculated;
            tack();
        }else{
            TotalDaysCalculated = TotalDays
            counter.textContent = TotalDaysCalculated;
            counter_blur.textContent= TotalDaysCalculated;
        }
    }, time);
}

function tack()
{
    setTimeout(() => {
        if(TotalDaysCalculated < TotalDays){
            TotalDaysCalculated += speed_number
            counter.textContent = TotalDaysCalculated;
            counter_blur.textContent= TotalDaysCalculated;
            tick();
        }else{
            TotalDaysCalculated = TotalDays
            counter.textContent = TotalDaysCalculated;
            counter_blur.textContent= TotalDaysCalculated;
        }
    }, time);
}

window.addEventListener("resize", (e)=>{
    if(window.innerHeight > window.innerWidth){
        pagina.style.setProperty("--rotate", "90deg");
    }else{
        pagina.style.setProperty("--rotate", "0deg");
    }
})

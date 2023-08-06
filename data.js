
// Vars used in the functions
var attemps = 0;
var text1 = '¡Hi! Im Miguel Ortiz Loaiza '
var text2 = 'Im a Full-stack Developer '


function home(){location.href = "#banner"}
function languaje(e = window.event){
    if(e.target.id == 'spanish'){
        console.log('español')
        text1 = '¡Hola! Soy Miguel Ortiz Loaiza '
        text2 = 'Soy desarrollador Full-stack '
        document.querySelector('#english').innerHTML = 'Inglés'; 
        document.querySelector('#spanish').innerHTML = 'Español'
    }
    else if(e.target.id == 'english'){
        document.querySelector('#name').innerHTML = '¡Hi! Im Miguel Ortiz Loaiza.'; 
        document.querySelector('#subtitle').innerHTML = 'Front-end Developer'
        document.querySelector('#english').innerHTML = 'English'; 
        document.querySelector('#spanish').innerHTML = 'Spanish'
        document.querySelector('#about-title').innerHTML = 'About me'
    }
}
function pomodore(){
    const tasks = [];let time = 0;let timer = null;let timeBreak = null;let current = null;
}
function calculator(){
    function setData(x){document.querySelector('#result').innerHTML = x};
    function clear(){document.querySelector('#result').innerHTML = ''};
    function calculate(){
        const data = eval(document.querySelector('#result').innerHTML);
        if(data == undefined){data = ''};
        document.querySelector('#result').innerHTML = data
    }
    function deleteLastDigit(){
        const data = document.querySelector('#result').innerHTML;
        data = Array.from(data); data.pop(); data = data.join("")
        document.querySelector('#result').innerHTML = data;
    }
    document.onclick = (e = window.event)=>{
        const key = e.target.value
        if(key >=0 || key <= 9){setData(key)}
        else if(key == '+' || key == '-' || key == '*' || key == '/'){setData(key)}
        else if(key == '='){calculate()}
        else if(key == 'C' || key == '<<'){(key == 'C')? clear():deleteLastDigit()}
    }
    document.onkeydown = (e = window.event)=>{
        const key = e.key; const key2 = e.code;
        if(key2 == 'Numpad0' || key2 == 'Digit0'){setData(0)}
        else if(key == 0 || key == 'Enter'){calculate()}
        else if(key > 0 || key <= 9){setData(key)}
        else if(key == '+' || key == '-' || key == '*' || key == '/' || key == '.'){setData(key)}
        else if(key == 'Delete' || key == 'Backspace'){(key== 'Delete') ? clear(): deleteLastDigit()}
    }
}


const typed = new Typed('.typed', {
    strings: [`<i id="name">${text1}</i>`, `<i id="name">${text2}</i>`],
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 80,
    loop: true,
    backDelay: 3000,
    contentType: 'html',
    showCursor: true,
})
function background(){
    
}
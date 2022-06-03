let xImageChange = document.querySelector('.xImageChange');
let rImageChange = document.querySelector('.rImageChange');
let tmrImageChange = document.querySelector('.tmrImageChange');
let luImageChange = document.querySelector('.luImageChange');

let btnChangeX = document.querySelector('.btnChangeX');
let btnChangeR = document.querySelector('.btnChangeR');
let btnChangeTMR = document.querySelector('.btnChangeTMR');
let btnChangeLu = document.querySelector('.btnChangeLu');

 function changeMeX(){
    if (xImageChange.style.display === 'none') {
        xImageChange.style.display = 'block';
        btnChangeX.innerHTML = 'Hidden';
    } else {
        xImageChange.style.display = 'none';
        btnChangeX.innerHTML = 'Show';
    }
    
}

function changeMeR(){
    if (rImageChange.style.display === 'none') {
        rImageChange.style.display = 'block';
        btnChangeR.innerHTML = 'Hidden';
    } else {
        rImageChange.style.display = 'none';
        btnChangeR.innerHTML = 'Show';
    }
}

function changeMeTMR(){
    if (btnChangeTMR.style.display === 'none') {
        btnChangeTMR.innerHTML = 'block';
    } else {
        btnChangeTMR.innerHTML = 'Show';
    }
}
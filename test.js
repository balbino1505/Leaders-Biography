let xImageChange = document.querySelector('.xImageChange');
let rImageChange = document.querySelector('.rImageChange');
let btnChangeX = document.querySelector('.btnChangeX');
let btnChangeR = document.querySelector('.btnChangeR');

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
let btnNumber = document.querySelector('.btnNumber');
let resultData = document.querySelector('.data');
let btnSubmit = document.querySelector('.btnSubmit');
let btn = document.querySelector('.btn')
let container = document.querySelector('.container');
let card = document.querySelector('.card');

btnNumber.addEventListener('click', event => {
    let btnNumberSelected = event.target.innerText;
    resultData.innerText = btnNumberSelected;
    if(btnNumberSelected > 0 || btnNumberSelected <=5){
        btn.addEventListener('click', () => {
            container.style.display ='none';
            card.style.display ='flex';
        
        });
    }


});



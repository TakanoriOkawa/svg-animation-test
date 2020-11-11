const btns = document.querySelectorAll('button'); 
const right = document.querySelector('#right-wheel');
const left = document.querySelector('#left-wheel');
const hat = document.querySelector('#hat');
const body = document.querySelector('#man-bike');

btns[0].addEventListener('click',() => {
    if(!right.classList.contains('run')){
        right.classList.add('run');
        left.classList.add('run');
        hat.classList.add('run');
        body.classList.add('run');
        console.log('click1');
    }

});

btns[1].addEventListener('click',() => {
    if(right.classList.contains('run')){
        right.classList.add('broken');
        left.classList.add('broken');
        hat.classList.add('broken');
        body.classList.add('broken');
        console.log('click2');
    }

});

btns[2].addEventListener('click',() => {
    if(right.classList.contains('run')){
        right.classList.remove('run');
        left.classList.remove('run');
        hat.classList.remove('run');
        body.classList.remove('run');

        right.classList.remove('broken');
        left.classList.remove('broken');
        hat.classList.remove('broken');
        body.classList.remove('broken');
        console.log('click3');
    }
});
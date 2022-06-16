const left = document.querySelector('.left');
const right = document.querySelector('.right');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const g1 = document.querySelector('.g1');
const g2 = document.querySelector('.g2');
const g3 = document.querySelector('.g3');

//event listeners
left.addEventListener('click', leftFill);
right.addEventListener('click', rightFill);

//circle change on slide to right
function leftFill(){
    if(one.src.match('circle-fill.svg') && two.src.match('circle.svg') && three.src.match('circle.svg')){
        one.src = 'circle.svg';
        three.src = 'circle-fill.svg'
        g1.style.opacity = '0';
        g3.style.opacity = '1';
    }else if(one.src.match('circle.svg') && two.src.match('circle.svg') && three.src.match('circle-fill.svg')){
        three.src = 'circle.svg';
        two.src = 'circle-fill.svg';
        g3.style.opacity = '0';
        g2.style.opacity = '1';
    }else if(one.src.match('circle.svg') && two.src.match('circle-fill.svg') && three.src.match('circle.svg')){
        two.src = 'circle.svg';
        one.src = 'circle-fill.svg';
        g2.style.opacity = '0';
        g1.style.opacity = '1';
    } 
};

//circle change on slide to right
function rightFill(){
    if(one.src.match('circle-fill.svg') && two.src.match('circle.svg') && three.src.match('circle.svg')){
        one.src = 'circle.svg';
        two.src = 'circle-fill.svg'
        g1.style.opacity = '0';
        g2.style.opacity = '1';
    }else if(one.src.match('circle.svg') && two.src.match('circle-fill.svg') && three.src.match('circle.svg')){
        two.src = 'circle.svg';
        three.src = 'circle-fill.svg';
        g2.style.opacity = '0';
        g3.style.opacity = '1';
    }else if(one.src.match('circle.svg') && two.src.match('circle.svg') && three.src.match('circle-fill.svg')){
        three.src = 'circle.svg';
        one.src = 'circle-fill.svg';
        g3.style.opacity = '0';
        g1.style.opacity = '1';
    } 
};

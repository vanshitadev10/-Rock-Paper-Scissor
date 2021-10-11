// Start Button


const rule = document.querySelector('.heading').lastElementChild;
const rps = document.querySelector('.rps');
const start = document.querySelector('.start');
const text = document.querySelector('.text');
const game = document.querySelector('.game');
const overall = document.querySelector('.overall');
const over_start = document.querySelector('.over_start');
const back = document.body;



overall.style.display = 'none';

start.addEventListener('click', () => {
    localStorage.setItem('matches', text.value);
    rps.style.display = 'none';
    rule.style.display = 'none';
    game.style.display = 'block';
    back.style.backgroundColor = '#002626';
})


over_start.addEventListener('click', () => {
    rps.style.display = 'flex';
    rule.style.display = 'none';
    game.style.display = 'none';
    overall.style.display = 'none';
    back.style.backgroundColor = '#023b3a';
    count = 0;
    user = 0;
    computer = 0;

    result.firstElementChild.innerHTML = `Let's Start`;
    result.lastElementChild.innerHTML = `Choose any one of the below images`;
    user_res.innerHTML = `0`;
    comp_res.innerHTML = `0`;
    comp.lastElementChild.style.visibility = "hidden";
    play.lastElementChild.style.visibility = "hidden";
    rule.style.display = 'block';
})


const score = document.querySelector('.num');
localStorage.setItem('score', score.innerHTML);





// Images

const opt = document.querySelector('.options');
const img1 = opt.firstChild.nextSibling;
const img2 = opt.firstChild.nextSibling.nextSibling.nextSibling;
const img3 = opt.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;

const arr = ['paper', 'rock', 'scissor'];

const comp = game.firstElementChild.firstElementChild;
const play = game.firstElementChild.lastElementChild;

const game_img2 = document.querySelector('.game_img2');

var count = 0;
var computer = 0;
var user = 0;
const comp_res = document.querySelector('.comp');
const user_res = document.querySelector('.user');

const result = document.querySelector('.result');

const over = document.querySelector('.over');
const over_img = document.querySelector('.over_img');







img1.addEventListener('click', () => {
    comp.lastElementChild.src = `Images/${arr[Math.floor(3 * Math.random())]}.jpg`;
    comp.lastElementChild.style.visibility = "visible";

    play.lastElementChild.src = `Images/${arr[0]}.jpg`
    play.lastElementChild.style.visibility = "visible";



    const mediaQuery = window.matchMedia('(max-width : 450px)');

    if (mediaQuery.matches) {
        game_img2.style.width = '95%';
    }
    else {
        game_img2.style.width = '83%';
    }


    count++;
    result.firstElementChild.innerHTML = `Match: ${count}`;

    if (comp.lastElementChild.getAttribute('src')[7] == 'r') {
        user += 100;
        user_res.innerHTML = `${user}`;
    }
    else if (comp.lastElementChild.getAttribute('src')[7] == 's') {
        computer += 100;
        comp_res.innerHTML = `${computer}`;
    }




    if (user > computer) {
        result.lastElementChild.innerHTML = 'Woo-hoo! You Are Winning';
    }
    else if (computer > user) {
        result.lastElementChild.innerHTML = 'Come On! You Are Loosing';
    }
    else if (user == computer) {
        result.lastElementChild.innerHTML = 'Ahh! The Match Is Going Draw';
    }




    if (count == localStorage.getItem('matches')) {
        setTimeout(() => {
            game.style.display = 'none';
            overall.style.display = 'block';
            back.style.backgroundColor = '#023b3a';

            if (user > localStorage.getItem('score')) {
                localStorage.setItem('score', user);
                score.innerHTML = `${localStorage.getItem('score')}`;
            }
        }, 500)
    }



    if (user > computer) {
        over.innerHTML = 'You WON The Game';
        over_img.src = 'Images/smile.png';
    }
    else if (computer > user) {
        over.innerHTML = 'You LOST The Game';
        over_img.src = 'Images/sad.png';
    }
    else if (user == computer) {
        over.innerHTML = 'The Game Went Draw';
        over_img.src = 'Images/sad.png';
    }
})





img2.addEventListener('click', () => {
    comp.lastElementChild.src = `Images/${arr[Math.floor(3 * Math.random())]}.jpg`;
    comp.lastElementChild.style.visibility = "visible";

    play.lastElementChild.src = `Images/${arr[1]}.jpg`
    play.lastElementChild.style.visibility = "visible";



    const mediaQuery = window.matchMedia('(max-width : 450px)');

    if (mediaQuery.matches) {
        game_img2.style.width = '95%';
    }
    else {
        game_img2.style.width = '92.4%';
    }


    count++;
    result.firstElementChild.innerHTML = `Match: ${count}`;

    if (comp.lastElementChild.getAttribute('src')[7] == 's') {
        user += 100;
        user_res.innerHTML = `${user}`;
    }
    else if (comp.lastElementChild.getAttribute('src')[7] == 'p') {
        computer += 100;
        comp_res.innerHTML = `${computer}`;
    }



    if (user > computer) {
        result.lastElementChild.innerHTML = 'Woo-hoo! You Are Winning';
    }
    else if (computer > user) {
        result.lastElementChild.innerHTML = 'Come On! You Are Loosing';
    }
    else if (user == computer) {
        result.lastElementChild.innerHTML = 'Ahh! The Match Is Going Draw';
    }




    if (count == localStorage.getItem('matches')) {
        setTimeout(() => {
            game.style.display = 'none';
            overall.style.display = 'block';
            back.style.backgroundColor = '#023b3a';


            if (user > localStorage.getItem('score')) {
                localStorage.setItem('score', user);
                score.innerHTML = `${localStorage.getItem('score')}`;
            }
        }, 500)
    }


    if (user > computer) {
        over.innerHTML = 'You WON The Game';
        over_img.src = 'Images/smile.png';
    }
    else if (computer > user) {
        over.innerHTML = 'You LOST The Game';
        over_img.src = 'Images/sad.png';
    }
    else if (user == computer) {
        over.innerHTML = 'The Game Went Draw';
        over_img.src = 'Images/sad.png';
    }
})





img3.addEventListener('click', () => {
    comp.lastElementChild.src = `Images/${arr[Math.floor(3 * Math.random())]}.jpg`;
    comp.lastElementChild.style.visibility = "visible";

    play.lastElementChild.src = `Images/${arr[2]}.jpg`
    play.lastElementChild.style.visibility = "visible";




    const mediaQuery = window.matchMedia('(max-width : 450px)');

    if (mediaQuery.matches) {
        game_img2.style.width = '95%';
    }
    else {
        game_img2.style.width = '93%';
    }


    count++;
    result.firstElementChild.innerHTML = `Match: ${count}`;

    if (comp.lastElementChild.getAttribute('src')[7] == 'p') {
        user += 100;
        user_res.innerHTML = `${user}`;
    }
    else if (comp.lastElementChild.getAttribute('src')[7] == 'r') {
        computer += 100;
        comp_res.innerHTML = `${computer}`;
    }




    if (user > computer) {
        result.lastElementChild.innerHTML = 'Woo-hoo! You Are Winning';
    }
    else if (computer > user) {
        result.lastElementChild.innerHTML = 'Come On! You Are Loosing';
    }
    else if (user == computer) {
        result.lastElementChild.innerHTML = 'Ahh! The Match Is Going Draw';
    }




    if (count == localStorage.getItem('matches')) {
        setTimeout(() => {
            game.style.display = 'none';
            overall.style.display = 'block';
            back.style.backgroundColor = '#023b3a';


            if (user > localStorage.getItem('score')) {
                localStorage.setItem('score', user);
                score.innerHTML = `${localStorage.getItem('score')}`;
            }
        }, 500)
    }




    if (user > computer) {
        over.innerHTML = 'You WON The Game';
        over_img.src = 'Images/smile.png';
    }
    else if (computer > user) {
        over.innerHTML = 'You LOST The Game';
        over_img.src = 'Images/sad.png';
    }
    else if (user == computer) {
        over.innerHTML = 'The Game Went Draw';
        over_img.src = 'Images/sad.png';
    }
})

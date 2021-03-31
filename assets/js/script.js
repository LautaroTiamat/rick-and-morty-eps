const end = new Date('06/20/2021 00:00 AM');
const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour * 24;
let timer;

const showRemaining = () => {
    let now = new Date();
    let distance = end - now;
    if(distance < 0){
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'En camino!';
        return;
    }
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);
    document.getElementById('countdown').innerHTML = days + ' dias, ';
    document.getElementById('countdown').innerHTML += hours + ' horas, ';
    document.getElementById('countdown').innerHTML += minutes + ' minutos y ';
    document.getElementById('countdown').innerHTML += seconds + ' segundos';
}

timer = setInterval(showRemaining, 1000);
let time = 0;
const audio = new Audio("./tada.wav")

function hours(number) {
    let hours = number;
    document.getElementById('hours').innerHTML = ('00' + String(hours)).slice(-2);
}

function minutes(number) {
    let minutes = number;
    document.getElementById('minutes').innerHTML = ('00' + String(minutes)).slice(-2);
}

function select_time() {
    let select_hours = document.getElementById('select_hours').value
    let select_minutes = document.getElementById('select_minutes').value
    hours(select_hours);
    minutes(select_minutes);
}

function timer() {
    time = parseInt(document.getElementById('hours').textContent) * 3600 + parseInt(document.getElementById('minutes').textContent * 60)
    document.getElementById('hours').innerHTML = '??';
    document.getElementById('minutes').innerHTML = '??';
    document.getElementById('seconds').innerHTML = '??';
    const timer = setInterval(() => {
        time--
        if (time === 0) {
            audio.play()
            alert('終了です！\nお疲れ様でした。')
            clearInterval(timer)
        }
    }, 1000)
}
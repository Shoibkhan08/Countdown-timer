function startCountdown() {
    const targetDate = new Date(document.getElementById('datetime').value).getTime();

    const countdownInterval = setInterval(function() {
        const currentDate = new Date().getTime();
        const timeRemaining = targetDate - currentDate;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = formatTime(days);
        document.getElementById('hours').innerText = formatTime(hours);
        document.getElementById('minutes').innerText = formatTime(minutes);
        document.getElementById('seconds').innerText = formatTime(seconds);

        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown-display').innerHTML = '<div id="expired-message">Time has expired!</div>';
        }
    }, 1000);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

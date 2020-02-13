let attempt = 3;
let prize1 = 100;
let prize2 = 50;
let prize3 = 25;
const MAX1 = 9;
const MAX2 = 13;
const PRIZERANGE = 2;
const NUM1 = 3;
const NUM2 = 2;
const NUM3 = 1
const MAXWIN = 175;


if (confirm('Do you want to play a game?') === false) {
    alert('You did not become a billionaire, but can.');
} else {
    let totalPrize = 0;
    let curPrize = 200;
    let randNumber = Math.floor(Math.random() * MAX1);   
    do {
        curPrize = curPrize / PRIZERANGE;
        let num = parseInt(prompt('attempts: ' + attempt + '\n' +
            'Total prize: ' + totalPrize + '\n' +
            'Pssible prize on current attempt is: ' + curPrize + ' $' + '\n' +
            'Choose a roulette pocket number from 0 to 8'));
        if (num === randNumber) {
            if (attempt === NUM1) {
                totalPrize = totalPrize + prize1;
            } else if (attempt === NUM2) {
                totalPrize = totalPrize + prize2;
            } else if (attempt === NUM3) {
                totalPrize = totalPrize + prize3;
            }
            attempt = 0;
        } else if (num !== randNumber) {
            totalPrize = totalPrize + 0;
            attempt--;
        }
    } while (attempt > 0);

    if (totalPrize === 0) {
        alert('Thank you for your participation. Your prize is: ' + totalPrize + ' $')
        if (confirm('Do you want to try again?') === false) {
            alert('Goodbye');
        } else {
            window.location.reload(true);
        }
    } else if (totalPrize > 0) {
        if (confirm('Congratulation, you won! Your prize is: ' + totalPrize +
                ' $. Do you want to continue?') === false) {
            alert('Thank you for your participation. Your prize is: ' + totalPrize + ' $');
            window.location.reload(true);
        } else {
            let attempt = 3;
            let curPrize = 400;
            let randNumber = Math.floor(Math.random() * MAX2);
            do {
                curPrize = curPrize / PRIZERANGE;
                let num = parseInt(prompt('attempts: ' +
                    attempt + '\n' + 'Total prize: ' + totalPrize + '\n' +
                    'Pssible prize on current attempt is: ' + curPrize + ' $' + '\n' +
                    'Choose a roulette pocket number from 0 to 12'));
                if (num === randNumber) {
                    if (attempt === NUM1) {
                        totalPrize = totalPrize + prize1 * PRIZERANGE;
                    } else if (attempt === NUM2) {
                        totalPrize = totalPrize + prize2 * PRIZERANGE;
                    } else if (attempt === NUM3) {
                        totalPrize = totalPrize + prize3 * PRIZERANGE;
                    }
                    attempt = 0;
                } else if (num !== randNumber) {
                    totalPrize = totalPrize + 0;
                    attempt--;
                }
            } while (attempt > 0);

            if (totalPrize === MAXWIN) {
                alert('Thank you for your participation. Your prize is: ' + totalPrize + ' $')
                if (confirm('Do you want to try again?') === false) {
                    alert('Goodbye');
                } else {
                    window.location.reload(true);
                }
            } else if (totalPrize > MAXWIN) {
                alert('Congratulation, you won! Your prize is: ' + totalPrize + ' $');
                if (confirm('Do you want to try again?') === false) {
                    alert('Goodbye');
                } else {
                    window.location.reload(true);
                }
            }
        }
    }
}
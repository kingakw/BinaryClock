const hoursClock = document.querySelector('.hoursClock');
const minutesClock = document.querySelector('.minutesClock');
const secondsClock = document.querySelector('.secondsClock');

const setTime = () => {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();

    const hours = String(hour).padStart(2, '0');
    const minutes = String(minute).padStart(2, '0');
    const seconds = String(second).padStart(2, '0');

    hoursClock.textContent = hours;
    minutesClock.textContent = minutes;
    secondsClock.textContent = seconds;


    const hourFirstBinary = Number(hours.charAt(0)).toString(2);
    const hourSecondBinary = Number(hours.charAt(1)).toString(2);
    const minuteFirstBinary = Number(minutes.charAt(0)).toString(2);
    const minuteSecondBinary = Number(minutes.charAt(1)).toString(2);
    const secondFirstBinary = Number(seconds.charAt(0)).toString(2);
    const secondSecondBinary = Number(seconds.charAt(1)).toString(2);

    const hourFirst = document.querySelector('.hourFirst');
    const hourSecond = document.querySelector('.hourSecond');
    const minuteFirst = document.querySelector('.minuteFirst');
    const minuteSecond = document.querySelector('.minuteSecond');
    const secondFirst = document.querySelector('.secondFirst');
    const secondSecond = document.querySelector('.secondSecond');


    binaryDots = (binary, columnNr, dotNr) => {
      for (let i=0; i < dotNr; i++ ) {
        let el = dotNr - i - 1;

        if (binary.charAt(i) == 1) {
            columnNr.children[el].style.backgroundColor = "black";
        } else {
            columnNr.children[el].style.backgroundColor = "white";
        }
      }
    };

    setInterval(binaryDots(hourFirstBinary, hourFirst, 2), 1);
    setInterval(binaryDots(hourSecondBinary, hourSecond, 4), 1);
    setInterval(binaryDots(minuteFirstBinary, minuteFirst, 3), 10);
    setInterval(binaryDots(minuteSecondBinary, minuteSecond, 4), 10);
    setInterval(binaryDots(secondFirstBinary, secondFirst, 3), 100);
    setInterval(binaryDots(secondSecondBinary, secondSecond, 4), 100);
    
}

setTime();
setInterval(setTime, 100);



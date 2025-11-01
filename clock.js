setInterval(setClock, 1000)

const hourHand = document.querySelector('#thour');
const minuteHand = document.querySelector('#tminute');
const secondHand = document.querySelector('#tsecond');
const clock = document.querySelector('#clockbg');

function setClock() 
{
    const tdate = new Date();
    const secs = tdate.getSeconds() / 60;
    const mins = (secs + tdate.getMinutes()) / 60;
    const hrs = (mins + tdate.getHours()) / 12;
    const clr1 = tdate.getSeconds() * 10;
    const clr2 = tdate.getSeconds() * 20;
    setRotation(secondHand, secs);
    setRotation(minuteHand, mins);
    setRotation(hourHand, hrs);
    setClr1(clock,clr1);
    setClr2(clock,clr2);
}
function setClr1(e,c)
{
    e.style.setProperty('--bgclr1', c);
}
function setClr2(e,c)
{
    e.style.setProperty('--bgclr2', c);
}
function setRotation(e, c) 
{
    e.style.setProperty('--rotation', c * 360);
}

setClock()
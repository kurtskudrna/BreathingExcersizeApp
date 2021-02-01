const container = document.getElementById('container');
const instructions = document.getElementById('instructions');

const totalTime = 8000;
const breathTime = (totalTime / 2.5)
const breathOutTime = totalTime / 3.33;

function breathe() {
    instructions.innerText = 'Breathe';
    container.classList.remove('breatheOut')
    container.classList.add('breatheIn')
    setTimeout(() => {
        instructions.innerText = 'Hold';

        setTimeout(() => {
            instructions.innerText = 'Breathe Out';
            container.classList.remove('breatheIn')
            container.classList.add('breatheOut')
        }, breathOutTime)
    }, breathTime);
}

breathe();

setInterval(breathe, totalTime);
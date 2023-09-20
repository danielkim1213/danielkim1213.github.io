const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const number = '1234567890';
const special = '!@#$%^&*';

const alphabet = latin + number + special;

const fontSize = canvas.width/60;
const columns = 60;

const raindrop = [];

for(let x = 0; x < columns; x++)
{
    raindrop[x] = 1;
}

const draw = () => {

    context.fillStyle = 'rgba(0,0,0,0.05)';
    context.fillRect(0,0,canvas.width, canvas.height);
    
    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    for(let i = 0; i< raindrop.length; i++)
    {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize, raindrop[i]*fontSize);

        if(raindrop[i]*fontSize > canvas.height && Math.random() > 0.98)
        {
            raindrop[i] = 0;
        }
        raindrop[i]++;
    }
};

setInterval(draw, 36);

window.onresize = function(){ 
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
    fontSize = canvas.width/60;
    columns = 60;
}




const MOVE_AMOUNT = 10;
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

// Make smooth drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
// Make thicker line
ctx.lineWidth = MOVE_AMOUNT;

const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();

function handleKey(e) {
    if(e.key.includes('Arrow')) {
      e.preventDefault();
      draw({ key: e.key });
      
    }
  }

window.addEventListener('keydown', handleKey);


    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;

function draw({ key }) {
    console.log(key);
    // start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
    switch(key) {
        case "ArrowUp":
            y -= MOVE_AMOUNT;
            break;
        case "ArrowRight":
            x += MOVE_AMOUNT;
            break;
        case "ArrowDown":
            y += MOVE_AMOUNT;
            break;
        case "ArrowLeft":
            x -= MOVE_AMOUNT;
            break;
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke()
   
}



// clear or shake function
function clearCanvas() {
    canvas.classList.add("shake");
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener("animationend", function() {
      console.log("done the shake!");
      canvas.classList.remove("shake");
    },
    { once: true }
    );
  }

  shakebutton.addEventListener("click", clearCanvas);







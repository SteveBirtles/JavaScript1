let t = 0, w = 0, h = 0;

function fixSize() {
  w = window.innerWidth;
  h = window.innerHeight;
  const canvas = document.getElementById('rainbowCanvas');
  canvas.width = w;
  canvas.height = h;
}

function pageLoad() {

    window.addEventListener("resize", fixSize);
    fixSize();

    window.requestAnimationFrame(redraw);

}

function redraw() {

  t++;

  const canvas = document.getElementById('rainbowCanvas');
  const context = canvas.getContext('2d');

  context.textAlign = 'left';
  context.lineWidth = 1;
  context.setLineDash([1]);

  context.fillStyle = 'blue';
  context.beginPath();
  context.rect(0, 0, w, h);
  context.fill();

  context.strokeStyle = 'yellow';
  context.beginPath();
  context.rect(50, 50, w-100, h-100);
  context.stroke();

  context.fillStyle = 'red';
  context.font = '50px Arial';
  context.fillText("Wooo, graphics!", 100, 150);

  context.strokeStyle = 'white';
  context.strokeText("Wooo, graphics!", 100, 150);

  context.fillStyle = 'white';
  context.fillText("Wooooooooooooooooooooooooooooooooooooooooooooooooooo!!!", 100, 200, 800);

  context.fillStyle = 'purple';
  context.textAlign = 'center';
  context.fillText("In the middle", 500, 250);
  context.textAlign = 'right';
  context.fillText("ALRIGHTYTHEN", 900, 250, 150);

  context.lineWidth = 5;
  context.lineCap = 'round';
  context.beginPath();
  context.moveTo(100,300);
  context.lineTo(900,300);
  context.stroke();

  context.setLineDash([5, 10]);
  context.beginPath();
  context.moveTo(100,350);
  context.lineTo(900,350);
  context.stroke();

  context.fillStyle = 'limegreen';
  context.beginPath();
  context.arc(300, 550, 100, 0, 2*Math.PI);
  context.fill();

  context.strokeStyle = 'cyan';
  context.beginPath();
  context.ellipse(w/2, h/2, 200, 100, t/20, 0, Math.PI);
  context.stroke();

  window.requestAnimationFrame(redraw);

}

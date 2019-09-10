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

  for (let i = 0; i < w; i += w/64) {
      for (let j = 0; j < h; j += h/48) {
          context.fillStyle = `rgb(${t%255},${i%255},${j%255}`;
          context.beginPath();
          context.rect(i, j, w/64, h/48);
          context.fill();
      }
  }

  window.requestAnimationFrame(redraw);

}

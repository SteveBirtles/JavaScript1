let t = 0, w = 0, h = 0;

function rainbow(c) {
    c = Math.abs(c) % 6;
    if (c < 1) {
        return `rgb(255, ${255*c}, 0)`; // red -> yellow
    } if (c < 2) {
        return `rgb(${255*(2-c)}, 255, 0)`; // yellow -> green
    } if (c < 3) {
        return `rgb(0, 255, ${255*(c-2)})`; // green -> cyan
    } if (c < 4) {
        return `rgb(0, ${255*(4-c)}, 255)`; // cyan -> blue
    } if (c < 5) {
        return `rgb(${255*(c-4)}, 0, 255)`; // blue -> magenta
    } else {
        return `rgb(255, 0, ${255*(6-c)})`; // magenta -> red
    }
}

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
      context.fillStyle = rainbow(t/20 + Math.cos(12*i/w) + 8*j/h);
      context.beginPath();
      context.rect(i, j, w/64, h/48);
      context.fill();
    }
  }

  window.requestAnimationFrame(redraw);

}

function pageLoad() {

    const canvas = document.getElementById('rainbowCanvas');

    canvas.width = 1000;
    canvas.height = 750;

    const context = canvas.getContext('2d');

    context.fillStyle = 'blue';
    context.beginPath();
    context.rect(0, 0, 1000, 750);
    context.fill();

    context.strokeStyle = 'yellow';
    context.beginPath();
    context.rect(50, 50, 900, 650);
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
    context.ellipse(650, 500, 200, 100, Math.PI*0.1, 0, Math.PI);
    context.stroke();

}

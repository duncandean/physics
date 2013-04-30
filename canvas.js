var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(0, 0);
context.lineTo(300, 300);
context.moveTo(300, 0);
context.lineTo(0, 300);
context.moveTo(0, 0);
context.lineTo(300, 0);
context.moveTo(300, 0);
context.lineTo(300, 300);
context.moveTo(300, 300);
context.lineTo(0, 300);
context.moveTo(0, 300);
context.lineTo(0, 0);
context.stroke();

var amount = 20;
var myPath = new Path();

for (var i = 0; i < amount; i++){
    myPath.add(new Point(i/amount, 1) * view.size);
}

myPath.strokeColor = 'black';

function onFrame(event) {
    
    $('#times').html(parseInt(event.time));
}

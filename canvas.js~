var path = new Path();
var path2 = new Path();
var path3 = new Path();
var point1 = new Point(60, 60);
var point2 = new Point(200, 60);
var point3 = new Point(130, 180);
path.strokeColor = 'white';
path3.strokeColor = 'blue';

path.add(point1, point2, point3);
path2.add(new Point(30, 30), new Point(100, 30), new Point(65, 90));
path3.add(new Point(180, 80), new Point(240, 70), new Point(140, 140));
path.closed = 'true';
path2.closed = 'true';
path3.closed = 'true';
path2.strokeColor = 'red';
var destination = new Point(130, 270);


function onFrame(event){
    var vector = destination - path.position;
    if (vector.length < 5) {
        destination.y = destination.y*-1 + 350;
    }
    path.position += vector /15;
    path.rotate(3);
    path2.rotate(5);
    path3.rotate(7);
    
    
    
}

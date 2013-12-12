var ground = new Path();
            ground.strokeColor = 'white';
            ground.add(new Point(0, view.size.height), new Point(view.size.width, view.size.height));
            ground.strokeWidth = 5;
        
            var boy_head = new Path.Circle(new Point(60, view.size.height - 45), 5);
            boy_head.strokeColor = 'white';
            var boy_body = new Path(new Point(60, view.size.height - 40), new Point(60, view.size.height - 20), new Point(70, view.size.height), new Point(60, view.size.height - 20), new Point(50, view.size.height));
            boy_body.strokeColor = 'white';
            var boy_arms = new Path(new Point(50, view.size.height - 25), new Point(82, view.size.height - 40));
            boy_arms.strokeColor = 'white';
            
            var ball = new Path.Circle(new Point(80, view.size.height - 10), 10);
            ball.fillColor = 'red';
            ball.strokeColor = 'black';
            ball.strokeWidth = 3;
            var originalPosition = ball.position;
            
            
        

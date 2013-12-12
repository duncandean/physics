var start = false;
                    
            var building_height = 8;
            var building_left = new Point(0, 90);
            var building_corner = new Point(80, 90);
            var building_floor = new Point(80, view.size.height);
            var building = new Path(building_left, building_corner, building_floor);
            
            var pixelsPerMetre = (view.size.height - 90)/building_height;
            
            var gravity = 9.81;
            
            building.strokeColor = 'white';
            
            var boy_head = new Path.Circle(new Point(60, 45), 5);
            boy_head.strokeColor = 'white';
            var boy_body = new Path(new Point(60, 50), new Point(60, 70), new Point(70, 90), new Point(60, 70), new Point(50, 90));
            boy_body.strokeColor = 'white';
            var boy_arms = new Path(new Point(50, 65), new Point(82, 50));
            boy_arms.strokeColor = 'white';
            var ground = new Path(new Point(0, view.size.height), new Point(view.size.width, view.size.height));
            ground.strokeColor = 'white';
            ground.strokeWidth = 5;
            
            var ball = new Path.Circle(new Point(100, 75), 10);
            ball.fillColor = 'red';
            ball.strokeColor = 'black';
            ball.strokeWidth = 3;
            var originalPosition = ball.position;
            
            var count = 0;
            var initial_velocity = 0;
            var stone_velocity;
            
            
            $('#projectile2').click(function(e){e.preventDefault(); if (start === false){start = true;} else {start = false; ball.position = originalPosition; gravity = 9.81; final_velocity.content = ""; time.content = ""}});
            
            $('#projectile2_set_values').click(function(){
            
            if (isNaN(parseFloat($('#initial_velocity2').val())) === true) {}
            else if (isNaN(parseFloat($('#wall_height2').val())) === true) {}
            
            else {
                building_height = parseFloat($('#wall_height2').val());
                initial_velocity = parseFloat($('#initial_velocity2').val());
                stone_velocity = parseFloat($('#initial_velocity2').val());
                wall_height_text.content = building_height + " m";
                
                pixelsPerMetre = (view.size.height - 90)/building_height;
                viRef.content = "Vi: \n" + initial_velocity + " m/s";
            }
                
            
            
            });
            
            var wall_height_text = new PointText({
                point: [30, 160],
                fillColor: 'white',
                fontSize: 16
            });
            
            var final_velocity = new PointText({
                point: [view.size.width - 120, 40],
                fillColor: 'white',
                fontSize: 16
            });
            
             var time = new PointText({
                point: [view.size.width - 120, 80],
                fillColor: 'white',
                fontSize: 16
            });
            
             var viRef = new PointText({
                point: [5, 200],
                fillColor: 'white',
                fontSize: 16
            });
            
            function onFrame(event) {
            
                ball.fillColor.hue += 1;
                if (start) {
                    
                  if (gravity === 0){
                    initial_velocity = 0;
                  }
                  else {
                    if (isNaN(stone_velocity) === false){
                    initial_velocity = stone_velocity
                    }
                    var final_value = (Math.floor(Math.sqrt((initial_velocity * initial_velocity) + (2 * 9.81 * building_height)) * 100) / 100).toFixed(2).toString();
                    final_velocity.content = 'Final Velocity: \n' + final_value + ' m/s';
                    viRef.content = "Vi: \n" + initial_velocity + " m/s";
                    
                  }
                    wall_height_text.content = building_height + " m";
                    var realTime = event.time - count;
                    if (gravity === 9.81) {
                        var timeValue = (Math.floor(parseFloat(realTime) * 100) / 100).toFixed(2).toString();
                        time.content = 'Time: \n' + timeValue;
                        }
                    
                    
                    var velocity = (gravity * realTime * pixelsPerMetre) - (initial_velocity * pixelsPerMetre);
                    ball.position.y += velocity/(1/event.delta);
                     if (ball.position.x < view.size.width/2 + 20){
                     
                     ball.position.x += 1;
                     
                     }
                     if (ball.position.y > view.size.height - 16){
                        gravity = 0;
                        
                    
                     }
                 }
                
                else {
                    count = event.time;
                    
                } 
            
            }

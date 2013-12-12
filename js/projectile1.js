var start = false;
                    
            var building_height = 8;
            var building_left = new Point(0, 50);
            var building_corner = new Point(80, 50);
            var building_floor = new Point(80, view.size.height);
            var building = new Path(building_left, building_corner, building_floor);
            
            var pixelsPerMetre = (view.size.height - 50)/building_height;
            var gravity = 9.81;
            
            building.strokeColor = 'white';
            
            var boy_head = new Path.Circle(new Point(60, 5), 5);
            boy_head.strokeColor = 'white';
            var boy_body = new Path(new Point(60, 10), new Point(60, 30), new Point(70, 50), new Point(60, 30), new Point(50, 50));
            boy_body.strokeColor = 'white';
            var boy_arms = new Path(new Point(50, 25), new Point(82, 10));
            boy_arms.strokeColor = 'white';
            var ground = new Path(new Point(0, view.size.height), new Point(view.size.width, view.size.height));
            ground.strokeColor = 'white';
            ground.strokeWidth = 5;
            
            var ball = new Path.Circle(new Point(100, 35), 10);
            ball.fillColor = 'red';
            ball.strokeColor = 'black';
            ball.strokeWidth = 3;
            var originalPosition = ball.position.y;
            
            var initial_velocity = 0;
            var count = 0;
            var stone_velocity;
            
            $('#projectile1').click(function(e){e.preventDefault(); if (start === false){start = true;} else {start = false; ball.position.y = originalPosition; gravity = 9.81; final_velocity.content = ""; time.content = ""}});
            $('#projectile1_set_values').click(function(){
              
              if (isNaN(parseFloat($('#initial_velocity').val())) === true) {}
              else if (isNaN(parseFloat($('#wall_height').val())) === true) {}
              
              else {
                initial_velocity = parseFloat($('#initial_velocity').val());
                stone_velocity = parseFloat($('#initial_velocity').val());
                building_height = parseFloat($('#wall_height').val());
                pixelsPerMetre = (view.size.height - 50)/building_height;
                wall_height_text.content = building_height + " m";
                viRef.content = "Vi: \n" + initial_velocity + " m/s";
              }
                                           
            
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
            
            var wall_height_text = new PointText({
                point: [30, 100],
                fillColor: 'white',
                fontSize: 16
            });
            
            var viRef = new PointText({
                point: [5, 160],
                fillColor: 'white',
                fontSize: 16
            });
            
            
                    
            
            function onFrame(event) {
            
                ball.fillColor.hue += 1;
    
                if (start){
                
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
                
                    var velocity = (gravity * realTime * pixelsPerMetre) + (initial_velocity * pixelsPerMetre);
                    ball.position.y += velocity/(1/event.delta);

                   
                    
                    if (ball.position.y > view.size.height - 16){
                        gravity = 0;
                        initial_velocity = 0;
                    
                        }
                    }
                    
                 else {
                    count = event.time;
                    
                    }
            
            }

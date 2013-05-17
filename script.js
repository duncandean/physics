$(document).ready(function(){

    window.addEventListener("deviceorientation", handleOrientation, true);
    
    function handleOrientation(event) {
        var alpha = event.alpha;
        $('#z_axis').html(String(alpha.toFixed(1)));
    }




  $('#calculate').click(function(){
    var angle = parseFloat($('#angle_calc').val());
    var order_min = parseFloat($('#min_calc').val());
    var wavelength = parseFloat($('#wave_calc').val());
    var width = parseFloat($('#width_calc').val());
    
    if (isNaN(width) === true){
    
        var calculation = String((order_min * wavelength) / Math.sin((Math.PI/180) * angle));
        $('#width_calc').val(calculation);
        
        
     }
     
    else if (isNaN(wavelength) === true){
    
        var calculation = String((width * Math.sin((Math.PI/ 180) * angle)) / order_min);
         $('#wave_calc').val(calculation);
    
    }
    
    else if (isNaN(order_min) === true){
        var calculation = String((width * Math.sin((Math.PI/ 180) * angle)) / wavelength);
         $('#min_calc').val(calculation);
    }
    
    else if (isNaN(angle) === true){
        var calculation = String((180/Math.PI) * (Math.asin((order_min * wavelength) / width)));
         $('#angle_calc').val(calculation);
    }
  
  });
    $('.text_input').click(function(){
      if ($('#angle_calc').val() !== '' && $('#min_calc').val() !== '' && $('#wave_calc').val() !== '' && $('#width_calc').val() !== ''){
        $('.text_input').val('')
        }
    });



});

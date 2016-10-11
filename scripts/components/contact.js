
import $ from 'jquery';
import validate from 'jquery-validation';
import swal from 'sweetalert';


function contact() {

	$("#request-quote-form").validate({
      rules: {
        email: {
          required: true
        }
      },

      messages: {
        email: 'Please enter your email address.'
      }
    });

    
    $('#submit-request').on('click', function(e) {
        
      var isvalid = $('#request-quote-form').valid();
     
      if(isvalid){
        e.preventDefault();

        var pref = $('.pref'),
       		services = [];

        if (pref.length >= 1) {
        	for(var i=0; i<pref.length; i++) {
        		var p = $(pref[i]);
        		if(p.is(':checked')) {
        			
        			services.push(p.attr('value'));
        		}
        	}
        }


        var register = {
          action: 'register',
          name: $('#name').val(),
          email: $('#email').val(),
          phone: $('#phone').val(),
          company: $('#company').val(),
          preferance: services
        }

         //Run Ajax Call
        $.ajax({
          type: 'POST',
          beforeSend: function(x) {
            if (x && x.overrideMimeType) {
             x.overrideMimeType("application/j-son;charset=UTF-8");
            }
          },
          dataType: "json",
          url: "ajax/signup.ajax.php",
          data: { register : JSON.stringify(register) },
          success: function(msg) {
            if (msg.hasOwnProperty('success')) {
              $('#name').val(''),
              $('#phone').val('');
              $('#email').val('');
              $('#company').val(''); 

              if(pref.length >= 1) {
                for (var i=0; i<pref.length; i++) {
                  var p = $(pref[i]);
                  p.attr('checked', false);
                }
              }

              fbq('track', 'Lead');
              ga('send', 'event', 'Contact-Form', 'Submit', 'Request-a-quote');
              
              swal("Thank you for your interest", "We will be getting back with you shortly");
            }
          }
        });

      }
    });


    $.validator.addMethod("isInteger", function(value, element) {
      return value >= 1;
    }, "This must be a valid zipcode");


}

export default contact;
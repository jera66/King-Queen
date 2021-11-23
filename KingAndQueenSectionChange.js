var url = "empty.html";	
var redirect = 'yes';

$.address.change(function(event) {
	//console.log(redirect);
    if((event.value.length > 1)){
    	if (redirect == 'yes'){
    	var url = event.value.replace("/", "") + '.html';
  		//$('.contenuto').load(url);
  		//sezione = event.value.replace("/", "");
  		
  		
  		closepreloader = function () {
  			$('.consection').css('opacity', '1');
  			$('.blackpreloader').stop();
  			$('.basepreloader').stop();
  			
  			reduceblackpreloader = function () {
  				$('.blackpreloader').css('height', '0%');
  			}
  			
  			$('.blackpreloader').delay(0).animate({opacity: '0'}, {duration:800, easing:"easeInOutExpo", complete:reduceblackpreloader});
  			
  			if($.browser.msie && parseFloat($.browser.version) < 8){
  				$('.basepreloader').delay(0).animate({opacity: '0'}, {duration:500, easing:"easeInOutExpo"});
  			} else {
  				$('.basepreloader').delay(0).animate({scale: '0'},{duration:600, easing:"easeInOutExpo"});
  			}
  			
  			//$('.basepreloader').delay(0).animate({top: '-10%'}, {duration:500, easing:"easeInOutExpo"});
  			
  		}
  		
  		
  		//SECTION CHANGES
  		sectionChange = function () {
  				
  				
		  		if ($.address.value() == '/homepage'){
			  		var dime = $('#voice1').css('width');
			  		$('#selection1').delay(0).animate({width: dime}, {duration:1000, easing:"easeInOutExpo"});
			  		url = "KingAndQueen.html";
			  		$('.consection').load(url);
			  		$.address.title('KingAndQueen . Official Website');
			  		
					//$('#selection1').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
			  		$('#selection2').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
			  		$('#selection3').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
			  		$('#selection4').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
			  		//$('#selection5').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
			  		//$('#selection6').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  		}
		  		if ($.address.value() == '/biography'){
		  			var dime = $('#voice2').css('width');
		  			$('#selection2').delay(0).animate({width: dime}, {duration:1000, easing:"easeInOutExpo"});
		  			url = "KingAndQueenBiography.html";
		  			$('.consection').load(url);
		  			$.address.title('KingAndQueen . Biography');
		  			
		  			$('#seletion1').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
					//$('#seletion2').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  			$('#selection3').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  			$('#selection4').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  			//$('#seletion5').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  			//$('#seletion6').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  		}
		  		//if ($.address.value() == '/career'){
		  			//var dime = $('#voce3').css('width');
		  			//$('#selection3').stop();
		  			//$('#selection3').delay(0).animate({width: dime}, {duration:1000, easing:"easeInOutExpo"});
		  			//url = "career.html";
		  			//$('.consection').load(url);
		  			//$.address.title('Elisabetta Canalis . Career');
		  			
		  			//$('#selet1').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  			//$('#selet2').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
					//$('#selet3').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  			//$('#selet4').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  			//$('#selet5').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  			//$('#selet6').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  		}
		  		if ($.address.value() == '/media'){
		  			var dime = $('#voice4').css('width');
		  			$('#selection4').delay(0).animate({width: dime}, {duration:1000, easing:"easeInOutExpo"});
		  			url = "KingAndQueenMedia.html";
		  			$('.consection').load(url);
		  			$.address.title('KingAndQueen . Media');
		  			
		  			$('#selection1').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  			$('#selection2').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  			$('#selection3').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
					//$('#selection4').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  			//$('#selection5').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  			//$('#selection6').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  		}
		  		//if ($.address.value() == '/press'){
		  			//var dime = $('#voice5').css('width');
		  			//$('#selection5').delay(0).animate({width: dime}, {duration:1000, easing:"easeInOutExpo"});
		  			//url = "press.html";
		  			//$('.consection').load(url);
		  			//$.address.title('KingAndQueen . Press');
		  			
		  			//$('#selection1').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  			//$('#selection2').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  			//$('#selection3').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  			//$('#selection4').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
					//$('#selection5').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  			//$('#selection6').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  		}
		  		if ($.address.value() == '/contact'){
		  			var dime = $('#voice6').css('width');
		  			$('#selection4').delay(0).animate({width: dime}, {duration:1000, easing:"easeInOutExpo"});
		  			url = "KingAndQueenContact.html";
		  			$('.consection').load(url);
		  			$.address.title('KingAndQueen . Contact');
		  			
		  			$('#selection1').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  			$('#selection2').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  			$('#selection3').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  			$('#selection4').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
					//$('#selection6').delay(0).animate({width: '0px'}, {duration:1000, easing:"easeInOutExpo"});
		  		}
		  		
		  		//alert($.address.value());
	  		
  		}
  		
  		//ANIMATION
  		$('.blackpreloader').stop();
  		$('.basepreloader').stop();
  		
  		if($.browser.msie && parseFloat($.browser.version) < 8){
  			$('.basepreloader').delay(0).animate({opacity: '1'}, {duration:500, easing:"easeInOutExpo"});
  		} else {
  		}
  		
  		$('.consection').delay(0).animate({opacity: '0'}, {duration:500, easing:"easeInOutExpo"});
  		$('.blackpreloader').css('height', '100%');
  		$('.blackpreloader').delay(0).animate({opacity: '1'}, {duration:500, easing:"easeInOutExpo"});
  		
  		if($.browser.msie && parseFloat($.browser.version) < 8){
  		} else {
  			$('.basepreloader').animate({scale: '0'},{duration:0});
  		}
  		
  		$('.basepreloader').delay(0).animate({top: '50%'}, {duration:500, easing:"easeInOutExpo"});
  		
  		if($.browser.msie && parseFloat($.browser.version) < 8){
  		} else {
  			$('.basepreloader').delay(0).animate({scale: '1'},{duration:500, easing:"easeOutExpo"});
  		}  		
  		
  		$('html,body').animate({scrollTop: 0}, {duration:1000, easing:"easeInOutExpo", complete:cambiasezione});
  		

  	}
  	
); 

var section = $.address.value();

if (section == '/'){
	$.address.value('/homepage');
}
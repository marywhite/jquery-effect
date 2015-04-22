var i = 0;
var z = 10;
$(document).ready(function(){
   $('#button').on('click', function(){
		$( "#heart"+i ).clone().attr("id", 'heart'+(i+1)).appendTo( "#wrapper");
		i++;
		$("#heart"+i).animate({ width: '+=3em'}, 500);
	});
});



/*
 $(window).scroll(function(){
    var scroll = $(window).scrollTop();
      if(scroll <= 770) {
        console.log(i);
        $( "#heart"+i ).clone().attr("id", 'heart'+(i+1)).appendTo( "body");
		i++;
		$("#heart"+i).animate({ width: '+=2em'}, 1000);
      }
   });
   */

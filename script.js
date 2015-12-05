$(function(){
	var url = window.location.href.split('#')[1];
	console.log(url);
	
	window.onload = function() {
    	$('iframe')[0].style = ('position: static; visibility: visible; display: block; width: 100%; height: 159.766px; padding: 0px; border: none; max-width: 170px; min-width: 160px; margin-top: 10px; margin-bottom: 10px;');
	};

    
	$.ajax({
      type: "GET",
      callback: "a",
      dataType: 'jsonp',
	  url: ("https://api.twitter.com/1/statuses/oembed.json?url="+url),
	  success: function( data ) {
	    $('.tuite').html(data.html);
		$('iframe')[0].style = ('position: static; visibility: visible; display: block; width: 100%; height: 159.766px; padding: 0px; border: none; max-width: 170px; min-width: 160px; margin-top: 10px; margin-bottom: 10px;');
	  }
	});

});
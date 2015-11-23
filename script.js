$(function(){
	var url = window.location.href.split('#')[1];
	console.log(url);
    
	$.ajax({
      type: "GET",
      callback: "a",
      dataType: 'jsonp',
	  url: ("https://api.twitter.com/1/statuses/oembed.json?url="+url),
	  success: function( data ) {
	    $('.tuite').html(data.html);
	  }
	});

});
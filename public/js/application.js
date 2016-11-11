$(document).ready(function() {
  actionListener();
  comedyListener();
  $(".container").addClass('animated slideInDown')
  $(".container h1").addClass('animated zoomIn');
});

var actionListener = function(){
  $("#action").on("click", function(){
  	var form = $(this);
  	form.addClass('animated rubberBand')
  	$(".container h1").addClass('animated flip')
  	console.log(form);
  	var url = form.attr("action");
  	console.log(url);
  	method = "post";
  	$(".suggestion").removeClass('animated fadeInRight');
  	$.ajax({
  		url: url,
  		method: method
  	}).done(function(response){
  		$(".suggestion").html(response).addClass('animated fadeInRight');
  		form.removeClass('animated rubberBand')
  		$(".container h1").removeClass('animated flip')
  	})
  })
}

var comedyListener = function(){
	$("#comedy").on("click", function(){
  	var form = $(this);
  	form.addClass('animated rubberBand');
  	$(".container h1").addClass('animated flip')
  	console.log(form);
  	var url = form.attr("action");
  	console.log(url);
  	method = "post";
  	$(".suggestion").removeClass('animated fadeInRight');
  	$.ajax({
  		url: url,
  		method: method
  	}).done(function(response){
  		$(".suggestion").html(response).addClass('animated fadeInRight');
  		form.removeClass('animated rubberBand');
  		$(".container h1").removeClass('animated flip')
  	})
  })
	}

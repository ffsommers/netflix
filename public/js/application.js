$(document).ready(function() {
  actionListener();
  comedyListener();
});

var actionListener = function(){
  $("#action").on("click", function(){
  	var form = $(this);
  	console.log(form);
  	var url = form.attr("action");
  	console.log(url);
  	method = "post";
  	$.ajax({
  		url: url,
  		method: method
  	}).done(function(response){
  		$(".suggestion").html(response);
  	})
  })
}

var comedyListener = function(){
	$("#comedy").on("click", function(){
  	var form = $(this);
  	console.log(form);
  	var url = form.attr("action");
  	console.log(url);
  	method = "post";
  	$.ajax({
  		url: url,
  		method: method
  	}).done(function(response){
  		$(".suggestion").html(response);
  	})
  })
	}

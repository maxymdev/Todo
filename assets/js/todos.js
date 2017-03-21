// Check Off Todos
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click X to delete

//$("span").click(function(event){ 
//if use "click" it will not work with new loaded data
$("ul").on("click", "span", function(event){ 
	event.stopPropagation(); // stop "bubble" effect
	$(this).parent().fadeOut(500, function(){ //fade out first
		$(this).remove(); //and remove THIS span
	});
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){ //13 is ENTER key
		//grab todo text
		var todoText = $(this).val();
		$(this).val(""); //cleaning input
		//create a new li
		$("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + todoText + "</li>"); //use ' but not "
	}
});

$("#inputShow").click(function(){
	$("input[type='text']").fadeToggle(150) //toggle the input
	$("#inputShow").toggleClass("fa-plus fa-minus"); //toggle the button from - to +
});


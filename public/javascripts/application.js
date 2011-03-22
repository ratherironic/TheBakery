$(document).ready(function(){
	$('#AddTask').click(function(){
		$('#new_task').slideToggle();
	});
	$('#Manager section h3').click(function(){
		$(this).siblings('div.TaskInfo').slideToggle();
		$(this).toggleClass('selected');
	});
	
	$('#Manager section a.ShowAddStory').click(function(e){
		$(this).siblings('form.new_story').slideToggle();
		e.preventDefault();
	});
	
	$('#Manager section').each(function(){
		var percentTotal = 0,
			possibleTotal = 0
			$marker = $(this).find('div.ChartProgress span');
			
		$(this).find('div.TaskInfo ul li').each(function(){
			percentTotal += parseInt($(this).attr('class').split('status')[1]);
			possibleTotal += 4;
		});
		$marker.css({
			'width' : ((1 - (percentTotal / possibleTotal))*100)+'%'
		});
		if(((1 - (percentTotal / possibleTotal))*100)<25){
			$marker.addClass('low');
		}else if(((1 - (percentTotal / possibleTotal))*100)<50){
			$marker.addClass('mid');
		}
	});
});
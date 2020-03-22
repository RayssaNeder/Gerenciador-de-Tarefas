$(function(){
	function onTarefaDeleteClick(){
		console.log($(this).parent(".tarefa-item").hide('slow', function(){
			$(this).remove();
		}));
	}


	$(".tarefa-delete").click(onTarefaDeleteClick);
});
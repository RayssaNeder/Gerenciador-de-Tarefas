$(function(){
	function onTarefaDeleteClick(){
		console.log($(this).parent(".tarefa-item").hide('slow', function(){
			$(this).remove();
		}));
	}

	function onTarefaItemClick(){
		var text = $(this).children('.tarefa-texto').text();
		var html = "<input type='text' " + "class='tarefa-edit' value='" + text + "'>";
		$(this).html(html);
	}

	function onTarefaEditKeydown(event){
		if(event.which === 13){
			savePendingEdition($(this));
		}
	}

	function savePendingEdition(tarefa){
		console.log("é aqui que vamos salvar nossa tarefa");
	}


	$(".tarefa-delete").click(onTarefaDeleteClick);

	$(".tarefa-item").click(onTarefaItemClick);

	$(".tarefa-edit").keydown(onTarefaEditKeydown)
});
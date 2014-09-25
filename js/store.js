 		function salvar(){
            alert("Nome salvo: " + $("#nome").val())
            localStorage.setItem('nome', $("#nome").val());
        }

        function ler(){
            alert(localStorage.getItem('nome'));
        }
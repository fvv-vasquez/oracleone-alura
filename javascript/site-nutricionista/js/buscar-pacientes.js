/* AJAX: É uma requisição assíncrona porque não está parando o fluxo do código, ou seja, no momento em que a requisição é feita, a execução continua normalmente. */

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {

    var xhr = new XMLHttpRequest(); // XMLHttpRequest é quem é responsável por fazer requisições HTTP assíncronas com Javascript

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // configurando a requisição

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send(); // para enviar a requisição
});

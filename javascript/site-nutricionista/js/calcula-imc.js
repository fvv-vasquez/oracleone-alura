var titulo = document.querySelector(".titulo"); //seleciona a tag/classe/id
titulo.textContent = "Valentina Nutricionista"; //altero através do conteúdo usando textContent

var pacientes = document.querySelectorAll(".paciente"); //traz uma lista

for (i = 0; i < pacientes.length; i++) {
    var paciente = pacientes [i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
        // paciente.style.backgroundColor = "lightcoral"; > prática incorreta pois deve ser usado CSS, porém é possível fazer em JS
    }
    
    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
        // paciente.style.color = "red"; > prática incorreta pois deve ser usado CSS, porém é possível fazer em JS
    }
    
    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

titulo.addEventListener("click", function() {
    console.log("fui cliclado");
})

/* Uma boa prática é trabalhar com addEventListener() mesmo que você só queira adicionar um único evento (botao.onclick por exemplo). Porque mais tarde, se outro desenvolvedor quiser adicionar outro evento para o mesmo elemento, não corremos o risco de substituir a função já associada por outra.  */
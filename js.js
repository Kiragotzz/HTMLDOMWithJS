//increment
var botoesIncrementa = document.querySelectorAll(".btn-incremento");

for(let botao of botoesIncrementa)
{
    botao.addEventListener("click", incrementa);

    function incrementa() {
        var item = botao.closest(".item");  
    
        var input = item.querySelector(".quantidade");
        input.value++;
   
        var preco = pegaPrecoItem(item);
        adicionaAoTotal(preco);
    }
}


//decreases
var botoesDecrementa = document.querySelectorAll(".btn-decremento");

for(let botao of botoesDecrementa) {
botao.addEventListener("click", decrementa);

function decrementa() {
    var item = botao.closest(".item");  
    
    var input = item.querySelector(".quantidade");
    if (input.value > 0) {
        input.value--;
        var preco = pegaPrecoItem(item);
        adicionaAoTotal(-preco);
    }  
    else {
    console.log(input.value);
    }
    
}
}
var formPedido = document.forms.pedido;

formPedido.addEventListener("submit", function (event) {
    var contador = 0;

    var inputs = formPedido.querySelectorAll("input.quantidade");

    for (let input of inputs)
    {
        if(input.value > 0)
        {
            contador++;
        }
    }
    if (contador == 0)
    {
        alert("Deve ter pelo menos 1 tênis no pedido");
        event.preventDefault();
    }
});



//Funções auxiliares
function pegaPrecoItem(item) {
    var precoItem = item.querySelector(".preco-item");
    return Number(precoItem.textContent);
}

function adicionaAoTotal(valor) {
    var elementoTotal = document.querySelector("#total");
    elementoTotal.textContent = valor + Number(elementoTotal.textContent);
}
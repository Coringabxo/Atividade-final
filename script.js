
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    
    var nome = document.getElementById("nome").value;
    var  endereço = document.getElementById("endereço").value;
    var  numero = document.getElementById("numero").value;

    var tabela = document.getElementById("cadastros").getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow();
    var celula1 = novaLinha.insertCell(0);
    var celula2 = novaLinha.insertCell(1);
    celula1.innerHTML = nome;
    celula2.innerHTML = endereço;
    celula2.innerHTML = numero;

    document.getElementById("cadastroForm").reset();
});
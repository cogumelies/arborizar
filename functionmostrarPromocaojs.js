    function mostrarPromocao() {
    // valores digitados
    const medicamento = document.getElementById("inMedicamento").value;
    const preco = Number(document.getElementById("inPreco").value);

    // calcular total 2 unidades
    const total = preco * 2;

    // remover centavos (desconto)
    const promocao = Math.floor(total);
    
    // mostrar resultados 
    document.getElementById("outTitulo").textContent =
     "Promoção de " + medicamento;
     
 
    }
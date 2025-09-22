let precoFinal = 0;
let descricaoPizza = "";

function calcular() {
  precoFinal = 0;
  descricaoPizza = "";

  // Massa
  let massa = document.getElementById("massa");
  let massaEscolhida = massa.options[massa.selectedIndex];
  precoFinal += parseFloat(massaEscolhida.dataset.preco);
  descricaoPizza += massaEscolhida.value;

  // Molho
  let molho = document.getElementById("molho");
  let molhoEscolhido = molho.options[molho.selectedIndex];
  precoFinal += parseFloat(molhoEscolhido.dataset.preco);
  descricaoPizza += `, molho ${molhoEscolhido.value}`;

  // Recheios
  let recheios = document.querySelectorAll('input[type=checkbox]:checked');
  let itens = [];
  recheios.forEach(item => {
    precoFinal += parseFloat(item.dataset.preco);
    itens.push(item.value);
  });

  if (itens.length > 0) {
    descricaoPizza += `, recheios: ${itens.join(", ")}`;
  }

  document.getElementById("total").textContent = precoFinal.toFixed(2).replace(".", ",");
}

function adicionarCarrinho() {
  if (precoFinal === 0) {
    alert("Calcule o preço antes de adicionar ao carrinho!");
    return;
  }

  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push({ nome: "Pizza Personalizada (" + descricaoPizza + ")", preco: precoFinal });
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Pizza personalizada adicionada ao carrinho!");
}

function carregarCarrinho() {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  let lista = document.getElementById('lista');
  let total = 0;

  if (carrinho.length === 0) {
    lista.innerHTML = '<p class="text-center">Carrinho vazio.</p>';
    document.getElementById('total').textContent = "0,00";
    return;
  }

  let html = '';
  carrinho.forEach((item, i) => {
    total += item.preco;
    html += `
      <div class="card-carrinho">
        <div>${item.nome}</div>
        <div class="d-flex align-items-center gap-2">
          <span>R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
          <button class="btn-remover btn-sm" onclick="removerItem(${i})">X</button>
        </div>
      </div>`;
  });

  lista.innerHTML = html;

  // Calcular frete
  let tipoEntrega = document.getElementById('tipoEntrega');
  let frete = tipoEntrega ? parseFloat(tipoEntrega.options[tipoEntrega.selectedIndex].dataset.frete) : 0;
  total += frete;

  document.getElementById('total').textContent = total.toFixed(2).replace('.', ',');
}

function removerItem(index) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.splice(index, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  carregarCarrinho();
}

function calcularFrete() {
  carregarCarrinho();
}

function finalizar() {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  if (carrinho.length === 0) {
    alert("Carrinho vazio!");
    return;
  }

  let tipoEntrega = document.getElementById('tipoEntrega');
  let frete = tipoEntrega ? parseFloat(tipoEntrega.options[tipoEntrega.selectedIndex].dataset.frete) : 0;
  let entregaTexto = tipoEntrega ? tipoEntrega.options[tipoEntrega.selectedIndex].text : "Retirada no local";

  let texto = "🍕 Pedido Pizzaria Do Bairro:%0A";
  let total = 0;

  carrinho.forEach(item => {
    texto += `- ${item.nome}: R$ ${item.preco.toFixed(2).replace('.', ',')}%0A`;
    total += item.preco;
  });

  total += frete;

  texto += `%0AEntrega: ${entregaTexto}%0AFrete: R$ ${frete.toFixed(2).replace('.', ',')}`;
  texto += `%0ATotal: R$ ${total.toFixed(2).replace('.', ',')}`;

  // Trocar pelo número real da pizzaria
  window.open(`https://wa.me/5511999999999?text=${texto}`, "_blank");

  localStorage.removeItem('carrinho');
  carregarCarrinho();
}

// Carregar ao abrir a página
carregarCarrinho();

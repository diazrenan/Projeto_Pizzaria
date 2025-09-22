function addCarrinho(nome, preco) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push({ nome: nome, preco: preco });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(`${nome} adicionada ao carrinho!`);
}

//Contato
function enviarContato() {
  let nome = document.getElementById("nome").value;
  let telefone = document.getElementById("telefone").value;
  let mensagem = document.getElementById("mensagem").value;

  if (!nome || !telefone || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  let texto = `👋 Olá, meu nome é ${nome}%0A📞 Telefone: ${telefone}%0A💬 Mensagem: ${mensagem}`;

  // Trocar pelo número real da pizzaria
  window.open(`https://wa.me/5511999999999?text=${texto}`, "_blank");

  document.getElementById("formContato").reset();
}

document.getElementById("telefone").addEventListener("input", function(e) {
  let value = e.target.value.replace(/\D/g, ""); // remove tudo que não é número
  if (value.length > 11) value = value.slice(0, 11);

  if (value.length <= 2) {
    e.target.value = `(${value}`;
  } else if (value.length <= 7) {
    e.target.value = `(${value.slice(0,2)}) ${value.slice(2)}`;
  } else {
    e.target.value = `(${value.slice(0,2)}) ${value.slice(2,7)}-${value.slice(7)}`;
  }
});


# 🍕 Projeto Pizzaria - Site Demo

Este projeto foi desenvolvido como parte dos meus estudos em Análise e Desenvolvimento de Sistemas.
O objetivo é criar um **site funcional para uma pizzaria**, permitindo que os clientes visualizem o cardápio, montem pizzas personalizadas e enviem o pedido diretamente para o WhatsApp da pizzaria.

---

 Descrição do Projeto

O site simula o funcionamento de uma aplicação real para pequenos negócios, com foco em pizzarias que ainda não possuem sistemas digitais de pedidos.
Ele foi projetado para ser simples, responsivo e prático, de forma que o cliente final consiga usar sem dificuldades, tanto em celular quanto no computador.

Não há necessidade de banco de dados no estágio atual, pois os pedidos são enviados diretamente pelo WhatsApp. O uso de **LocalStorage** no navegador permite armazenar temporariamente os itens do carrinho até a finalização.

---

Funcionalidades Implementadas

* Cardápio digital: lista de pizzas com imagens, descrições e preços.
* Adicionar ao carrinho: armazenamento no navegador usando LocalStorage.
* Carrinho interativo: listagem de itens, cálculo automático do total e opção de remover produtos.
* Montar pizza: formulário para personalizar pedidos.
* Integração com WhatsApp: envio automático do pedido formatado para o número da pizzaria.
* Formulário de contato: para mensagens gerais de clientes.
* Responsividade: adaptado para telas grandes e celulares usando Bootstrap 5.


 Tecnologias Utilizadas
 
* HTML5 → estrutura das páginas
* CSS3 / Bootstrap 5 → estilização e responsividade
* JavaScript → manipulação de carrinho, integração com LocalStorage e envio para WhatsApp
* GitHub Pages → hospedagem do site demo

---

Estrutura do Projeto

```
Projeto_Pizzaria/
├── index.html        # Página inicial com cardápio
├── carrinho.html     # Página do carrinho
├── montar.html       # Página para montar pizzas
├── contato.html      # Página de contato
├── css/
│   └── estilos.css   # Estilos customizados
├── js/
│   └── carrinho.js   # Lógica do carrinho
└── img/              # Imagens utilizadas no site
```

 Demonstração

🔗 Acesse a versão online hospedada no GitHub Pages:
👉 [Clique aqui para testar](https://diazrenan.github.io/Projeto_Pizzaria/)


Possíveis Melhorias Futuras

* Implementação de cálculo de frete (delivery x retirada).
* Sistema administrativo para controle de pedidos em tempo real.
* Cadastro e histórico de clientes.
* Integração com banco de dados.
* Otimização de imagens para melhor desempenho.

 Objetivo do Projeto

Este projeto foi criado como um exercício prático de desenvolvimento web, unindo conhecimentos de HTML, CSS, JavaScript e usabilidade.
Além de servir como aprendizado, ele demonstra como é possível entregar valor para pequenos negócios através de soluções digitais simples e acessíveis.


👨‍💻 Desenvolvido como parte do meu portfólio em Análise e Desenvolvimento de Sistemas.

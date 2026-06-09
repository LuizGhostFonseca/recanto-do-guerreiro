console.log("O javascript esta funfando");

const whatsapp = "5564981678001";

const produtos = [

{
nome:"Contra",
preco:10,
categoria:"espetos"
},

{
nome:"Kafta",
preco:10,
categoria:"espetos"
},

{
nome:"Frango com Bacon",
preco:10,
categoria:"espetos"
},

{
nome:"Linguiça com Pimenta",
preco:10,
categoria:"espetos"
},

{
nome:"Linguiça sem Pimenta",
preco:10,
categoria:"espetos"
},

{
nome:"Coração",
preco:10,
categoria:"espetos"
},

{
nome:"Queijo Provolone",
preco:10,
categoria:"espetos"
},

{
nome:"Queijo Coalho",
preco:10,
categoria:"espetos"
},

{
nome:"Cupim",
preco:10,
categoria:"espetos"
},

{
nome:"Picanha",
preco:15,
categoria:"espetos"
},

{
nome:"Peixe",
preco:12,
categoria:"espetos"
},

{
nome:"Jantinha Completa",
preco:22,
categoria:"jantinha"
},

{
nome:"Batata",
preco:20,
categoria:"acompanhamentos"
},

{
nome:"Batata Especial",
preco:30,
categoria:"acompanhamentos"
},

{
nome:"Coca 2L",
preco:13,
categoria:"bebidas"
},

{
nome:"Coca 1.5L",
preco:11,
categoria:"bebidas"
},

{
nome:"Coca 600ml",
preco:8,
categoria:"bebidas"
}

];

let carrinho = [];

function renderizar(produtosFiltrados = produtos){

const cardapio =
document.getElementById("cardapio");

cardapio.innerHTML="";

produtosFiltrados.forEach(produto=>{

cardapio.innerHTML += `
<div class="card">

<h3>${produto.nome}</h3>

<p class="preco">
R$ ${produto.preco.toFixed(2)}
</p>

<button onclick="adicionar('${produto.nome}',${produto.preco})">
Adicionar
</button>

</div>
`;

});

}

function adicionar(nome,preco){

carrinho.push({
nome,
preco
});

atualizarCarrinho();

}

function atualizarCarrinho(){

const lista =
document.getElementById("itensCarrinho");

lista.innerHTML="";

let total=0;

carrinho.forEach(item=>{

total += item.preco;

lista.innerHTML += `
<div class="itemCarrinho">
${item.nome} - R$ ${item.preco.toFixed(2)}
</div>
`;

});

document.getElementById("total")
.innerText =
`Total: R$ ${total.toFixed(2)}`;

}

function filtrar(categoria){

if(categoria==="todos"){
renderizar();
return;
}

renderizar(
produtos.filter(
p=>p.categoria===categoria
)
);

}

function enviarWhatsApp(){

const nome =
document.getElementById("nome").value;

const telefone =
document.getElementById("telefone").value;

const endereco =
document.getElementById("endereco").value;

const obs =
document.getElementById("obs").value;

let total = 0;

let mensagem =
`🔥 RECANTO DO GUERREIRO\n\n`;

mensagem +=
`👤 Cliente: ${nome}\n`;

mensagem +=
`📞 Telefone: ${telefone}\n`;

mensagem +=
`📍 Endereço: ${endereco}\n\n`;

mensagem +=
`📋 PEDIDO\n\n`;

carrinho.forEach(item=>{

mensagem +=
`${item.nome} - R$ ${item.preco.toFixed(2)}\n`;

total += item.preco;

});

mensagem +=
`\n📝 Observações:\n${obs}`;

mensagem +=
`\n\n💰 TOTAL: R$ ${total.toFixed(2)}`;

const url =
`https://wa.me/${whatsapp}?text=${encodeURIComponent(mensagem)}`;

window.open(url,"_blank");

}

const inputTelefone = document.getElementById('telefone');

inputTelefone.addEventListener('input', function(evento) {
    

    let valorFiltrado = evento.target.value.replace(/\D/g, "");
    valorFiltrado = valorFiltrado.replace(/^(\d{2})(\d)/g, "($1) $2");
    valorFiltrado = valorFiltrado.replace(/(\d)(\d{4})$/, "$1-$2");

    evento.target.value = valorFiltrado;
});


console.log("O javascript esta funfando");

const whatsapp = "5564981678001";

const produtos = [

{
nome:"Contra",
preco:10,
categoria:"espetos"
},

{
nome:"Kafta",
preco:10,
categoria:"espetos"
},

{
nome:"Frango com Bacon",
preco:10,
categoria:"espetos"
},

{
nome:"Linguiça com Pimenta",
preco:10,
categoria:"espetos"
},

{
nome:"Linguiça sem Pimenta",
preco:10,
categoria:"espetos"
},

{
nome:"Coração",
preco:10,
categoria:"espetos"
},

{
nome:"Queijo Provolone",
preco:10,
categoria:"espetos"
},

{
nome:"Queijo Coalho",
preco:10,
categoria:"espetos"
},

{
nome:"Cupim",
preco:10,
categoria:"espetos"
},

{
nome:"Picanha",
preco:15,
categoria:"espetos"
},

{
nome:"Peixe",
preco:12,
categoria:"espetos"
},

{
nome:"Jantinha Completa",
preco:22,
categoria:"jantinha"
},

{
nome:"Batata",
preco:20,
categoria:"acompanhamentos"
},

{
nome:"Batata Especial",
preco:30,
categoria:"acompanhamentos"
},

{
nome:"Coca 2L",
preco:13,
categoria:"bebidas"
},

{
nome:"Coca 1.5L",
preco:11,
categoria:"bebidas"
},

{
nome:"Coca 600ml",
preco:8,
categoria:"bebidas"
}

];

let carrinho = [];

function renderizar(produtosFiltrados = produtos){

const cardapio =
document.getElementById("cardapio");

cardapio.innerHTML="";

produtosFiltrados.forEach(produto=>{

cardapio.innerHTML += `
<div class="card">

<h3>${produto.nome}</h3>

<p class="preco">
R$ ${produto.preco.toFixed(2)}
</p>

<button onclick="adicionar('${produto.nome}',${produto.preco})">
Adicionar
</button>

</div>
`;

});

}

function adicionar(nome,preco){

carrinho.push({
nome,
preco
});

atualizarCarrinho();

}

function atualizarCarrinho(){

const lista =
document.getElementById("itensCarrinho");

lista.innerHTML="";

let total=0;

carrinho.forEach(item=>{

total += item.preco;

lista.innerHTML += `
<div class="itemCarrinho">
${item.nome} - R$ ${item.preco.toFixed(2)}
</div>
`;

});

document.getElementById("total")
.innerText =
`Total: R$ ${total.toFixed(2)}`;

}

function filtrar(categoria){

if(categoria==="todos"){
renderizar();
return;
}

renderizar(
produtos.filter(
p=>p.categoria===categoria
)
);

}

function enviarWhatsApp(){

const nome =
document.getElementById("nome").value;

const telefone =
document.getElementById("telefone").value;

const endereco =
document.getElementById("endereco").value;

const obs =
document.getElementById("obs").value;

let total = 0;

let mensagem =
`🔥 RECANTO DO GUERREIRO\n\n`;

mensagem +=
`👤 Cliente: ${nome}\n`;

mensagem +=
`📞 Telefone: ${telefone}\n`;

mensagem +=
`📍 Endereço: ${endereco}\n\n`;

mensagem +=
`📋 PEDIDO\n\n`;

carrinho.forEach(item=>{

mensagem +=
`${item.nome} - R$ ${item.preco.toFixed(2)}\n`;

total += item.preco;

});

mensagem +=
`\n📝 Observações:\n${obs}`;

mensagem +=
`\n\n💰 TOTAL: R$ ${total.toFixed(2)}`;

const url =
`https://wa.me/${whatsapp}?text=${encodeURIComponent(mensagem)}`;

window.open(url,"_blank");

}

const inputTelefone = document.getElementById('telefone');

inputTelefone.addEventListener('input', function(evento) {
    

    let valorFiltrado = evento.target.value.replace(/\D/g, "");
    valorFiltrado = valorFiltrado.replace(/^(\d{2})(\d)/g, "($1) $2");
    valorFiltrado = valorFiltrado.replace(/(\d)(\d{4})$/, "$1-$2");

    evento.target.value = valorFiltrado;
});

renderizar();
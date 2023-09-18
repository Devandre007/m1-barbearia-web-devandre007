const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],

    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};


function buscaCortePorId(id) {
    const cortes = barbearia.cortes;

    for (const corte of cortes) {
        if (corte.id === id) {
            return corte
        }
    }
    return "corte não encontrado"
}

const corte = buscaCortePorId(1);

console.log(corte);




function buscaBarbaPorId(id) {

    const barbas = barbearia.barbas;

    for (const barba of barbas) {
        if (barba.id === id) {
            return barba
        }
    }
    return "barba não encontrada"
}

const barba = buscaBarbaPorId(1);

console.log(barba);

function verificaStatusBarbearia() {
    const estaAberto = barbearia.estaAberto;

    if (estaAberto) {
        return "estamos abertos";
    } else {
        return "estamos fechados";
    }
}

const status1 = verificaStatusBarbearia();

console.log(status1);

function retornaTodosCortes() {
    return barbearia.cortes;

}
const cortes = retornaTodosCortes();

console.log(cortes);


function retornaTodasBarbas() {
    return barbearia.barbas;
}
const barbas = retornaTodasBarbas();

console.log(barbas);




function criaPedido(nomeCliente, corteId, barbaId) {
    const corte = buscaCortePorId(corteId);
    const barba = buscaCortePorId(barbaId);

    const pedido = {
        nome: nomeCliente,
        pedidoCorte: {
            tipo: corte.tipo,
            valor: corte.valor
        },
        pedidoBarba: {
            tipo: barba.tipo,
            valor: barba.valor
        }
    }

    return pedido;
}
const pedido = criaPedido("João da Silva", 1, 2);

console.log(pedido);





function atualizarServico(lista, id, novoValor, novoTipo) {
    const indice = lista.findIndex((item) => item.id === id);

    if (indice !== -1) {
        lista[indice] = {
            ...lista[indice],
            tipo: novoTipo,
            valor: novoValor,
        }
    }

    return lista;
}
const cortes1 = barbearia.cortes;

const listaAtualizada = atualizarServico(cortes1, 1, "Corte Novo", 30);

console.log(listaAtualizada);





function calculaTotal(pedido) {
    const valorCorte = pedido.pedidoCortePreco;
    const valorBarba = pedido.pedidoBarbaPreco;

    return valorCorte + valorBarba;
}

const pedido1 = {
    nome: "joao da Silva",
    pedidoCorte: "Militar",
    pedidoCortePreco: 20,
    pedidoBarba: "Capitao Jack",
    pedidoBarbaPreco: 20,
};

const valorTotal = calculaTotal(pedido1);

console.log(valorTotal);















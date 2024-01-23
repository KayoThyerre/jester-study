const calcularValorPedido = require('./calcular-valor-pedido');

it('não deve cobrar valor de frete quando valor dos produtos for superior a R$ 500,00', () => {
    const meuPedido = {
        itens: [
            {nome: 'Espada de prata', valor: 5000},
            {nome: 'Entrega', valor: 100, entrega:true}
        ]
    }
    
    const resultado = calcularValorPedido(meuPedido)

    expect(resultado).toBe(5000)
});

it('deve cobrar o valor de frete quando o valor dos produtos forem menor que R$ 500,00', () => {
    const meuPedido = {
        itens: [
            {nome: 'Espada de grama', valor: 50},
            {nome: 'Entrega', valor: 100, entrega:true}
        ]
    }

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(150);
});

it('deve cobrar o valor de frete caso a soma dos produtos seja exatamente R$ 500,00', () => {
    const meuPedido = {
        itens: [
            {nome: 'Espada de Lama', valor: 500},
            {nome: 'Entrega', valor: 100, entrega:true}
        ]
    }

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(600)

});
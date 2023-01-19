export class Vendas {
    constructor() {
        this.produtosVendidos = [];
    }
    adicionaVenda(cliente) {
        this.produtosVendidos.push(cliente);
    }
    lista() {
        return this.produtosVendidos;
    }
}

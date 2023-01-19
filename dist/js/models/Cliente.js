export class Cliente {
    constructor(_nome, _data, _quantidade, _valor, _pagamento, _valorFinal) {
        this._nome = _nome;
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
        this._pagamento = _pagamento;
        this._valorFinal = _valorFinal;
    }
    get nome() {
        return this._nome;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get pagamento() {
        return this._pagamento;
    }
    get telefone() {
        return this._telefone;
    }
    get valorFinal() {
        return this.quantidade * this._valor;
    }
}

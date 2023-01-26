export class Cliente {
    constructor(_nome, _data, _quantidade, _valor, _pagamento, _telefone) {
        this._nome = _nome;
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
        this._pagamento = _pagamento;
        this._telefone = _telefone;
    }
    get nome() {
        return this._nome;
    }
    get data() {
        return new Date(this._data.getTime());
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
}

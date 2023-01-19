export class Cliente {
  constructor(
    private _nome: string,
    private _data: Date,
    private _quantidade: number,
    private _valor: number,
    private _pagamento: any,
    private _telefone: number
  ) {}

  get nome(): string {
    return this._nome;
  }
  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }
  get quantidade(): number {
    return this._quantidade;
  }
  get valor(): number {
    return this._valor;
  }
  get pagamento(): any {
    return this._pagamento;
  }
  get telefone(): number {
    return this._telefone;
  }
  get valorFinal(): number {
    return this.quantidade * this._valor;
  }
}

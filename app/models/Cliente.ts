export class Cliente {
  private _telefone: number;

  constructor(
    private _nome: string,
    private _data: Date,
    private _quantidade: number,
    private _valor: number,
    private _pagamento: number,
    private _valorFinal: number
  ) {}

  get nome(): string {
    return this._nome;
  }
  get data(): Date {
    return this._data;
  }
  get quantidade(): number {
    return this._quantidade;
  }
  get valor(): number {
    return this._valor;
  }
  get pagamento():number{
    return this._pagamento
  }
  get telefone():number{
    return this._telefone
  }
  get valorFinal():number{
    return this.quantidade * this._valor
  }
}

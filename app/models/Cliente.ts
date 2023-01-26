export class Cliente {
  constructor(
    private _nome: string,
    private _data: Date,
    private _quantidade: number,
    private _valor: number,
    private _pagamento: string,
    private _telefone: number
  ) {}

  get nome(): string {
    return this._nome;
  }
  get data() {
    return new Date(this._data.getTime());
  }
  get quantidade(): number {
    return this._quantidade;
  }
  get valor(): number {
    return this._valor;
  }
  get pagamento(): string {
    return this._pagamento;
  }
  get telefone(): number {
    return this._telefone;
  }
}

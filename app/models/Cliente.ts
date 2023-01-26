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

  public static criaDe(
    nomeString: string,
    dataString: string,
    quantidadeString: string,
    valorString: string,
    telefoneString: string,
    pagamentoString: string
  ) {
    const expressaoRegular = /-/g;
    const nome = nomeString;
    const date = new Date(dataString.replace(expressaoRegular, " "));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    const telefone = parseInt(telefoneString);
    const pagamento = pagamentoString;

    return new Cliente(nome, date, quantidade, valor, pagamento, telefone);
  }
}

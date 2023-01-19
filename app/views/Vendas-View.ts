import { Vendas } from "../models/Vendas.js";
import { View } from "./View.js";

export class VendasView extends View<Vendas> {
  template(modelo: Vendas): string {
    return `
        <table class = "table table-hover table-bordered">
        <thead>
            <tr>
                <th>NOME DO CLIENTE</th>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>TELEFONE</th>
                <th>PAGAMENTO</th>
                </tr>
        </thead>
        <tbody>
        ${modelo
          .lista()
          .map((item) => {
            return `
            <tr>
            <td>${item.nome}</td>
            <td>${item.data}</td>
            <td>${item.quantidade}</td>
            <td>${item.valor}</td>
            <td>${item.telefone}</td>
            <td>${item.pagamento}</td>
            
           
            </tr>`;
          })
          .join("")}
        </tbody>
    </table>`;
  }
}
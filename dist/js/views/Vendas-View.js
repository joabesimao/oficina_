import { View } from "./View.js";
export class VendasView extends View {
    template(modelo) {
        return `
        <table class = "table table-hover table-bordered">
        <thead>
            <tr>
                <th>NOME DO CLIENTE</th>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>PAGAMENTO</th>
                <th>TELEFONE</th>
                </tr>
        </thead>
        <tbody>
        ${modelo
            .lista()
            .map((item) => {
            return `
            <tr>
            <td>${item.nome}</td>
            <td>${new Intl.DateTimeFormat().format(item.data)}</td>
            <td>${item.quantidade}</td>
            <td>${item.valor}</td>
            <td>${item.pagamento}</td>
            <td>${item.telefone}</td>
           
            
           
            </tr>`;
        })
            .join("")}
        </tbody>
    </table>`;
    }
}

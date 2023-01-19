import { View } from "./View.js";

export class MensagemView extends View<string> {
  template(modelo: string): string {
    return `<p class="alert alert-info">${modelo}</p>`;
  }
}

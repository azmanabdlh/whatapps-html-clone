import BaseElement from '@/component/base-element';
import { el, html } from '@/utils/dom';


export default class MyPanel extends BaseElement {

  styles = `
    p {
      color: red;
    }
  `;

  render() {
    const content = html` 
      <p>Helo</p>
      <slot name="sidebar"></slot>
      <slot name="scene"></slot>
      <p>Helo dunia</p>
    `;
    
    const btn = el("button");
    btn.textContent = "click";
    btn.addEventListener("click", () => {
      alert("click myPanel")
    }); 

    content.append(btn);
    return content;
  }
}

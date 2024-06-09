import CustomElementClass from '@/component/custom-element';
import { el, html, injectComponent } from '@/utils/dom';


@injectComponent("panel-element")
export default class MyPanel extends CustomElementClass {

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

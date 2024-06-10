import CustomElementClass from '@/component/custom-element';
import { el, html, injectComponent } from '@/utils/dom';


@injectComponent("panel-element")
export default class MyPanel extends CustomElementClass {

  styles = `
    .container {
      display: grid;
      grid-template-columns: 1fr 3fr;
      min-height: 100vh;
      width: 100%;
    }
  `;

  render() {
  
    return html` 
    <div class="container">
      <slot name="sidebar"></slot>
      <slot name="scene"></slot>
    </div>      
  `;;
  }
}

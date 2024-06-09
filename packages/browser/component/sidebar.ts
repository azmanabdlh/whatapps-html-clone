import CustomElementClass from '@/component/custom-element';
import { html, injectComponent } from '@/utils/dom';

@injectComponent("sidebar-list")
export default class Sidebar extends CustomElementClass {
  render(): DocumentFragment {
    // your sidebar view html
    return  html`<p>Hello</p>`;
  }
}
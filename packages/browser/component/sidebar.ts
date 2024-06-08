import BaseElement from '@/component/base-element';
import { html } from '@/utils/dom';

export default class Sidebar extends BaseElement {
  render(): DocumentFragment {
    // your sidebar view html
    return  html`<p>Hello</p>`;
  }
}
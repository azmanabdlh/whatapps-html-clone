import BaseElement from '@/component/base-element';
import { html } from '@/utils/dom';

export default class SceneView extends BaseElement {
  render(): DocumentFragment {
    // your scene view html
    return  html`<p>scene view</p>`;
  }
}
import CustomElementClass from '@/component/custom-element';
import { html, injectComponent } from '@/utils/dom';

@injectComponent("scene-view")
export default class SceneView extends CustomElementClass {
  render() {
    // your scene view html
    return  html`<p>scene view</p>`;
  }
}
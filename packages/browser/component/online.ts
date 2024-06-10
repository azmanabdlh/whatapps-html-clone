import CustomElementClass from '@/component/custom-element';
import Colors from '@/utils/colors';
import { el, html, injectComponent } from '@/utils/dom';




@injectComponent("online-element")
export default class OnlineElement extends CustomElementClass {
  styles = `
    .online {
      display: block;
      font-size: .8rem;
      color: gray;
    }
    
    .online.active::before {
      content: '';
      background-color: ${ Colors.green };
      height: 6px;
      width: 6px;
      display: inline-block;
      position: relative;
      margin-right: .15rem;
      bottom: .1rem;
      border-radius: 50%;
    }
  `;

  render() {
    const span = el("span");
    span.classList.add("online");

    const status = this.getAttribute("status");
    let indicator = "Online";
    const isOnline = status == "online";
    if (!isOnline) {
      indicator = "Offline"    
    }
    
    if (isOnline) {
      span.classList.add("active");      
    }

    span.textContent = indicator;
    return html`${span.outerHTML}`;
  }
}
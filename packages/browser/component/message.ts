import CustomElementClass from '@/component/custom-element';
import Colors from '@/utils/colors';
import { el, html, injectComponent } from '@/utils/dom';
import { toHumanize } from '@/utils/date';

@injectComponent("message-element")
export default class MessageComponent extends CustomElementClass {

  styles = `
    .wrap {      
      display: flex;
      flex-direction: column;
            
    }
    
    .wrap.sender {
      align-items: flex-end;

    }
    .wrap.sender .message {
      background-color: ${ Colors.blue };
      text-align: right;
    }
      
    .wrap .message {
      background-color: ${ Colors.primary };
      width: max-content;
      padding: .5rem .7rem;
      border-radius: 4px;
      color: ${ Colors.white };
    }
    .message p {

    }
    .message span {
      font-weight: 500;
      font-size: .7rem; 
      display: block;
      margin-bottom: .4rem;     
    }

    .date {
      font-size: .7rem;
      color: ${Colors.dark};    
      margin-top: .3rem;  
    }
  `;

  render() {
    const wrap = el("div");
    const div = el("div");
    const p = el("p");
    const spanName = el("span");
    const span = el("span");
    const slot = el("slot");

    const name  = this.getAttribute("name");
    const dateStr = this.getAttribute("date");

    const track  = this.getAttribute("track");
    if (track == "receiver") {
      wrap.classList.add("receiver");
    } else {
      wrap.classList.add("sender");
    }


    span.classList.add("date");
    span.textContent = toHumanize(new Date(dateStr! || new Date()));
    spanName.textContent = name || "Azman Abdullah";
    
    p.appendChild(slot)

    div.classList.add("message");
    div.appendChild(spanName);
    div.appendChild(p);

    wrap.classList.add("wrap");
    wrap.appendChild(div);
    wrap.appendChild(span);
    return html`${wrap.outerHTML}`;
  }
}
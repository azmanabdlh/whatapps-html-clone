import CustomElementClass from '@/component/custom-element';
import { el, html, injectComponent } from '@/utils/dom';
import Colors from '@/utils/colors';

import AppBar from '@/component/appbar';
import Message from '@/component/message';

@injectComponent("scene-view")
export default class SceneView extends CustomElementClass {

  styles = `
    .scene-view  {      
      position: relative;
      height: 100vh;
      overflow: hidden;
    }   
   
    .conversation {      
      padding: 0 1rem;
      height: 100vh;
      overflow: scroll;      
    }   
    .conversation div:first-child {
      margin-top: 4rem;
    }

    .conversation div:last-child {
      margin-bottom: 5rem;
    }
    .action {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      background-color: ${Colors.primary};      
      filter: drop-shadow(10px -30px 40px ${Colors.white});
      padding: .6rem .8rem .6rem 0;
    }
    .action div {
      flex: 1;
    }
    .action input::placeholder {
      color:  ${Colors.white};      
      filter: brightness(70%);      
    }
    .action input {
      width: 100%;
      padding: .6rem .8rem;
      font-size: 1rem;
      font-weight: 300;
      background-color: transparent;  
      color: ${Colors.white};  
      border: 1px solid ${ Colors.primary};  
      
      
    }

    .action buttonx :hover {
      filter: brightness(70%);
      cursor: pointer;
    }
    .action input:focus {
      outline: none;
    }

    .action button {
      padding: .6rem .8rem;
      font-size: 1rem;
      font-weight: 500;
      background-color: ${ Colors.secondary};
      color: ${Colors.white};
      border: 1px solid ${ Colors.secondary};
      border-radius: 3px;
    }
  `;


  register(): void {
    new AppBar();
    new Message();
  }

  
  render() {

    let messages: string  = "";

    for(let i =0; i < 100; i++) {
      if (i %2 == 0 ) {
        messages += `<div><message-element track="receiver">Hello world</message-element></div>`;
        continue
      }

      messages += `<div><message-element>Hello world</message-element></div>`;
    }
  
    

    const input = el("input");
    input.setAttribute("placeholder", "Katakan sesuatu...")
    input.setAttribute("autofocus", "on");

    const button = el("button");
    button.textContent = "Send";
    
    return html`
      <div class="scene-view">
        <appbar-element 
          name="Azman Abdullah"
          indicatorOnline="online"
        >
        </appbar-element>

        <div class="conversation">
          ${messages}          
        </div>
        <div class="action">
          <div>
            ${input.outerHTML}
          </div>
            ${button.outerHTML}
        </div>
      </div>
    `;
  }
}
import CustomElementClass from '@/component/custom-element';
import Colors from '@/utils/colors';
import { html, injectComponent } from '@/utils/dom';
import Online from '@/component/online';

@injectComponent("appbar-element")
export default class AppBarElement extends CustomElementClass {

  styles = `
    header {
      padding: .5rem 1rem;      
      border-bottom: 1px solid #dddd;   
      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;      
      left: 0;
      background-color: ${Colors.white};
      filter: drop-shadow(10px 30px 40px ${Colors.white});
      
    }

    header h1 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: .1rem;
    }
  `;

  register(): void {
    new Online();  
  }

  render() {
    const name = this.getAttribute("name");
    const indicatorOnline = this.getAttribute("indicatorOnline");
    
    return html`
      <header>
        <h1>${name}</h1>
        <online-element status="${indicatorOnline}"></online-element>
      </header>
    `;
  }
}
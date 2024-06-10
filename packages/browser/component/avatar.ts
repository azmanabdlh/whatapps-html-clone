import CustomElementClass from '@/component/custom-element';
import Colors from '@/utils/colors';
import { html, injectComponent } from '@/utils/dom';
import { getAcronymName } from '@/utils/strings';

@injectComponent("avatar-element")
export default class Avatar extends CustomElementClass {
  styles = `
    .avatar {
      height: 35px;
      width: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 2px;
      color: ${Colors.white};
    }
    
  
  `;

  render() {
    const name = this.getAttribute("name");

    const acronymName = getAcronymName(name!);

    return html`
      <div class="avatar">${acronymName}</div>
    `;
  }
}
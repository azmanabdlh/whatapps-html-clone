import CustomElementClass from '@/component/custom-element';
import Colors from '@/utils/colors';
import { html, injectComponent } from '@/utils/dom';
import Avatar from '@/component/avatar';

@injectComponent("account-element")
export default class Account extends CustomElementClass {

  styles = `
    .account {
      display: flex;
      cursor: pointer;
      padding: .6rem .8rem;
      border-bottom: 1px dashed ${Colors.dark};
    }

    .account:hover {
      filter: brightness(70%);
      background-color: ${Colors.dark};
      border-bottom: 1px solid ${Colors.dark};
    }
    .account .content {
      width: 100%;      
    }
    .account .content div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;      
      flex: 1;
    }
    .account .content div span {
      display: block;      
    }
    .account .content .name {
      color: ${Colors.white};
    }

    .last-content__date {
      color: ${Colors.white};
      font-size: .7rem;
      filter: brightness(70%);
    }
    .last-content__placeholder {
      color: ${Colors.white};
      filter: brightness(70%);
      font-size: .8rem;
      margin-top: .3rem;
      display: block;
      font-weight: 300;
    }
  
    .account .avatar {
      margin-right: .4rem;
    }
  `;

  register(): void {
    new Avatar();
  }

  render() {
    const name = this.getAttribute("name");
    const color = this.getAttribute("color");
    const lastContent = this.getAttribute("placeholder");
    const lastContentDate = this.getAttribute("placeholder-date"); 

    return html`
      <div class="account">
        <div class="avatar">
          <avatar-element 
            name="${name || 'Azman Abdullah'}"
            color="dodgerblue"
          >
          </avatar-element>
        </div>
        <div class="content">
          <div>
            <p class="name">Azman Abdullah</p>
            <span class="last-content__date">Kemarin 09:20 AM</span>
          </div>
          <span class="last-content__placeholder">hai kamu lagi dimana?</span>
        </div>
      </div>
    `;
  }
}
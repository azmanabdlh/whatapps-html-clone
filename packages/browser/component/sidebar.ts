import CustomElementClass from '@/component/custom-element';
import { html, injectComponent } from '@/utils/dom';
import Colors from '@/utils/colors';
import Account from '@/component/account';

@injectComponent("sidebar-list")
export default class Sidebar extends CustomElementClass {
  styles = `    
    .sidebar {
      background-color: ${Colors.primary};
      box-sizing: border-box;
      min-height: 100vh;      
    }
    .sidebar .action {
      padding: .5rem;
    }

    .sidebar .action button {
      border-radius: 3px;
      background-color: ${ Colors.secondary };
      color: ${ Colors.white };
      padding: .6rem 0rem;
      font-size: 1rem;
      text-align: center;
      width: 100%;
      border: none;
      cursor: pointer;      
    }

    .sidebar .action button:hover {
      filter: brightness(70%);
    }
      
    .account-list {
      overflow: scroll;
      height: 100vh;
    }
  `;

  register(): void {
    new Account();  
  }

  render() {

    let contacts = '';

    for(let i = 0; i < 30; i++) {
      contacts += '<account-element></account-element>';
    }

    return  html`
      <div class="sidebar">
        <div class="action">
          <button>Mulai pesan baru</button>
        </div>

        <div class="account-list">
          ${contacts}
        </div>
      </div>
    `;
  }
}
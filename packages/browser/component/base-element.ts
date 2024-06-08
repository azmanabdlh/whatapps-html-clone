
export default abstract class BaseElement extends HTMLElement {
  protected styles: string;

  constructor() {
    super();    
    this.styles = '';
  }

  connectedCallback(): void {
    const shadow = this.attachShadow({ mode: "open"});    
    shadow.innerHTML = `
      ${this.injectStyles()}
    `;

    const htmlString = this.renderStr();
    if (htmlString === "") {
      shadow.append(this.render())
    } else {
      shadow.innerHTML = htmlString;
    }
  }

  protected injectStyles(): string {
    if (this.styles.trim().length === 0) {
      return '';
    }
    return `
      <style>
        ${this.styles}
      </style>
    `; 
  }

  abstract render(): DocumentFragment
  renderStr(): string {
    return '';
  }
}
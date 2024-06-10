

export type Constructor<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): T;
};

export default abstract class CustomElementClass extends HTMLElement {
  protected styles: string;

  constructor() {
    super();    
    this.styles = '';
  }

  protected register(): void {}

  connectedCallback(): void {    
    this.register();
    
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
    return `
      <style>
        * {
          margin: 0;
          padding: 0;
          font-family: "KoHo", sans-serif;
        }
        
        ${this.styles}
      </style>
    `; 
  }

  abstract render(): DocumentFragment
  renderStr(): string {
    return '';
  }
}

function defineComponent(name: string, element: CustomElementConstructor): void {
  customElements.define(name, element);
}

function el(name: string): HTMLElement {
  return document.createElement(name);
}

function html(strings: TemplateStringsArray, ...values: any[]): DocumentFragment {
  const htmlString = strings.reduce((result, string, i) => {
    return result  + (values[i] || '') + string;
  }, '');

  const template = document.createElement('template');
  template.innerHTML = htmlString.trim();

  
  return template.content;
}

export {
  el, defineComponent, html
};


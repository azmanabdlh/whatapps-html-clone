import type { Constructor }  from "@/component/custom-element";



function defineComponent(name: string, classOrTarget: Constructor<HTMLElement>): void {
  customElements.define(name,  classOrTarget as CustomElementConstructor);
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

// decorator
export function injectComponent(name: string) {    
  return function(classOrTarget: Constructor<HTMLElement>, context?: any) {    
    defineComponent(name, classOrTarget);        
  }
}

export {
  el, html,
  defineComponent,  
};

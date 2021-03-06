class MyCounter extends HTMLElement {

  constructor() {
    super();
    this._counter = 0;
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.display();
  }

  static get observedAttributes() { return [ 'counter' ] }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[attr] = newVal;
    }
  }

  get counter() { return this._counter; }
  set counter(value) {
    if (value != this._counter) {
      this._counter = Number.parseInt(value);
      this.setAttribute('counter', value);
      this.display();
    }
  }

  increment() {
    this.counter = this.counter + 1;
    this.dispatchEvent(new CustomEvent('counter-changed', {detail: {counter: this.counter}}));
  }

  render() {
    console.log('[my-counter] render');
    let container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexFlow = 'row wrap';
    container.style.justifyContent = 'space-around';
    container.style.alignItems = 'center';
    container.style.backgroundColor = '#ffaaaa';
    container.style.padding = '1rem';
    container.style.borderRadius = '0.5rem';
    this.shadowRoot.appendChild(container);

    let button = document.createElement('div');
    button.addEventListener('click', this.increment.bind(this));
    button.style.width = '7rem';
    button.style.height = '7rem';
    button.style.borderRadius = '1rem';
    button.style.margin = '0.5rem';
    button.style.display = 'flex';
    button.style.flexFlow = 'row nowrap';
    button.style.justifyContent = 'center';
    button.style.alignItems = 'center';
    button.style.backgroundColor = '#ddd';
    button.style.cursor = 'pointer';
    button.style.borderWidth = '2px';
    button.style.borderStyle = 'outset';
    button.style.borderColor = 'buttonface';
    button.innerHTML = '<img src="./img/web-components.png">'

    container.appendChild(button);

    this.output = document.createElement('div');
    this.output.style.margin = '0.5rem';
    container.appendChild(this.output);

    this.style.display = 'block';
    this.style.fontSize = '5rem';
  }

  display() {
    this.output.innerHTML = `${this.counter}`;
  }


}

customElements.define('my-counter', MyCounter);

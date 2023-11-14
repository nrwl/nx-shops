type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type JSXify<T extends Element> = Partial<
  Omit<T, 'children'> & { children?: object[] }
>;

enum ProductPriceElementAttribute {
  Value = 'value',
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'nx-shops-product-price': JSXify<ProductPriceElement>;
    }
  }
}

export class ProductPriceElement extends HTMLElement {
  static observedAttributes = [ProductPriceElementAttribute.Value];

  private get displayPrice(): string {
    return '$' + (this.value / 100).toFixed(2);
  }

  get value(): number {
    return +this.getAttribute(ProductPriceElementAttribute.Value);
  }
  set value(price: number) {
    this.setAttribute(ProductPriceElementAttribute.Value, price.toString());
  }

  attributeChangedCallback(name: ProductPriceElementAttribute) {
    switch (name) {
      case ProductPriceElementAttribute.Value: {
        this.textContent = this.displayPrice;
        break;
      }
    }
  }
}
customElements.define('nx-shops-product-price', ProductPriceElement);

export enum CartActionTypes {
  /* eslint-disable @typescript-eslint/no-shadow */
  SetQuantity = '[Cart] Set Quantity',
}

export class SetQuantity {
  readonly type = CartActionTypes.SetQuantity;

  constructor(public productId: string, public quantity: number) {}
}

export type CartAction = SetQuantity;

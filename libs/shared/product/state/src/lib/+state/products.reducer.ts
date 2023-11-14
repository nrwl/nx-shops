import { products } from '@nx-shops/shared/product/data';
import { Product } from '@nx-shops/shared/product/types';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface ProductsState {
  products: Product[];
}

export interface ProductsPartialState {
  readonly [PRODUCTS_FEATURE_KEY]: ProductsState;
}

export const initialState: ProductsState = {
  products: products,
};

export function productsReducer(
  state: ProductsState = initialState,
  action: { type?: string }
): ProductsState {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

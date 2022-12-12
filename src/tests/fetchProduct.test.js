import './mocks/fetchSimulator';
import { fetchProduct, fetchProductsList } from '../helpers/fetchFunctions';
import product from './mocks/product';
import computadorSearch from './mocks/search';

describe('Teste a função fetchProduct', () => {
  it('Testa se fetchProduct é uma função', () => {
    const func = fetchProductsList();
    expect(typeof func).toBe('function')
  });
});

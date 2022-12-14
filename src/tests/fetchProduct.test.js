import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

describe('Teste a função fetchProduct', () => {
  it('testa se fetchProduct é uma função', () => {
    expect(typeof (fetchProduct)).toBe('function')
  });
  it('testa se fetchProduct chama fetch com o argumento do produto "MLB1405519561"', async () => {
    await fetchProduct('MLB1405519561')
    expect(fetch).toHaveBeenCalled();
  })
  it('testa se ao chamar a função com o argumento MLB1405519561, ela utiliza o endpoint desejado', async () => {
    await fetchProduct('MLB1405519561')
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/items/MLB1405519561");
  });
  it('testa se o retorno da função é igual ao product', async () => {
    const result = await fetchProduct('MLB1405519561')
    expect(result).toEqual(product);
  });
  it('testa se a função retorna erro ao chamar sem argumento', async () => {
    expect( await fetchProduct('')).toEqual(new Error('ID não informado'));
  });
});

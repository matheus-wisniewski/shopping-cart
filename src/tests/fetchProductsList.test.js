import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

describe('testa se a função fetchProductsList', () => {
  it('fetchProductsList é uma função', async () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('testa se fetch é chamado ao executar fetchProductList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('testa se fetch é chamado com o endpoint correto ao executar fetchProductList', async () => {
   await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('testa se o retorno da função fetchProductList com o argumento "computador" é igual ao objeto computadorSearch', async () => {
    const func = await fetchProductList('computador');
    expect(func).toEqual(computadorSearch);
  });

  it('testa se, ao chamar a função fetchProductList sem argumento, retorna um erro com a mensagem: "Termo de busca não informado"', async () => {
    try {
      await fetchProductsList();
    } catch (error) {
      expect(error.message).toBe('Termo de busca não informado');
    }
  })
  });
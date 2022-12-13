export const fetchProduct = async (product) => {
  if (product !== undefined) {
    const path = `https://api.mercadolibre.com/items/${product}`;
    const data = await (await fetch(path).then((response) => response.json()));
    return data;
  } return Promise.reject(Error('ID não informado'));
};

export const fetchProductsList = async (product) => {
  const doTheFetch = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const response = await fetch(doTheFetch);
  const data = await response.json();
  if (!product) {
    throw new Error('Termo de busca não informado');
  }
  return data.results;
};

export const fetchProduct = () => {
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

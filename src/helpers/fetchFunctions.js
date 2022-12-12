export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (product) => {
  const getNewFetch = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
  const data = await getNewFetch.json();
  if (!product) throw new Error('Termo de busca não informado');
  return data.results;
};

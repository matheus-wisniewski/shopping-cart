import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const listOfProducts = async () => {
  const data = await fetchProductsList('computador');
  data.forEach((product) => {
    const { id, title, price, thumbnail } = product;
    const object = { id, title, price, thumbnail };
    const InfoOfProducts = createProductElement(object);
    const productsDiv = document.getElementsByClassName('.products');
    productsDiv.appendChild(InfoOfProducts);
    return InfoOfProducts;
  });
};

listOfProducts();

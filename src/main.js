import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const listOfProducts = async () => {
  const itens = await fetchProductsList('computador');
  const products = document.querySelector('.products');
  itens.forEach((item) => {
    const createListOfElements = createProductElement(item);
    products.appendChild(createListOfElements);
  });
};

window.onload = () => {
  listOfProducts();
};

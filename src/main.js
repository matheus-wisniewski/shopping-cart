import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const container = document.querySelector('.products');
const makeAMessageOfLoading = document.createElement('p');
const errorMessage = document.createElement('p');

const loading = () => {
  container.appendChild(makeAMessageOfLoading);
  makeAMessageOfLoading.className = 'loading';
  makeAMessageOfLoading.textContent = 'carregando';
};

const removeLoading = () => {
  makeAMessageOfLoading.remove();
};

const makeAnErrorAlert = () => {
  errorMessage.className = 'error';
  errorMessage.textContent = 'Algum erro ocorreu, recarregue a página e tente novamente';
  container.appendChild(errorMessage);
};

const listOfProducts = async () => {
  loading();
  try {
    const itens = await fetchProductsList('computador');
    removeLoading();
    const products = document.querySelector('.products');
    itens.forEach((item) => {
      const createListOfElements = createProductElement(item);
      products.appendChild(createListOfElements);
    });
  } catch (error) {
    removeLoading();
    makeAnErrorAlert();
  }
};

window.onload = () => {
  listOfProducts();
};

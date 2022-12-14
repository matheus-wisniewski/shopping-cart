import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import { saveCartID, getSavedCartIDs } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const container = document.querySelector('.products');
const makeAMessageOfLoading = document.createElement('p');
const errorMessage = document.createElement('p');
const cart = document.querySelector('.cart__products');

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

async function addProductToCart(product) {
  const doTheFetch = await fetchProduct(product);
  cart.appendChild(createCartProductElement(doTheFetch));
  saveCartID(product);
}

const showOnTheCart = () => {
  const productList = getSavedCartIDs();
  productList.forEach((id) => {
    addProductToCart(id);
  });
};

const listOfProducts = async () => {
  loading();
  try {
    const itens = await fetchProductsList('computador');
    removeLoading();
    const products = document.querySelector('.products');
    itens.forEach((item) => {
      const createListOfElements = createProductElement(item);
      createListOfElements.addEventListener('click', () => {
        addProductToCart(item.id);
      });
      products.appendChild(createListOfElements);
    });
  } catch (error) {
    removeLoading();
    makeAnErrorAlert();
  }
};

window.onload = () => {
  listOfProducts();
  showOnTheCart();
};

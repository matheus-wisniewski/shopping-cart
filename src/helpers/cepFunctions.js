export const getAddress = async (add) => {
  const path = `https://cep.awesomeapi.com.br/json/${add}`;
  const secondPath = `https://brasilapi.com.br/api/cep/v2/${add}`;
  const response = await Promise.any([
    fetch(path), fetch(secondPath),
  ]);

  const data = await response.json();
  return data;
};

export const searchCep = async () => {
  const cepInput = document.querySelector('.cep-input');
  const cartAdress = document.querySelector('.cart__address');

  if (cepInput.value === '00000000') {
    cartAdress.innerText = 'CEP não encontrado';
    return;
  }

  const data = await getAddress(cepInput.value);
  const { city, state, district, address } = data;

  if (data.state === undefined) {
    cartAdress.innerText = 'CEP não encontrado';
  } else {
    cartAdress.innerText = `${address} - ${district} - ${city} - ${state}`;
  }
};

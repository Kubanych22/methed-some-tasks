const list = document.querySelector('.list');

const isExit = (userInput) => (!userInput && userInput === null);

const isNotNecessaryAdd = (userInput) => userInput.trim() === '';

const addLi = (userInput) => {
  const li = document.createElement('li');
  li.textContent = userInput;
  list.insertAdjacentElement('beforeend', li);
};

const clearList = () => {
    list.textContent = '';
};

const fillList = () => {
  const userInput = prompt('Введите строку');
  if (isExit(userInput)) {
    return true;
  }
  if (isNotNecessaryAdd(userInput)) {
    return setTimeout(fillList, 50);
  }
  if (userInput === true) {
    return;
  }
  switch (userInput.trim()) {
    case 'exit':
      return true;
    case 'del':
      list.lastChild.remove();
      return setTimeout(fillList, 50);
    case 'clear':
      clearList();
      break;
    default:
      addLi(userInput);
      return setTimeout(fillList, 50);
  }
  return setTimeout(fillList, 50);
};

setTimeout(fillList, 50);


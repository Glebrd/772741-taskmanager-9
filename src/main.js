
import {getMenuMarkup} from './components/site-menu.js';
import {getSearchMarkup} from './components/search.js';
import {getFiltersMarkup} from './components/filter.js';
import {getBoard} from './components/board.js';

const NUMBER_OF_CARDS = 3;

const addBlock = (container, markup) => {
  container.insertAdjacentHTML(`beforeend`, markup);
};

const main = document.querySelector(`.main`);
const controlSection = main.querySelector(`.main__control`);
addBlock(controlSection, getMenuMarkup());
addBlock(main, getSearchMarkup());
addBlock(main, getFiltersMarkup());
addBlock(main, getBoard(NUMBER_OF_CARDS));


import {getMenuMarkup} from './components/site-menu.js';
import {getSearchMarkup} from './components/search.js';
import {getFiltersMarkup} from './components/filter.js';
import {getBoard} from './components/board.js';
import {getCardsData} from "./data";

const NUMBER_OF_CARDS = 3;

const addBlock = (container, markup) => {
  container.insertAdjacentHTML(`beforeend`, markup);
};

const main = document.querySelector(`.main`);
const controlSection = main.querySelector(`.main__control`);
const cards = getCardsData(NUMBER_OF_CARDS);
addBlock(controlSection, getMenuMarkup());
addBlock(main, getSearchMarkup());
addBlock(main, getFiltersMarkup());
addBlock(main, getBoard(cards.slice(0, 8)));

// const tasksContainer = document.querySelector(`.board__tasks`);

// const renderTasks = (container, numberOfCards) => {
//   container.insertAdjacentHTML(`beforeend`, new Array(numberOfCards)
//     .fill(``)
//     .map(getCardData)
//     .map(getCardMarkup)
//     .join(``));
// };

// renderTasks(tasksContainer, NUMBER_OF_CARDS);

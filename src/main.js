import {getMenuMarkup} from './components/site-menu.js';
import {getSearchMarkup} from './components/search.js';
import {getFiltersMarkup} from './components/filter.js';
import {getBoard, getCards} from './components/board.js';
import {getCardsData, getFilters} from "./data";

const NUMBER_OF_CARDS = 17;
const NUMBER_OF_CARDS_PER_PAGE = 8;

const addBlock = (container, markup) => {
  container.insertAdjacentHTML(`beforeend`, markup);
};

const main = document.querySelector(`.main`);
const controlSection = main.querySelector(`.main__control`);
const cards = getCardsData(NUMBER_OF_CARDS);
addBlock(controlSection, getMenuMarkup());
addBlock(main, getSearchMarkup());
addBlock(main, getFiltersMarkup(getFilters(cards)));
addBlock(main, getBoard(cards.slice(0, NUMBER_OF_CARDS_PER_PAGE)));

const loadMoreButton = main.querySelector(`.load-more`);
const board = main.querySelector(`.board__tasks`);

let currentNumberOfCardsOnPage = NUMBER_OF_CARDS_PER_PAGE;

const onLoadMoreButtonClick = () => {
  addBlock(board, getCards(cards.slice(currentNumberOfCardsOnPage, currentNumberOfCardsOnPage + NUMBER_OF_CARDS_PER_PAGE)));
  currentNumberOfCardsOnPage += NUMBER_OF_CARDS_PER_PAGE;

  if (currentNumberOfCardsOnPage >= NUMBER_OF_CARDS) {
    loadMoreButton.classList.add(`visually-hidden`);
    loadMoreButton.removeEventListener(`click`, onLoadMoreButtonClick);
  }
};

loadMoreButton.addEventListener(`click`, onLoadMoreButtonClick);

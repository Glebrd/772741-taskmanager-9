import {getMenuMarkup} from './components/site-menu.js';
import {getSearchMarkup} from './components/search.js';
import {getFiltersMarkup} from './components/filter.js';
import {getBoard, getCards} from './components/board.js';
import {getCardsData, getFilters} from "./data";

const NUMBER_OF_CARDS = 17;
const NUMBER_OF_CARDS_PER_PAGE = 8;

// Добавление нового элемента на страницу
const addBlock = (container, markup) => {
  container.insertAdjacentHTML(`beforeend`, markup);
};

const main = document.querySelector(`.main`);
const controlSection = main.querySelector(`.main__control`);
// Сохраняем данные для карточек в переменную
const cards = getCardsData(NUMBER_OF_CARDS);

// Добавляем меню
addBlock(controlSection, getMenuMarkup());
// Добавляем поиск
addBlock(main, getSearchMarkup());
// Добавляем фильтр
addBlock(main, getFiltersMarkup(getFilters(cards)));
// Добавляем доску с карточками на страницу
addBlock(main, getBoard(cards.slice(0, NUMBER_OF_CARDS_PER_PAGE)));

const loadMoreButton = main.querySelector(`.load-more`);
const board = main.querySelector(`.board__tasks`);

// Текучщее количество карточек на странице
let currentNumberOfCardsOnPage = NUMBER_OF_CARDS_PER_PAGE;

// Добавление дополнтельных карточек на страницу (по нажатию на кнопку LoadMoreButton)
const onLoadMoreButtonClick = () => {
  addBlock(board, getCards(cards.slice(currentNumberOfCardsOnPage, currentNumberOfCardsOnPage + NUMBER_OF_CARDS_PER_PAGE)));
  currentNumberOfCardsOnPage += NUMBER_OF_CARDS_PER_PAGE;

  if (currentNumberOfCardsOnPage >= NUMBER_OF_CARDS) {
    loadMoreButton.classList.add(`visually-hidden`);
    loadMoreButton.removeEventListener(`click`, onLoadMoreButtonClick);
  }
};

loadMoreButton.addEventListener(`click`, onLoadMoreButtonClick);

import {getCardMarkup} from './card.js';
import {getCardEditMarkup} from "./card-edit";
import {getLoadMoreButtonMarkup} from './load-more-button.js';
import {getSortingMarkup} from './sorting.js';

// Соединяем шаблоны карточек
// const getCards = (numberOfCards) => {
//   let cards = ``;
//   for (let i = 0; i < numberOfCards; i++) {
//     cards += getCardMarkup();
//   }
//   return cards;
// };

const getCards = (items, getTemplate) => {
  const templates = items.map((item) => getTemplate(item));
  return templates.join(``).trim();
};

// Заполняем доску
export const getBoard = (cards) =>
  `<section class="board container">
${getSortingMarkup()}
<div class="board__tasks">
${getCardEditMarkup()}
${getCards(cards.slice(1), getCardMarkup)}
</div>
${getLoadMoreButtonMarkup()}
</section>`;

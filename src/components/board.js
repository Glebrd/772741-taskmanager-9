import {getCardMarkup} from './card.js';
import {getCardEditMarkup} from "./card-edit";
import {getLoadMoreButtonMarkup} from './load-more-button.js';
import {getSortingMarkup} from './sorting.js';

// Соединяем шаблоны карточек
export const getCards = (items, getTemplate = getCardMarkup) => {
  const templates = items.map((item) => getTemplate(item));
  return templates.join(``);
};

// Заполняем доску
export const getBoard = (cards) =>
  `<section class="board container">
${getSortingMarkup()}
<div class="board__tasks">
${getCardEditMarkup(cards[0])}
${getCards(cards.slice(1))}
</div>
${getLoadMoreButtonMarkup()}
</section>`;

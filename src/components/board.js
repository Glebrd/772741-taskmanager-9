import {getCardMarkup} from './card.js';
import {getCardEditMarkup} from "./card-edit";
import {getLoadMoreButtonMarkup} from './load-more-button.js';
import {getSortingMarkup} from './sorting.js';

const getCards = (numberOfCards) => {
  let cards = ``;
  for (let i = 0; i < numberOfCards; i++) {
    cards += getCardMarkup();
  }
  return cards;
};

export const getBoard = (numberOfCards) =>
  `<section class="board container">
${getSortingMarkup()}
<div class="board__tasks">
${getCardEditMarkup()}
${getCards(numberOfCards)}
</div>
${getLoadMoreButtonMarkup()}
</section>`;

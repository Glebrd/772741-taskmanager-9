import {getRandomNumber} from "./util";
import {shuffleArray} from "./util";
// Структура данных для карточки

const DATE_PERIOD = 7;
const MILIESECONDS_IN_DAY = 86400000;
const TAGS_MIN_COUNT = 0;
const TAGS_MAX_COUNT = 3;

const getCardData = () => ({
  description: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + getRandomNumber(-DATE_PERIOD, +DATE_PERIOD) * MILIESECONDS_IN_DAY,
  tags: new Set(shuffleArray([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`,
  ]).slice(TAGS_MIN_COUNT, getRandomNumber(TAGS_MIN_COUNT, TAGS_MAX_COUNT))),
  repeatingDays: {
    'mo': false,
    'tu': false,
    'we': Boolean(Math.round(Math.random())),
    'th': false,
    'fr': false,
    'sa': false,
    'su': false,
  },
  color: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`,
  ][Math.floor(Math.random() * 5)],
  isFavorite: Boolean(Math.round(Math.random())),
  isArchive: Boolean(Math.round(Math.random())),
});

// Структура данных для всех карточек

export const getCardsData = (count) => {
  return new Array(count).fill(``).map(getCardData);
};

// Структура данных для фильтров
export const getFilters = (cards) => {
  return [
    {title: `all`, count: cards.length},
    {title: `overdue`, count: cards.filter((card) => card.dueDate < Date.now()).length},
    {title: `today`, count: cards.filter((card) => Math.floor(new Date() / MILIESECONDS_IN_DAY) === Math.floor(card.dueDate / MILIESECONDS_IN_DAY)).length},
    {title: `favorites`, count: cards.filter((card) => card.isFavorite === true).length},
    {title: `repeating`, count: cards.filter((card) => Object.values(card.repeatingDays).includes(true)).length},
    {title: `tags`, count: cards.filter((card) => card.tags.size !== 0).length},
    {title: `archive`, count: cards.filter((card) => card.isArchive === true).length},
  ];
};


export const getFiltersMarkup = (filters) => `<section class="main__filter filter container">

${(filters).map((filter) => `<input
type="radio"
id="filter__${filter.title}"
class="filter__input visually-hidden"
name="filter"
${filter.title === `all` ? `checked` : ``}
${filter.count === 0 ? `disabled` : ``}
/>
<label for="filter__${filter.title}" class="filter__label">
${filter.title} <span class="filter__${filter.title}-count">${filter.count}</span></label
>`).join(``)}
'</section>`;

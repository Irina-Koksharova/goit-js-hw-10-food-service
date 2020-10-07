import { menuMarkup, menuList, checkbox } from './js/markup';
import { Theme, oncheckboxClick, favoriteTheme } from './js/toggle';

menuList.insertAdjacentHTML('afterbegin', menuMarkup);

document.body.classList.add(Theme.LIGHT);
checkbox.addEventListener('change', oncheckboxClick);

favoriteTheme();

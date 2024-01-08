import modals from './modules/modals';
import sliders from './modules/sliders';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import filter from './modules/filter';

window.addEventListener('DOMContentLoaded', ():void => {
  modals();
  sliders({
    slidesSelector: '.feedback-slider-item',
    dir: 'horizontal', 
    prev: '.main-prev-btn', 
    next: '.main-next-btn',
  });
  sliders({
    slidesSelector: '.main-slider-item',
    dir: 'vertical', 
    prev: null, 
    next: null,
  });
  mask('[name = "phone"]');
  checkTextInputs('[name = "name"]');
  checkTextInputs('[name = "message"]');
  showMoreStyles('.button-styles', '.styles-2');
  filter();
});

import modals from './modules/modals';
import sliders from './modules/sliders';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import calc from './modules/calc';
import burger from './modules/burger';
import accordion from './modules/accordion';

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
  filter();
  pictureSize('.sizes-block');
  showMoreStyles('.button-styles', '#styles .row');
  calc({
    size: '#size',
    material: '#material',
    option: '#options',
    promocode: '.promocode',
    price: '.calc-price',
  });
  burger('.burger-menu', '.burger');
  accordion('.accordion-heading', '.accordion-block');
});

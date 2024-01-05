import modals from './modules/modals';
import sliders from './modules/sliders';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import accordion from './modules/accordion';

window.addEventListener('DOMContentLoaded', ():void => {
  'use strict';

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
  showMoreStyles('.button-styles', '#styles .row');
  calc({
    size: '#size',
    material: '#material',
    option: '#options',
    promocode: '.promocode',
    price: '.calc-price',
  });
  accordion('.accordion-heading', '.accordion-block');
});

import modals from './modules/modals';
import sliders from './modules/sliders';

window.addEventListener('DOMContentLoaded', ():void => {
  'use strict';

  modals();
  sliders({
    slides: '.feedback-slider-item',
    dir: 'horizontal', 
    prev: '.main-prev-btn', 
    next: '.main-next-btn',
  });
  sliders({
    slides: '.main-slider-item',
    dir: 'vertical', 
    prev: '', 
    next: '',
  });
});

'use strict';

const render = (root) => {
  const wrapper = $('<div class="wrapper"></div>');

  wrapper.append(registry( _ => render(root)));

  root.append(wrapper);
};


const state = {
  stations: null,
  selectedStation: null
};

$( _ => {
  const root = $('.root');
  render(root);
  $('.carousel.carousel-slider').carousel({fullWidth: true});

});

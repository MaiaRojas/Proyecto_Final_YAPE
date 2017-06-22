'use strict';

const render = (root) => {
  const wrapper = $('<div class="wrapper"></div>');
  root.empty();
  if (state.selecteScreen== null){
      wrapper.append(registry( _ => {
        render(root);
      }));
  } else if (state.selecteScreen == 2) {
    wrapper.append(termsCond( _ => {
      render(root);
    }));
  }else if (state.selecteScreen == 3) {
    wrapper.append(inputCod( _ => {
      render(root);
    }));
  } else if (state.selecteScreen == 4) {
    wrapper.append(userYape ( _ => {
      render(root);
    }));
  } else if (state.selecteScreen == 5) {
    wrapper.append(yapeOk ( _ => {
      render(root);
    }));
  }
  root.append(wrapper);
};


const state = {
  datos:null,
  code:null,
  user:null,
  phone: null,
  selectedScreen: null
};

const update = function (){
  render(root);
};

$( _ => {
  const root = $('.root');
  render(root);
  $('.carousel.carousel-slider').carousel({fullWidth: true});

});

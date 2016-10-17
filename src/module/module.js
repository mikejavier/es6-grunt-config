import $ from 'jquery';

export function render(container) {
  var el = $('<div class="widget">aksmlkamskla</div>');
  $(el).click(function() {
    console.log('widget click');
  });
  $(container).append(el);
};
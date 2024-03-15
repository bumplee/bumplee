const slider = tns({
    container: '.carousel_block',
    items: 1,
    nav: false,
    controls: false ,
})

document.querySelector('.prev').addEventListener ('click',function () {
    slider.goTo('prev');
  });

document.querySelector('.next').addEventListener ('click',function () {
    slider.goTo('next');
  });


  (function($) {
    $(function() {
      
      $('ul.catalogue_tabs').on('click', 'li:not(.catalogue_tab_active)', function() {
        $(this)
          .addClass('catalogue_tab_active').siblings().removeClass('catalogue_tab_active')
          .closest('div.container').find('div.catalogue_content').removeClass('catalogue_content_active').eq($(this).index()).addClass('catalogue_content_active');
      });
      
    });
    })(jQuery);

$(document).ready(function(){


  function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalogue_item_content_wrapper').eq(i).toggleClass('catalogue_item_content_wrapper_active');
            $('.catalogue_item_content_list').eq(i).toggleClass('catalogue_item_content_list_active');
        })
    });
};

      toggleSlide('.catalogue_item_link');
      toggleSlide('.catalogue_item_content_back'); 

  });

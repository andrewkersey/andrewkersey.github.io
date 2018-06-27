$(function() {
  var window_height = $(window).height()
  $.scrollIt({
      upKey: 38,             // key code to navigate to the next section
      downKey: 40,           // key code to navigate to the previous section
      easing: 'linear',      // the easing function for animation
      scrollTime: 600,       // how long (in ms) the animation takes
      activeClass: 'active', // class given to the active nav element
      onPageChange: null,    // function(pageIndex) that is called when page is changed
      topOffset: 0
  });

  $('.scroll_to').click(function(){
    var nav = $(this).attr('nav')

    $('html, body').animate({
      scrollTop: $('section[data-scroll-index="' + nav + '"]').offset().top
    }, 500);
  })


  $(".down-arrow").mouseenter(function(){
    $(this).animate({"top": "+=8px"}, "fast");
  });

  $(".down-arrow").mouseleave(function(){
    $(this).animate({"top": "-=8px"}, "fast");
  });

  $('#workModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var src = button.data('src');
    var title = button.data('title'); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find('.modal-title').text(title);
    modal.find('img').attr('src', src);
  })

});

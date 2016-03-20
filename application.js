// TODO: Investigate why skills column jumps down to correct position on toggle
// TODO: make skills list items highlight on hover, along with relevant ed/job experience & projects,
// to show where I gained or used each skill

$(document).ready(function(){
    $('nav').hide();
    $('.resume').hide();
    $('button.contact').on('click', function() {
      $('nav').slideToggle();
    })
    $('button.more').on('click', function() {
      $('.resume').slideToggle();
    })
});

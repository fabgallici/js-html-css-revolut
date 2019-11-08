/* RI - Creare la navbar con i vari dropdown del sito: https://www.revolut.com/en-IT
I dropdown però appaiono e scompaiono al click e non al rollover.
Cerco poi di gestire il fatto che possa essere aperto 1 solo dropdown alla volta. */

const $menu = $('.dropdown');

$(document).mouseup(e => {
  if (!$menu.is(e.target) // if the target of the click isn't the container...
    && $menu.has(e.target).length === 0) // ... nor a descendant of the container
  {
    $menu.removeClass('is-active');
  }
});

// $('.toggle').on('click', () => {
//   $menu.toggleClass('is-active');
// });


  $('.toggle').click(function() {

    if ($(this).parent('.dropdown').hasClass('is-active')) { //base funz
      $(this).parent('.dropdown').removeClass('is-active');
    } else if ($('.dropdown').hasClass('is-active')) {
      $('.dropdown').removeClass('is-active');
      $(this).parent('.dropdown').addClass('is-active'); // funz anche con toggle
    } else {
      $(this).parent('.dropdown').addClass('is-active');
    }

  });


$(document).ready(function () {


  
  // $('.dropdown').click(function() {

  //   if ($(this).find('.dropdown-content').hasClass('menu-show')) { //base funz
  //     $(this).find('.dropdown-content').removeClass('menu-show');
  //   } else if ($('.dropdown-content').hasClass('menu-show')) {
  //     $('.dropdown-content').removeClass('menu-show');
  //     $(this).find('.dropdown-content').addClass('menu-show'); // funz anche con toggle
  //   } else {
  //     $(this).find('.dropdown-content').addClass('menu-show');
  //   }
    
  // });

});

    // var clickedMenu = $(this).find('dropdown-content');
    // console.log(clickedMenu);
    // clickedMenu.toggle('menu-show');
    // $('.dropdown').find('dropdown-content').addClass('menu-show');

    // $(".dropdown-content").toggle();
    // $('.dropdown .dropdown-content').toggleClass('menu-show');

    // $('.dropdown-content').hasClass('menu-show').removeClass('menu-show');



    // if ($('.dropdown-content').hasClass('menu-show')) {
    //   console.log('class removed');
    //   $('.dropdown-content').removeClass('menu-show');
    //   $(this).find('.dropdown-content').toggleClass('menu-show');
    // } else {
    //   $(this).find('.dropdown-content').addClass('menu-show'); //add
    // }


    // $(this).find('.dropdown-content').toggleClass('menu-show');
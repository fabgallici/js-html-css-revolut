/* RI - Creare la navbar con i vari dropdown del sito: https://www.revolut.com/en-IT
I dropdown però appaiono e scompaiono al click e non al rollover.
Cerco poi di gestire il fatto che possa essere aperto 1 solo dropdown alla volta. */


$(document).ready(function () {
  

  $('.dropdown').click(function() {
    // var clickedMenu = $(this).find('dropdown-menu');
    // console.log(clickedMenu);
    // clickedMenu.toggle('menu-show');
    // $('.dropdown').find('dropdown-menu').addClass('menu-show');

    // $(".dropdown-menu").toggle();
    // $('.dropdown .dropdown-menu').toggleClass('menu-show');

    // $('.dropdown-menu').hasClass('menu-show').removeClass('menu-show');



    // if ($('.dropdown-menu').hasClass('menu-show')) {
    //   console.log('class removed');
    //   $('.dropdown-menu').removeClass('menu-show');
    //   $(this).find('.dropdown-menu').toggleClass('menu-show');
    // } else {
    //   $(this).find('.dropdown-menu').addClass('menu-show'); //add
    // }

    if ($(this).find('.dropdown-menu').hasClass('menu-show')) { //base funz
      $(this).find('.dropdown-menu').removeClass('menu-show');
    } else if ($('.dropdown-menu').hasClass('menu-show')) {
      $('.dropdown-menu').removeClass('menu-show');
      $(this).find('.dropdown-menu').addClass('menu-show'); // funz anche con toggle
    } else {
      $(this).find('.dropdown-menu').addClass('menu-show');
    }


    // $(this).find('.dropdown-menu').toggleClass('menu-show');
    
  });

});
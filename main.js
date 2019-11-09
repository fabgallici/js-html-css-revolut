/* RI - Creare la navbar con i vari dropdown del sito: https://www.revolut.com/en-IT
I dropdown però appaiono e scompaiono al click e non al rollover.
Cerco poi di gestire il fatto che possa essere aperto 1 solo dropdown alla volta. */


$(document).ready(function () {
  

  $('.dropdown').click(function() {

    $clickedDropdown = $(this).find('.dropdown-menu');

    if ($clickedDropdown.hasClass('is-active')) { //base funz
      $clickedDropdown.removeClass('is-active');
    } else if ($('.dropdown-menu').hasClass('is-active')) {
      $('.dropdown-menu').removeClass('is-active');
      $clickedDropdown.addClass('is-active'); // funz anche con toggle
    } else {
      $clickedDropdown.addClass('is-active');
    }
    
  });

});

    // var clickedMenu = $(this).find('dropdown-menu');
    // console.log(clickedMenu);
    // clickedMenu.toggle('is-active');
    // $('.dropdown').find('dropdown-menu').addClass('is-active');

    // $(".dropdown-menu").toggle();
    // $('.dropdown .dropdown-menu').toggleClass('is-active');

    // $('.dropdown-menu').hasClass('is-active').removeClass('is-active');



    // if ($('.dropdown-menu').hasClass('is-active')) {
    //   console.log('class removed');
    //   $('.dropdown-menu').removeClass('is-active');
    //   $(this).find('.dropdown-menu').toggleClass('is-active');
    // } else {
    //   $(this).find('.dropdown-menu').addClass('is-active'); //add
    // }
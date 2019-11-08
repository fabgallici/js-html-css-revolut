/* RI - Creare la navbar con i vari dropdown del sito: https://www.revolut.com/en-IT
I dropdown però appaiono e scompaiono al click e non al rollover.
Cerco poi di gestire il fatto che possa essere aperto 1 solo dropdown alla volta. */


$(document).ready(function () {
  

  $('.dropdown').click(function() {
    // var clickedMenu = $(this).find('dropdown-content');
    // console.log(clickedMenu);
    // clickedMenu.toggle('menu-show');
    // $('.dropdown').find('dropdown-content').addClass('menu-show');

    // $(".dropdown-content").toggle();
    // $('.dropdown .dropdown-content').toggleClass('menu-show');
    $(this).find('.dropdown-content').toggleClass('menu-show');
  });

});
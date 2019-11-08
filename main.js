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

    // $('.dropdown-content').hasClass('menu-show').removeClass('menu-show');



    // if ($('.dropdown-content').hasClass('menu-show')) {
    //   console.log('class removed');
    //   $('.dropdown-content').removeClass('menu-show');
    //   $(this).find('.dropdown-content').toggleClass('menu-show');
    // } else {
    //   $(this).find('.dropdown-content').addClass('menu-show'); //add
    // }

    if ($(this).find('.dropdown-content').hasClass('menu-show')) { //base funz
      $(this).find('.dropdown-content').removeClass('menu-show');
    } else {
      $(this).find('.dropdown-content').addClass('menu-show');
    }


    // $(this).find('.dropdown-content').toggleClass('menu-show');
    
  });

});
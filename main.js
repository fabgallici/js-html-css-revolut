/* RI - Creare la navbar con i vari dropdown del sito: https://www.revolut.com/en-IT
I dropdown però appaiono e scompaiono al click e non al rollover.
Cerco poi di gestire il fatto che possa essere aperto 1 solo dropdown alla volta. */


$(document).ready(function () {
  
  //Navbar dropdown menu
  $('.dropdown').click(function() {

    var $clickedDropdown = $(this).find('.dropdown-menu');

    if ($clickedDropdown.hasClass('is-active')) { //base funz
      $clickedDropdown.removeClass('is-active');
    } else if ($('.dropdown-menu').hasClass('is-active')) {
      $('.dropdown-menu').removeClass('is-active');
      $clickedDropdown.addClass('is-active'); // funz anche con toggle
    } else {
      $clickedDropdown.addClass('is-active');
    }
    
  });

  // Hamburger Menu Open
  $('.hamburger').click(function() {
    $('.hamburger-menu').addClass('active');
  })
  // Hamburger Menu Close
  $('.hamburger-menu .close').click(function () {
    $('.hamburger-menu').removeClass('active');
  })
  
  //Hamburger Dropdown Menu Complete Vers
  $hambDropClose = $('.hamburger-dropdown .dropdown-close');
  $hambDropClose.click(function() {
    var $currentHambDrop = $(this).parents('.hamburger-dropdown');
    var $currentHambDropMenu = $currentHambDrop.find('.hamburger-dropdown-menu');

    if ($currentHambDropMenu.hasClass('active')) {
      $currentHambDropMenu.removeClass('active');
    } else if ($('.hamburger-dropdown-menu').hasClass('active')) {
      $('.hamburger-dropdown-menu').removeClass('active');
      $currentHambDropMenu.addClass('active'); //togliere per esclusione parziale
    } else {
      $currentHambDropMenu.addClass('active');
    }
    
  });

  //Hamburger Dropdown Menu Base senza Autoesclusione
  // $hambDropClose = $('.hamburger-dropdown .dropdown-close');
  // $hambDropClose.click(function () {

  //   $currentHambDrop = $(this).parents('.hamburger-dropdown');
  //   $currentHambDrop.find('.hamburger-dropdown-menu').toggleClass('active');

  // });

  //Hamburger Dropdown Menu Base senza Autoesclusione Alt version meno specifica
  //Non funziona più, funziona se dropdown-close viene assegnato -> a href 1 lvl sopra
  // $hambDropClose = $('.hamburger-dropdown .dropdown-close');
  // $hambDropClose.click(function() {
  //   $(this).next().toggleClass('active');
  // })
});

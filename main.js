/* RI - Creare la navbar con i vari dropdown del sito: https://www.revolut.com/en-IT
I dropdown però appaiono e scompaiono al click e non al rollover.
Cerco poi di gestire il fatto che possa essere aperto 1 solo dropdown alla volta. */


$(document).ready(function () {
  

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
    console.log('click');
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

  //   $currentHambDrop = $(this).parent('.hamburger-dropdown');
  //   $currentHambDrop.find('.hamburger-dropdown-menu').toggleClass('active');

  // });

  //Hamburger Dropdown Menu Base senza Autoesclusione Alt version meno specifica
  // $hambDropClose = $('.hamburger-dropdown .dropdown-close');
  // $hambDropClose.click(function() {
  //   $(this).next().toggleClass('active');
  // })
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
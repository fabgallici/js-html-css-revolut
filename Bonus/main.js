/* RI - Creare la navbar con i vari dropdown del sito: https://www.revolut.com/en-IT
I dropdown però appaiono e scompaiono al click e non al rollover.
Cerco poi di gestire il fatto che possa essere aperto 1 solo dropdown alla volta. */


$(document).ready(function () {
  
  //Close dropdown menu on click outside
  const $menu = $('.dropdown');

  $(document).mouseup(e => {
    if (!$menu.is(e.target) // if the target of the click isn't the container...
      && $menu.has(e.target).length === 0) // ... nor a descendant of the container
    {
      $menu.removeClass('is-active');
    }
  });

  //Navbar dropdown menu logica Semplificata con esclusione Funziona
  $('.dropdown').click(function () {

    if ($('.dropdown').not(this).hasClass('is-active')) {
      $('.dropdown').not(this).removeClass('is-active');
    } 
    $(this).toggleClass('is-active');

  });
  //Navbar dropdown menu versione semplificata non si richiude al click
  // $('.dropdown').click(function () {
 
  //   $('.dropdown').removeClass('is-active');
   
  //   $(this).addClass('is-active');
  // });

  //Navbar dropdown menu logica Semplificata Alternativa con esclusione Funziona
  // $('.dropdown').click(function () {

  //   if ($('.dropdown').hasClass('is-active')) {
  //     $('.dropdown').removeClass('is-active');
  //     $(this).toggleClass('is-active');
  //   } else {
  //     $(this).toggleClass('is-active');
  //   }
    
  // });

  // Hamburger Menu Open
  $('.hamburger').click(function() {
    $('.hamburger-menu').addClass('active');
  })
  // Hamburger Menu Close
  $('.hamburger-menu .close').click(function () {
    $('.hamburger-menu').removeClass('active');
  })

  //Hamburger Dropdown Menu Complete Vers logica semplificata 2.0
  $hambDropClose = $('.hamburger-dropdown .dropdown-close');
  $hambDropClose.click(function () {
    var $currentHambDrop = $(this).parents('.hamburger-dropdown');

    if ($('.hamburger-dropdown').not($currentHambDrop).hasClass('is-active')) {
      $('.hamburger-dropdown').not($currentHambDrop).removeClass('is-active');
    }

    $currentHambDrop.toggleClass('is-active');

  });
  
  //Hamburger Dropdown Menu Complete Vers logica semplificata
  // $hambDropClose = $('.hamburger-dropdown .dropdown-close');
  // $hambDropClose.click(function () {
  //   var $currentHambDrop = $(this).parents('.hamburger-dropdown');
  //   var $currentHambDropMenu = $currentHambDrop.find('.hamburger-dropdown-menu');

  //   if ($('.hamburger-dropdown-menu').not($currentHambDropMenu).hasClass('active')) {
  //     $('.hamburger-dropdown-menu').not($currentHambDropMenu).removeClass('active');
  //   }

  //   $currentHambDropMenu.toggleClass('active');

  // });

  //Hamburger Dropdown Menu Complete Vers
  // $hambDropClose = $('.hamburger-dropdown .dropdown-close');
  // $hambDropClose.click(function() {
  //   var $currentHambDrop = $(this).parents('.hamburger-dropdown');
  //   var $currentHambDropMenu = $currentHambDrop.find('.hamburger-dropdown-menu');

  //   if ($currentHambDropMenu.hasClass('active')) {
  //     $currentHambDropMenu.removeClass('active');
  //   } else if ($('.hamburger-dropdown-menu').hasClass('active')) {
  //     $('.hamburger-dropdown-menu').removeClass('active');
  //     $currentHambDropMenu.addClass('active'); //togliere per esclusione parziale
  //   } else {
  //     $currentHambDropMenu.addClass('active');
  //   }
    
  // });


    //Navbar dropdown menu
  // $('.dropdown').click(function () {

  //   if ($(this).hasClass('is-active')) {
  //     $(this).removeClass('is-active');
  //   } else if ($('.dropdown').hasClass('is-active')) {
  //     $('.dropdown').removeClass('is-active');
  //     $(this).addClass('is-active');
  //   } else {
  //     $(this).addClass('is-active');
  //   }

  // });
  //Navbar dropdown menu TEST
  // $('.dropdown').click(function () {

  //    if ($('.dropdown').hasClass('is-active')) {
  //     $('.dropdown').removeClass('is-active');
  //     $(this).toggleClass('is-active');
  //   } else {
  //     $(this).toggleClass('is-active');
  //   }

  // });

});

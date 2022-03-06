"use strict";

$(document).ready(function () {
  // slide show
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrow: true,
    dots: true,
    centerMode: true,
    centerPadding: "150px"
  });

  // Menu Button
  $(".menu-toggle").click(function() {
    $(this).toggleClass('active');
    $('.header-nav ul').toggleClass('active');
  });

  // Sub Menu
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
  });

});



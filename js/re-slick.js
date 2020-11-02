$('.newIn__slide').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 3000,
  nextArrow: '<i class="fa fa-angle-right"></i>',
  prevArrow: '<i class="fa fa-angle-left"></i>',
  responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});



$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  speed: 10,
  fade: true,
  asNavFor: '.slider-nav',
  draggable: false
});
$('.slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  focusOnSelect: true,
  nextArrow: '<i class="fa fa-angle-right"></i>',
  prevArrow: '<i class="fa fa-angle-left"></i>',
  responsive: [{
    breakpoint: 1023,
    settings: {
      slidesToShow: 4
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 3
    }
  }
]
});

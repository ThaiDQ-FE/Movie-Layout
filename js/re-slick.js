$('.newIn__slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite:true,
    autoplay:false,
    autoplaySpeed:3000,
    nextArrow: '<i class="fa fa-angle-right"></i>',
    prevArrow: '<i class="fa fa-angle-left"></i>',
    responsive:[{
        breakpoint:768,
        settings:{slidesToShow:2}
        },
        {
        breakpoint:480,
        settings:{slidesToShow:1}
        }]
});


window.onscroll = function() {scrollFunction()};
            
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}
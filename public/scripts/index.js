var TEN_MIN = 600000;
var FIFTEEN_MIN = 900000;

var countDown = (function(date){
  $("#countdown").countdown({
    date: date,
    format: "on",
    interval: 1
  },
  function() {$("#countdown").trigger('stop') });
});

var sliderRestart = (function(){
  $('.slider').slick('unslick');
  sliderInit();
});

var sliderInit = (function(){
  $('.slider').slick({
    vertical: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false
  });
});

window.onload = function() {

  countDown(new Date(new Date().getTime() + FIFTEEN_MIN));
  // countDown("24 february 2018 " + new Date().getHours() + ":" + (new Date().getMinutes()+1) + ":00");
  sliderInit();

  $("#countdown").on('stop', function() {
    $.ajax({url: "/winner", success: function(winner){
      console.log(winner);

      var lastWinner = $("#main-winner").text();
      $("#main-winner").text(winner.name +' #'+ winner.number);
      $('.slider').append("<label class='carousel winners'>" + lastWinner + "</label><br/>");

      // countDown("21 february 2018 " + new Date().getHours() + ":" + (new Date().getMinutes()+1) + ":00");
      countDown(new Date(new Date().getTime() + FIFTEEN_MIN));
      sliderRestart();

    }});
  })
}
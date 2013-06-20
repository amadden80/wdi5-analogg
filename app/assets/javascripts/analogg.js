var second_timer;

function add_second(){
  console.log('Second added.');
  var second = $('<div>');
  second.addClass('second');
  second.css('background-color', random_color());
  $('#seconds .time-holder').append(second);
}

function add_minute(){

}

function add_hour(){

}

function check_time(){

}

function shuffle_seconds(){

}

function shuffle_minutes(){

}

function shuffle_hours(){

}

function random_color(){
  var red = random_rgb_int();
  var green = random_rgb_int();
  var blue = random_rgb_int();
  var color = "rgb("+ red +","+ green +","+ blue +")";
  return color;
}

function random_rgb_int(){
  return _.random(0, 255);
}












//jQuery alternative to $(document).ready(function(){}); that is prettier (less verbose)
$(function(){

  //Second timer
  second_timer = setInterval(add_second, 1000);

});
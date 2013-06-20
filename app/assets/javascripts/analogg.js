var second_timer;

function add_second(){
  var second = $('<div>');
  second.addClass('small-time');
  second.css('background-color', random_color());
  $('#seconds .time-holder').append(second);
}

function add_minute(){
  var minute = $('<div>');
  minute.addClass('small-time');
  minute.css('background-color', random_color());
  $('#minutes .time-holder').append(minute);
}

function add_hour(){
    var hour = $('<div>');
  hour.addClass('big-time');
  hour.css('background-color', random_color());
  $('#hours .time-holder').append(hour);
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
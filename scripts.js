var colorIndex = ['red', 'yellow', 'green', 'blue'];
var interval = null;
var counter = colorIndex.length; // array indexes

$(document).ready(function(){
  console.log('jQuery Ready');
  // create application that creates colored `<div>` tag each time the corresponding color is clicked.
  // TODO: append div to DOM when colored box clicked

  // NOTE: Start: As each color (button) is clicked, it should increment the corresponding label.
  // NOTE: when buton clicked, move on to next color

  // use jQuery's `.data()` method to retrieve the `data-color` HTML attributes.
  // NOTE: use .data to get 'data-color' from DOM


//
// colorIndex.forEach(function(need parameter________, index){
// var box = $('<span>&Phi;</span>');
// if index === 0) {
//   $box.addClass('active');
// } // if index === 0) {
// $('.container').append('$box'); // QUESTION: CORRECT DIV?
// } // colorIndex.forEach(function(){
//
$('.color-button').on('click', function() {
console.log('CLICKED!');
nextButton();
clearInterval(interval);
updateNextInterval();
$(this).attr('data-id', 'exported');
}); // FOR: $('.color-button').on('click', function() {

// //data-color clicks come in
// // $(data-color="red")
// // data-color="yellow"
// // data-color="green"
// // data-color="blue"
// // Out to <span id="___">0</span> zero value
// If red is clicked, <span id="red">0</span> ++
// If yellow is clicked, <span id="yellow">0</span> ++
// If green is clicked, <span id="green">0</span> ++
// If blue is clicked, <span id="blue">0</span> ++
// $('#').text(counter++)

// NOTE: Testing for data import
//  Retrieveing Data:
console.log($(this).data("id"));
console.log($('#container').attr("data-id"));
// console.log($('#container').getElementsById('data-id');
console.log($('getElementsById').get('data-id');
var test = $(this).data("data-id")
console.log(test);
var testTwo = $(this).attr('data-id');
console.log(testTwo);
// Assigning Data:
$(this).attr('data-id', 'exported');


}); // NOTE: FOR: $(document).ready(function(){


function updateNextInterval (index) {
  $('.active').removeClass('active');
  $('#container').children().eq(index).addClass('active');
} // FOR: function updateNextInterval (index) {

  function nextButton () {
    if (counter === colorIndex.length - 1) {
      counter = 0;
    } else {
    counter++;
  } // FOR:  } else {
} // FOR: function nextButton () {

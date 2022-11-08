var today = new Date();
var time = today.getHours();
console.log(time);
var previousHour = time - 1;
//console.log(previousHour);
var nextHour = time + 1;
//console.log(nextHour);
var todayDate = dayjs();
//$("#1a").text(today.format("MMM D, YYYY"));

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//jquerry function $ that after html is loaded .ready the function begins
$(document).ready(function () {
  // created a variable saveBtn and linked to a jquerry function $ for the class btn
  var saveBtn = $(".btn");
  //the saveBtn on click performs another functoin
  saveBtn.on("click", function () {
    // this function sets a variable textValue and looks to the "this" element that selects the div I am working in and looks to siblings and define the sibling as the class .description and sets .val or the value
    var textValue = $(this).siblings(".description").val();
    // set varible timeValue that looks to the parent attribute of ID
    var timeValue = $(this).parent().attr("id");
    // this stores the key and value in local storage.
    //key      //value
    localStorage.setItem(timeValue, textValue);
  });
  //checks the local storage on each area for values stored in description
  $("#8 .description").val(localStorage.getItem("8"));
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  function timeBlockColor() {
    $(".time-block").each(function () {
      var currentHour = parseInt($(this).attr("id"));
      if (currentHour < time) {
        $(this).addClass("past");
      }
    });
  }
  timeBlockColor();
  // var currentTime = today.getHours();
  // console.log(currentTime);
  // if("hour-" + currentTime !===  )
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
});

// function hoursToCurrentTime() {
//   var thePreviousHour = document.getElementById("pastHour");
//   thePreviousHour.textContent = 5;
// }

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input  the click listener
  // research this element
  // local storage. HINT: What does `this` reference in
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// var currentDate = $("#currentDay");
// currentDate.text(moment().format('mm Do yy"'));

// saveButton.on("click, function")(){
//   var eventText = $(this).Sibling(('eventText'))

// }

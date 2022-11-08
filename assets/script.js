var today = new Date();
var time = today.getHours();
console.log(time);

//jquerry function $ that after html is loaded .ready the function begins
$(document).ready(function () {
  // created a variable saveBtn and linked to a jquerry function $ for the class btn
  var saveBtn = $(".btn");
  //the saveBtn on click performs another functoin
  saveBtn.on("click", function () {
    // this function sets a variable textValue and looks to the "this" element that selects the div  and looks to siblings and define the sibling as the class .description and sets the value
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

  // code to apply the past, present, or future class to each time
  // jquery function that selects timeblock.each for all areas that have time-block
  function timeColor() {
    $(".time-block").each(function () {
      var currentHour = parseInt($(this).attr("id"));
      // changes the color based on if time is before or after current time.
      if (currentHour > time) {
        $(this).addClass("past");
      } else if (currentHour < time) {
        $(this).addClass("future");
      } else $(this).addClass("present");
    });
  }
  //calls function for timeColor to execute code
  timeColor();
  //displays the current date in the header of the page.
  $("#currentDay").text(today);
});

$(function () {});

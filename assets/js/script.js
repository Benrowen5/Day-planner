// display current day/date to top of page
// format for day/date 
var currentDate = moment().format("dddd MMMM Do, YYYY");
$("#currentDay").text(currentDate);

// function to color code the time-block based on the current hour of the day
function timeChecker() {
    // define the current hour
    var currentTime = moment().hour();
    // find each element with time-block class and iterate through each to apply color based on time
    $(".time-block").each(function() {
        var timeBlockId = $(this).attr("id");
        if(timeBlockId == currentTime ) {
            $(this).addClass("present")
        } if (timeBlockId < currentTime) {
            $(this).addClass("past");
        } if (timeBlockId > currentTime) {
            $(this).addClass("future")
        }
    });
};
// call for color coding
timeChecker();

// when a save button is clicked, save items to localStorage
$(".saveBtn").on("click", function() {
    // pull id attribute for each hour time block and entered text
    var hour = $(this).parent().attr("id");
    var text = $(this).siblings("textarea").val().trim();
    localStorage.setItem(hour, text);
});

// load any value saved in localStorage
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


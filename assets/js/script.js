// add day to the top of the page
var items = {};

// display current day/date to top of page
var currentDate = moment().format("dddd MMMM Do, YYYY");
$("#currentDay").text(currentDate);
var currentTime = moment().hour();

// function to color code the time-block based on the current hour of the day
function timeChecker() {
    var currentTime = moment().hour();
    console.log(currentTime);
    debugger;
    $(".time-block").each(function() {
        var timeBlockId = $(this).attr("id");
        console.log(timeBlockId);
        if(currentTime === timeBlockId ) {
            $("textarea.description").addClass("present")
        } else if (currentTime > timeBlockId) {
            $(this).addClass("past");
        } else {
            $("textarea.description").addClass("future")
        }
    })
};
    

timeChecker();


// when a save button is clicked, save items to localStorage
$(".saveBtn").on("click", function() {
    var hour = $(this).parent().attr("id");
    var text = $(this).siblings("textarea").val().trim();
    
    console.log(text);
    console.log(hour);
    localStorage.setItem(hour, text);
});

// load any value saved in localStorage
$("").val(localStorage.getItem(""));



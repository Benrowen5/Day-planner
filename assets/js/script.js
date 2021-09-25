// add day to the top of the page
var items = {};

// display current day/date to top of page
var currentDate = moment().format("dddd MMMM Do, YYYY");
$("#currentDay").text(currentDate);


// when a save button is clicked, save items to localStorage
$(".save-button").on("click", function() {
    var text = $(this).siblings("textarea").val().trim();
    var hour = $(this).parent().attr("id");
    console.log(text);
    console.log(hour);
    localStorage.setItem(hour, text);
});

// want to store the textarea text, and save it with the hour that it was entered in at
// need to set up the localStorage format

// load any value saved in localStorage
$("#eightAm textarea").val(localStorage.getItem("eightAm"))

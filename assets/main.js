// function to display current day/time
var date = $(".dateTime");
var getDate = function() {

    today = moment(new Date());
    // Day, Month, Date, Year, time
    date.html(today.format("dddd, MMMM Do, YYYY, h:mm:ss a"));
};
// setInterval for current time
$(document).ready(function() {
    setInterval(getDate, 100);
});



// function to color code past, present, and future time blocks 
var highlight = function() {
    $("tbody tr").each(function() {
        console.log($(this));
        // get current timeBlock
        var timeBlock = $(this).attr("id").split("hour-").at(1);
        console.log($(this));
        console.log($(this).attr('id'));
        console.log($(this).attr('id').split("hour-"));
        // get the current Hour
        var dateTime = moment().hour();
        // if(timeBlock > dateTime)
        if (timeBlock < dateTime) {
            // turn those timeBlocks grey
            $(this).addClass("past");
            $(this).removeClass("future present");
            // if(timeBlock = dateTime)
        } else if (timeBlock > dateTime) {
            // turn that block green
            $(this).addClass("future");
            $(this).removeClass("past present");
            // if(timeBlock > dateTime)
        } else {
            // turn future time blocks pink
            $(this).addClass("present");
            $(this).removeClass("future past");
        }
    });

}

highlight();

// function to enable type event/task onClick of add btn
$(".btnAdd").on("click", function() {
    console.log($(this).parent().siblings(".event").children("textarea").val());
    var task = $(this).parent().siblings(".event").children("textarea").val();
    var timeBlock = $(this).parent().siblings('.event').children("textarea").attr("id");
    console.log(timeBlock);
    // save to local storage
    localStorage.setItem(timeBlock, task);
});


// function to store task on refresh
$("textarea").each(function() {
    console.log($(this).attr("id"));
    $(this).val(localStorage.getItem($(this).attr("id")));
});


// function for delete btn
$('.btnDelete').click(function() {
    console.log($(this).parent().siblings(".event").children("textarea").val());
    var task = console.log($(this).parent().siblings(".event").children("textarea").val());
    var timeBlock = $(this).parent().siblings('.event').children("textarea").attr("id");
    console.log(timeBlock);

    $("textarea").each(function() {
        console.log($(this).attr("id"));
        $(this).val(localStorage.getItem($(this).attr("id")));
        $(this).val(localStorage.empty($(this).attr("id")));
    })

});


// need to figure out how to delete just one item
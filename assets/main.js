// function to display current day/time
var date = $('.dateTime');
var getDate = function() {

    today = moment(new Date());
    // Day, Month, Date, Year, time
    date.html(today.format('dddd, MMMM Do, YYYY, h:mm:ss a'));
};
// setInterval for current time
$(document).ready(function() {
    setInterval(getDate, 100);
});





// function to color code past, present, and future time blocks 
var highlight = function() {
    $('tbody tr').each(function(hour) {
        console.log($(this));
        // get current timeBlock
        var timeBlock = $(this).attr('id').split('hour-')[1];
        console.log(timeBlock);
        // get the current Hour
        var dateTime = moment().hour();
        // if(timeBlock > dateTime)
        if (timeBlock < dateTime) {
            // turn those timeBlocks grey
            $(this).addClass('past');
        } else if (timeBlock === dateTime) {
            $(this).removeClass('past future');
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    });


    // if time is now, highlight the appropriate timeBlock Green
};

highlight();

// function to enable type event/task onClick
var taskInput = $('.event');

var typeTask = function() {
    taskInput.click(function() {

    })
}


$('.btnAdd').on('click', function() {
    console.log($(this).parent().siblings(".event").children("textarea").val());
    var task = $(this).parent().siblings(".event").children("textarea").val();
    var timeBlock = $(this).parent().siblings(".event").children("textarea").attr('id');
    console.log(timeBlock);

    localStorage.setItem(timeBlock, task);
});


$('textarea').each(function() {
    console.log($(this).attr('id'));
    $(this).val(localStorage.getItem($(this).attr('id')));
})



// function for save btn
var addTask = function() {
    // onClick it saves the event entered above in local storage


    // if page is refreshed, the saved task is still shown
}



// function for delete btn
var deleteTask = function() {
    $('.btnDelete').click(function() {

    })
}
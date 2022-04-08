// function to display current day/time
// Day, Month, Date, Year, time
// setInterval for time
var date = $('.dateTime');
var getDate = function() {

    today = moment(new Date());

    date.html(today.format('dddd, MMMM Do, YYYY, h:mm:ss a'));
};

$(document).ready(function() {
    setInterval(getDate, 100);
});





// function to color code current time and past time
var highlight = function() {
    $('tbody tr').each(function(hour) {
            console.log($(this));
            var timeBlock = $(this).attr('id').split('hour-')[1];
            console.log(timeBlock);
            var dateTime = moment().hour();
            if (timeBlock < dateTime) {
                $(this).addClass('past');
            }

        })
        // if(timeBlock > dateTime)
        // turn those timeBlocks grey

    // if time is now, highlight the appropriate timeBlock Green
}

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
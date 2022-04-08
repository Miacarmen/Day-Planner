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


$('.content-container').addClass('background-color', blue);




// function to color code current time and past time
var highlight = function() {
    // if(timeBlock > dateTime)
    // turn those timeBlocks grey

    // if time is now, highlight the appropriate timeBlock Green
}


// function to enable type event/task onClick
var taskInput = $('.event');

var typeTask = function() {
    taskInput.click(function() {

    })
}



// function for save btn
var addTask = function() {
    // onClick it saves the event entered above in local storage
    $('.btnAdd').click(function() {

    })

    // if page is refreshed, the saved task is still shown
}



// function for delete btn
var deleteTask = function() {
    $('.btnDelete').click(function() {

    })
}
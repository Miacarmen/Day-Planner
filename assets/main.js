// function to display current day/time
// Day, Month, Date, Year, time
// setInterval for time
var date = $('#dateTime');
var getDate = function() {

    today = moment(new Date());

    date.html(today.format('dddd, MMMM Do, YYYY, h:mm:ss a'));
};

$(document).ready(function() {
    setInterval(getDate, 100);
});


$('.content-container').addClass('background-color', blue);

// function to color code current time and past time


// function to enable time block onclick and type event/task


// function for save btn

// onClick it saves the event entered above in local storage



// if page is refreshed, the saved task is still shown

//using JQuery functions to add todays date
var date = moment();
//formating the date in Day, Month date and then year.
var currentDate = date.format('dddd, MMM Do YYYY');

console.log(currentDate);
//making the text of the p element with ID current day the currentDate
$('#currentDay').text(currentDate);


//setting the time to the different colors

function determinePastPresentFuture(){
    //variable to determine the current time
    var timeNow = moment().hour();
    //console.log(timeNow);

    $(".time").each(function(){
        console.log(this);
        console.log(($(this).attr('id')));

        //making the IDs an integer 
        var scheduleTime = parseInt($(this).attr('id'));
        console.log(scheduleTime);

        if(scheduleTime === timeNow){
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else if(scheduleTime < timeNow){
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");

        }
        else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }


    });
}

determinePastPresentFuture();
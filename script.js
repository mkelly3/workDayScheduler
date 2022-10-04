
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
        //console.log(this);
        //console.log(($(this).attr('id')));

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

//when the save button is clicked save text inputed 
$(document).ready(function(){

    $(".saveBtn").on('click',function(){

        var scheduleData = {
            //using DOM elements to call the sibling of the button which is the textarea
            content: $(this).siblings(".textEvent").val(),
            //parent element of the saveBTn is the row with an id of a time
            timeShown: $(this).parent().attr("id")
        };
        console.log(scheduleData);
        //localStorage.setItem("scheduleData", JSON.stringify(scheduleData));
        localStorage.setItem(scheduleData.timeShown,scheduleData.content);
    
    })


})


determinePastPresentFuture();

//Setting the item from local storage
$("#8 .textEvent").val(localStorage.getItem("8"));
$("#9 .textEvent").val(localStorage.getItem("9"));
$("#10 .textEvent").val(localStorage.getItem("10"));
$("#11 .textEvent").val(localStorage.getItem("11"));
$("#12 .textEvent").val(localStorage.getItem("12"));
$("#13 .textEvent").val(localStorage.getItem("13"));
$("#14 .textEvent").val(localStorage.getItem("14"));
$("#15 .textEvent").val(localStorage.getItem("15"));
$("#16 .textEvent").val(localStorage.getItem("16"));
$("#17 .textEvent").val(localStorage.getItem("17"));
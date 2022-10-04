var date = moment();

var currentDate = date.format('dddd, MMM Do YYYY');

console.log(currentDate);

$('#currentDay').text(currentDate);
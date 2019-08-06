// Set month + 1 to text
var currentMonth = new Date();
var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthArraySet;

// Set next month to Jan if we're in December.
if(currentMonth.getMonth() == 11) {
  monthArraySet = monthArray[currentMonth.getMonth()-11];
} else {
  monthArraySet = monthArray[currentMonth.getMonth()+1];
}

// Write to the DOM.
// document.addEventListener("load", function(event) {
document.getElementById('currentMonth').innerHTML = 'in ' + monthArraySet;
// });

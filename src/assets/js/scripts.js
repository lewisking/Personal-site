// Set month + 1 to text

var currentMonth = new Date();
var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthArraySet = monthArray[currentMonth.getMonth()+1];

document.getElementById('currentMonth').innerHTML = 'in ' + monthArraySet;

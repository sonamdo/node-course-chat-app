var moment = require('moment');

var date = moment();
date.add(1,'year').subtract(9, 'months')
console.log(date.format('h:mm a'));

// var date = new Date();
// var months = ['Jan', 'Feb'];
// console.log(date.getMonth());

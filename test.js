var ClozeCard = require('./ClozeCard.js');
var BasicCard = require('./BasicCard.js');
//test cloze card
var c = ClozeCard('this test is a test', 'test');
console.log(c);

//test basic card
var b = BasicCard("what animal is year 2018?", "Dog");
console.log(b);
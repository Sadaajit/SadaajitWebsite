
var adjective = prompt("Please enter an adjective");
var noun1 = prompt('Please provide a noun.');
var adverb = prompt('Now I need an adverb.');
var verb = prompt('Time for a past tense verb.');
var noun2 = prompt('One last noun and we are done.');
var node = document.getElementById("output")
var msg = '<p>I found a ' + adjective + ' ' + noun1 + '. It ran away from me, but I ' + adverb + ' ' + verb + ' into action and caught it with a ' + noun2 + '.</p>';
node.innerHTML = msg;

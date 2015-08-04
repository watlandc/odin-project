var first = 0;
var second = 1;
var total = first + second;
var terms = [];

while (total < 4000000) {
  terms.push(total);
  first = second;
  second = total;
  total = first + second;
}
alert(terms);

var sum = 0;

for (var i = 0; i < terms.length; i++) {
  if (terms[i] % 2 === 0) {
    sum = sum + terms[i];
  }
}
alert(sum);
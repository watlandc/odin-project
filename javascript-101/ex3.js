function largest_factor(num) {
  
  var prime = [];

  for (var i = 2; i < num; i++) {
    prime.push(i);
    for (var j = 2; j < i; j++) {
      if (i % j === 0) {
        prime.pop(i);
        break;
      }
    }
  }

  var fac = [];

  for (var i = num/2; i > 1; i--) {
    for (var j = 2; i < num; i++) {
      if (i * j === num) {
        fac.push([i], [j]);
      }
    }
  }
  alert(fac);
}
largest_factor(58);
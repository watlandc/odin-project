var arr = [];
for (var i = 0; i < 1000; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		arr.push(i);
	}
}

var total = 0;
for (var j = 0; j < arr.length; j++) {
  total = total + arr[j];
}

alert(total);


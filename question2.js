var i = 0; x = 1; y = 0; sum = 0;
while (i < 4000000){
    i = x + y;
	if (i % 2 === 0){
	sum = sum + i;
	}
	y = x;
	x = i;
}
console.log(sum)
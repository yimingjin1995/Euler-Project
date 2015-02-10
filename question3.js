var num = 600851475143;
for(i = 2; i <= num; i++){
	while(n != i){
		if(num % i ===0){
			console.log(i);
			num = num / i;
		} else{
			break;
		}
	}
}
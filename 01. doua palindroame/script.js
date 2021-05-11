// Verificarea palindroamelor


function palindromCheck(in1, in2) {

	limita1 = in1.length;
	limita2 = in2.length;

	if ( limita1 == limita2 ) {

		reversedString2 = in2.split('').reverse().join('');
				
		if (in1 == reversedString2) {
			console.log(true);
		} else {
			console.log(false);
		}
	} else {
		console.log(false);
	}

}

palindromCheck('ana', 'ana');
/* const string1 = 'abcabc';
const string2 = 'aabbcc';
	
const arr1 = string1.split('');
const arr2 = string2.split('');
console.log(arr1);
console.log(arr2);

const arrLimit1 = arr1.length;
const arrLimit2 = arr2.length;

arrLimit1 != arrLimit2 ?  console.log('Strings are different') : compareStrings(); */
/* 
function compareStrings() {
	let cont1 = 0;
	for (let i = 0; i < arrLimit1; i++) {
		for (let j = i + 1; j < arrLimit1 - 1; j++) {
			if (arr1[i] === arr1[j]) {
				cont1++;
			}
		} console.log(cont1);
	} 
}
*/


/*
function compareStrings() {
const folosite = [];
let x=0;
//const arrLimit3 = folosite.length;	
	for (let i = 0; i < arrLimit1; i++) {
		let cont1 = 0;
		let cont2 = 0;
		let litera = arr1[i];
//		console.log(litera);
//		console.log(folosite);
		
		 	if (folosite.indexOf(litera) == -1) {
		 		
//				console.log('am inceput rularea');
				for (let j = i; j < arrLimit1; j++){
					if (litera === arr1[j]) {
						cont1++; 
					}
					if (litera === arr2[j]) {
						cont2++;
					}		
				}
			
//				console.log('am gasit '+cont1+' de '+litera+' in primul vector');
//				console.log('am gasit '+cont2+' de '+litera+' in al doilea vector');
			
				if (cont1 === cont2) {
//									console.log(litera);
//									console.log('Acelasi numar de '+litera+' in ambii vectori');
									} else {
										console.log('vectori diferiti');
										x=1;
										break; 
										}

				folosite.push(litera);
//				console.log(folosite);

			} else {
				console.log('litera a fost deja verificata'); 
			}
		
	}
if(x!=1) console.log('vectori la fel');
} */

/*

const string1 = 'abcabc';
const string2 = 'aabbcc';
	
const arr1 = string1.split('');
const arr2 = string2.split('');
console.log(arr1);
console.log(arr2);

const arrLimit1 = arr1.length;
const arrLimit2 = arr2.length;

arrLimit1 != arrLimit2 ?  console.log('Strings are different') : compareStrings();

function compareStrings() {

	const folosite = [];
	let x = 0;
		
		for (let i = 0; i < arrLimit1; i++) {
			let cont1 = 0;
			let cont2 = 0;
			let litera = arr1[i];
			
			 if (folosite.indexOf(litera) == -1) {
			 		
				for (let j = i; j < arrLimit1; j++){
					if (litera === arr1[j]) {
						cont1++; 
					}
					if (litera === arr2[j]) {
						cont2++;
					}		
				}
				
				if (cont1 != cont2) {
					console.log(false);
					x = 1;
					break; 
				}

				folosite.push(litera);

			}
			
		}

	if(x != 1) console.log(true);


}

*/


function compareStrings(string1, string2) {

	const arrLimit1 = string1.length;
	const arrLimit2 = string2.length;

	if (arrLimit1 != arrLimit2) { 

		console.log(false);

	} else {

		const arr1 = string1.split('');
		const arr2 = string2.split('');
		const folosite = [];
		let control = 0;
			
			for (let i = 0; i < arrLimit1; i++) {
				let cont1 = 0;
				let cont2 = 0;
				let char = arr1[i];
				
				 if (folosite.indexOf(char) == -1) {
				 		
					for (let j = i; j < arrLimit1; j++){
						if (char === arr1[j]) {
							cont1++; 
						}
						if (char === arr2[j]) {
							cont2++;
						}		
					}
					
					if (cont1 != cont2) {
						console.log(false);
						control = 1;
						break; 
					}

					folosite.push(char);

				}
				
			}

		if (control != 1) console.log(true);

	}

}

compareStrings('abcabc', 'aabbcc');
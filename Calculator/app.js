function add(a = []) {
	let ans = 0;
	for (i in a) {
		ans += parseInt(a[i]);
	}
	return ans;
}

function subtraction(arr) 
 {
	 let result = arr[0];
	arr.forEach((e,i) => {
		if (i==0){
			
		}
		else{
			result-=e;
		}
	});
	return result;
  }

function mult(a = []) {
	let ans = 1;
	for (i in a) {
		ans *= parseInt(a[i]);
	}
	return ans;
}
function div(a, b) {
	if (b == 0) {
		alert('The denominator must be different from zero.');
		return;
	}
	return a / b;
}
(function () {
	const op = prompt('Choose your operation ( +, -, * or / ): ');

	if (op == '+') {
		let arr = new Array();
		numberOfelems = prompt('how many nums? ');
		for (let i = 0; i < parseInt(numberOfelems); i++) {
			arr[i] = parseFloat(prompt('enter number ' + (i + 1)));
		}
		alert((add(arr)));
	} else if (op == '-') {
		let arr = new Array();
		numberOfelems = prompt('how many nums? ');
		for (let i = 0; i < parseInt(numberOfelems); i++) {
			arr[i] = parseFloat(prompt('enter number ' + (i + 1)));
		}
		alert((subtraction(arr)));
		
	} else if (op == '*') {
		let arr = new Array();
		numberOfelems = prompt('how many nums? ');
		for (let i = 0; i < parseInt(numberOfelems); i++) {
			arr[i] = parseFloat(prompt('enter number ' + (i + 1)));
		}
		alert((mult(arr)));
	} else {
		const number1 = parseFloat(prompt('Enter first number: '));
		const number2 = parseFloat(prompt('Enter second number: '));

		alert((div(number1, number2)));
	}
})();

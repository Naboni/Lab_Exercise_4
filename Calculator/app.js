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
function findMax(a = []){
	maxValue = a[0];
	for (let i of a){
		if (i> maxValue){
			maxValue = i;
		}
	}
	return maxValue;
}
function findMin(a = []){
	minValue = a[0];
	for (let i of a){
		if (i< minValue){
			minValue = i;
		}
	}
	return minValue;
}

function sqr(a){
	return a * a;
}


(function () {
	const op = prompt('Choose your operation ( 1 for Addition \n 2 for Substraction \n 3 for Multiplication\n 4 for Division \n 5 for average \n 6 for max \n 7 for min \n 8 for square): ');

	if (op == '1') {
		let arr = new Array();
		numberOfelems = prompt('how many nums? ');
		for (let i = 0; i < parseInt(numberOfelems); i++) {
			arr[i] = parseFloat(prompt('enter number ' + (i + 1)));
		}
		alert((add(arr)));
	} else if (op == '2') {
		let arr = new Array();
		numberOfelems = prompt('how many nums? ');
		for (let i = 0; i < parseInt(numberOfelems); i++) {
			arr[i] = parseFloat(prompt('enter number ' + (i + 1)));
		}
		alert((subtraction(arr)));
		
	} else if (op == '3') {
		let arr = new Array();
		numberOfelems = prompt('how many nums? ');
		for (let i = 0; i < parseInt(numberOfelems); i++) {
			arr[i] = parseFloat(prompt('enter number ' + (i + 1)));
		}
		alert((mult(arr)));
	} else if (op == '4'){
		const number1 = parseFloat(prompt('Enter first number: '));
		const number2 = parseFloat(prompt('Enter second number: '));
		alert((div(number1, number2)));

	}else if (op == '5'){
		let arr = new Array();
		numberOfelems = prompt('how many nums? ');
		for (let i = 0; i < parseInt(numberOfelems); i++) {
			arr[i] = parseFloat(prompt('enter number ' + (i + 1)));
		}
		alert(add(arr)/arr.length);
	}
	else if (op == '6'){
		let arr = new Array();
		numberOfelems = prompt('how many nums? ');
		for (let i = 0; i < parseInt(numberOfelems); i++) {
			arr[i] = parseFloat(prompt('enter number ' + (i + 1)));
		}
		alert(findMax(arr));
	}
	else if (op == '7'){
		let arr = new Array();
		numberOfelems = prompt('how many nums? ');
		for (let i = 0; i < parseInt(numberOfelems); i++) {
			arr[i] = parseFloat(prompt('enter number ' + (i + 1)));
		}
		alert(findMin(arr));
	}else if (op == '8'){
		num = prompt("number: ");
		alert(sqr(num));
	}else{
		alert("Wrong insertion")
	}

})();


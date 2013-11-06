function alex(number){
	function fib (n) {
		if (n < 2) {
			return n;
		} else {
			return fib(n - 1) + fib(n - 2);
		}
	}

	function fib_loop (max) {
		var i = 2;
		var n = 0;
		var n_minus_1 = 1;
		var n_minus_2 = 0;

		while (i < max) {
			n = n_minus_1 + n_minus_2;
			n_minus_2 = n_minus_1;
			n_minus_1 = n;
			i += 1;
		}
		return n;
	}
	return [fib(number),fib_loop(number)]
}

function matt(number){
	var fibonacci = function(n) {
		if (n < 2) {
			Date
			return n;
		} else {
			return (fibonacci(n-1) + fibonacci(n-2));
		}  
	}
	var fib_loop = function(max) {
		var i = 2; 
		if (max == 2 || max == 3){ return 1};
		var n = 0; 
		var n_minus_1 = 1; 
		var n_minus_2 = 0;
		while (i < max){
			n = n_minus_1 + n_minus_2;
			n_minus_2 = n_minus_1;
			n_minus_1 = n;
			i++;
		}
	return n
}
	return [fibonacci(number),fib_loop(number)]
}

function scott(number){
	function fibLoop(n) {
	  var result = 0,
	      first = 0,
	      second = 1;
	  for (var i = 2; i < n; i++) {
	    result = first + second;
	    first = second;
	    second = result;
	  }
	}

	function fibRec(n) {
	  if (n < 2) {
	    return n 
	  } else {
	    return fibRec(n-1) + fibRec(n-2)
	  }
	}
	return [fibLoop(number),fibRec(number)
}

function mitul(number){
	function fib(n) {
		if(n <= 0) {
			return 0;
		} else if(n == 2) {
			return 1;
		} else {
			return fib(n-1) + fib(n-2);
		}
	}

	function fib_loop(max) {
		var i = 2,
				n = 0,
				n_minus_1 = 1,
				n_minus_2 = 0;

		while(i < max) {
			n = n_minus_1 + n_minus_2;

			n_minus_2 = n_minus_1;
			n_minus_1 = n; 
			i++;
		}
		return n
	}

	return [fib(number),fib_loop(number)]

}

function cassie(number){
	function fib(n) {
		if (n < 2) {
			console.log(n);
		}
		else  {
			sum = fib(n-1) + fib(n-2);
			console.log(sum);
		}
	}

	function fibloop(max) {

			var n = 0,
				n_minus_1 = 1,
				n_minus_2 = 0;

			for(var i = 2; i < max; i++) {
				n = n_minus_1 + n_minus_2;
				n_minus_2 = n_minus_1;
				n_minus_1 = n;
			}

			console.log(n);
	}
	return [fib(number),fibloop(number)]
}

function adam(number){
	function fib(n) {
		if (n < 2) {
			return n
		} else {
		  sum = fib(n-1) + fib(n-2)
		}
		return sum
	}

	function fib_loop(max) {
		var i = 2
		var n = 0
		var n_minus_1 = 1
		var n_minus_2 = 0

		while (i < max) {
			n = n_minus_1 + n_minus_2
			n_minus_2 = n_minus_1
			n_minus_1 = n
			i++
		}
		return n
	}
}
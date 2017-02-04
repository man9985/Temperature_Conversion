
button.addEventListener('click', function() {
	var tempInput = document.getElementById('temp').value;
 	var unitInput = document.getElementById('unit').value;

	if(unitInput === "F") {
		 //F to C
		 document.getElementById("displayTemp").innerHTML = ((tempInput * 9/5) + 32 + " Celcius");
	} else if(unitInput === "C") {
		//C to F
		document.getElementById("displayTemp").innerHTML = ((tempInput - 32) * 5/9 + " Fahrenheit"); 
	} 
		else {
			document.getElementById("displayTemp").innerHTML = ("Not a valid unit, please use C or F.");
		}
});

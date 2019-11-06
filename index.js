/**
*/
(function(){
	//put GLOBAL variables here
	let userNum = -1;
	let timeDelay = 500;
	let choice = 3;
	
	
	//Onload function here
	window.onload = function(){
		document.getElementById("userIn").value = "";
		document.getElementById("inChoice").addEventListener("change", getNewChoice);
		setInterval( convertAll, timeDelay);
		
	};
	
	//Other functions here
	function updateUserNum(){
		userNum = document.getElementById("userIn").value;
	}
	
	function getNewChoice(event){
		let form = document.getElementById("inChoice");
		for (let i = 0; i < form.length; i++){
			if (form[i].checked){
				choice = i;
			}
		}
		
	}
	
	
	//=======All of the hexTo functions===========================
	
	function hexToHex(){
		//Setup the variables
		let hexBox = document.getElementById("hexBox");
		let decValue = document.getElementById("decBox").value;
		let listOf = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
		let hexBase = 16;
		
		hexTo(hexBase, listOf, hexBox, decValue);

	}

	function hexToOct(){
		let octBox = document.getElementById("octBox");
		let decValue = document.getElementById("decBox").value;
		let listOf = ["0", "1", "2", "3", "4", "5", "6", "7"]
		let octBase = 8;
		
		hexTo(octBase, listOf, octBox, decValue);
		
	}
	
	function hexToDec(){
		let decBox = document.getElementById("decBox");
		
		if (!isValidInputHex()){
			decBox.value = "Error";
			return;
		}
		
		let oldvalue = userNum.toUpperCase();
		let reversed = reverseString(oldvalue);
		let result = 0;
		
		let letterDict = {"A": 10, "B": 11, "C": 12, "D": 13, "E": 14, "F": 15};
		
		for (let i = 0; i < reversed.length; i++){
			if (reversed[i].match(/^[0-9]+$/) !== null){
				let value = reversed[i]
				result += Math.pow(16, parseInt(i)) * value;
			}
			else if (reversed[i].match(/^[0-9]+$/) === null){
				let value = letterDict[reversed[i]];
				result += Math.pow(16, parseInt(i)) * value;
			}
		}
		decBox.value = result;
		
	}
		
	function hexToBin(){
		let binBox = document.getElementById("binBox");
		let decValue = document.getElementById("decBox").value;
		let listOf = ["0", "1"]
		let binBase = 2;
		
		hexTo(binBase, listOf, binBox, decValue);
		
	}
	
	function hexTo(base, baseList, baseOutput, decVal){
		let num = decVal;
		let tempNum = num;
		let result = -1;
		let remainder = -1;
		let strResult = "";
		
		
		if (num < 0  || !isValidInputHex()){
			baseOutput.value = "Error";
			return;
		}
		
		while(result != 0 && !isNaN(result)){
				result = Math.floor(tempNum / base);
				remainder = tempNum % base;
				tempNum = result;
				strResult += baseList[remainder];
		}
		
		
		baseOutput.value = reverseString(strResult);
	}

	function allHex(){
		hexToHex();
		hexToDec();
		hexToOct();
		hexToBin();
	}
	
	function isValidInputHex(){
		
		let num = document.getElementById("userIn").value;
		let reg = /^[0-9|a-f|A-F]+$/;
		
		if (num.match(reg) === null){
			return false;
		}
		else{
			return true;
		}
	}

	//=======End of the hexTo functions===========================
	
	//=======All of the decTo functions===========================
	
	function decToHex(){
		//Setup the variables
		let hexBox = document.getElementById("hexBox");
		let listOf = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
		let hexBase = 16;
		
		//Call the decTo() helper function
		decTo(hexBase, listOf, hexBox);

	}

	function decToOct(){
		let octBox = document.getElementById("octBox");
		let listOf = ["0", "1", "2", "3", "4", "5", "6", "7"]
		let octBase = 8;
		
		decTo(octBase, listOf, octBox);
		
	}
	
	function decToDec(){
		let decBox = document.getElementById("decBox");
		let listOf = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
		let decBase = 10;
		
		decTo(decBase, listOf, decBox);
		
	}
		
	function decToBin(){
		let binBox = document.getElementById("binBox");
		let listOf = ["0", "1"]
		let binBase = 2;
		
		decTo(binBase, listOf, binBox);
		
	}
	
	function decTo(base, baseList, baseOutput){
		let num = userNum;
		let tempNum = num;
		let result = -1;
		let remainder = -1;
		let strResult = "";
		
		
		if (num < 0  || !isValidInputDec()){
			baseOutput.value = "Error";
			return;
		}
		
		while(result != 0 && !isNaN(result)){
				result = Math.floor(tempNum / base);
				remainder = tempNum % base;
				tempNum = result;
				strResult += baseList[remainder];
		}
		
		
		baseOutput.value = reverseString(strResult);
	}

	function allDec(){
		decToHex();
		decToDec();
		decToOct();
		decToBin();
	}

	function isValidInputDec(){
		
		try{
			num = document.getElementById("userIn").value;
			result = num / 3;
			if (isNaN(result)){
				return false;
			}
		}
		catch(err){
			return false;
		}
		return true;
	}

	//=======End of the decTo functions===========================
		
	//=======All of the octTo functions===========================
	
	function octToHex(){
		//Setup the variables
		let hexBox = document.getElementById("hexBox");
		let decValue = document.getElementById("decBox").value;
		let listOf = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
		let hexBase = 16;
		
		octTo(hexBase, listOf, hexBox, decValue);

	}

	function octToOct(){
		let octBox = document.getElementById("octBox");
		let decValue = document.getElementById("decBox").value;
		let listOf = ["0", "1", "2", "3", "4", "5", "6", "7"]
		let octBase = 8;
		
		octTo(octBase, listOf, octBox, decValue);
		
	}
	
	function octToDec(){
		let decBox = document.getElementById("decBox");
		
		if (!isValidInputOct()){
			decBox.value = "Error";
			return;
		}
		
		let oldvalue = userNum;
		let reversed = reverseString(oldvalue);
		let result = 0;
		
		for (let i = 0; i < reversed.length; i++){
			result += Math.pow(8, parseInt(i)) * reversed[i];
			
		}
		decBox.value = result;
		
	}
		
	function octToBin(){
		let binBox = document.getElementById("binBox");
		let decValue = document.getElementById("decBox").value;
		let listOf = ["0", "1"]
		let binBase = 2;
		
		octTo(binBase, listOf, binBox, decValue);
		
	}
	
	function octTo(base, baseList, baseOutput, decVal){
		let num = decVal;
		let tempNum = num;
		let result = -1;
		let remainder = -1;
		let strResult = "";
		
		
		if (num < 0  || !isValidInputOct()){
			baseOutput.value = "Error";
			return;
		}
		
		while(result != 0 && !isNaN(result)){
				result = Math.floor(tempNum / base);
				remainder = tempNum % base;
				tempNum = result;
				strResult += baseList[remainder];
		}
		
		
		baseOutput.value = reverseString(strResult);
	}

	function allOct(){
		octToHex();
		octToDec();
		octToOct();
		octToBin();
	}
	
	function isValidInputOct(){
		
		let num = document.getElementById("userIn").value;
		let reg = /^[0-7]+$/;
		
		if (num.match(reg) === null){
			return false;
		}
		else{
			return true;
		}
	}

	//=======End of the octTo functions===========================

	//=======All of the binTo functions===========================
	
	function binToHex(){
		//Setup the variables
		let hexBox = document.getElementById("hexBox");
		let decValue = document.getElementById("decBox").value;
		let listOf = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
		let hexBase = 16;
		
		//Call the decTo() helper function
		binTo(hexBase, listOf, hexBox, decValue);

	}

	function binToOct(){
		let octBox = document.getElementById("octBox");
		let decValue = document.getElementById("decBox").value;
		let listOf = ["0", "1", "2", "3", "4", "5", "6", "7"]
		let octBase = 8;
		
		binTo(octBase, listOf, octBox, decValue);
		
	}
	
	function binToDec(){
		let decBox = document.getElementById("decBox");
		
		if (!isValidInputBin()){
			decBox.value = "Error";
			return;
		}
		
		let oldvalue = userNum;
		let reversed = reverseString(oldvalue);
		let result = 0;
		
		for (let i = 0; i < reversed.length; i++){
			if (reversed[i] === "1"){
				result += Math.pow(2, parseInt(i));
			}
		}
		decBox.value = result;
		
	}
		
	function binToBin(){
		let binBox = document.getElementById("binBox");
		let decValue = document.getElementById("decBox").value;
		let listOf = ["0", "1"]
		let binBase = 2;
		
		binTo(binBase, listOf, binBox, decValue);
		
	}
	
	function binTo(base, baseList, baseOutput, decVal){
		let num = decVal;
		let tempNum = num;
		let result = -1;
		let remainder = -1;
		let strResult = "";
		
		
		if (num < 0  || !isValidInputBin()){
			baseOutput.value = "Error";
			return;
		}
		
		while(result != 0 && !isNaN(result)){
				result = Math.floor(tempNum / base);
				remainder = tempNum % base;
				tempNum = result;
				strResult += baseList[remainder];
		}
		
		
		baseOutput.value = reverseString(strResult);
	}

	function allBin(){
		binToHex();
		binToDec();
		binToOct();
		binToBin();
	}

	function isValidInputBin(){
		
		let num = document.getElementById("userIn").value;
		let reg = /^[0|1]+$/;
		
		if (num.match(reg) === null){
			return false;
		}
		else{
			return true;
		}
	}

	//=======End of the binTo functions===========================

	function reverseString(str){
		let splitter = str.split("");
		let reversed = splitter.reverse();
		let finalResult = reversed.join("");
		
		return finalResult;
	}

	function convertAll(){
		updateUserNum();
		
		if (choice === 0){
			allBin();
		}
		else if (choice === 1){
			allOct();
		}
		else if (choice === 2){
			allDec();
		}
		else if (choice === 3){
			allHex();
		}
		
		
		
	}


})();
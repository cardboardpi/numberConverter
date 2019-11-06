/**
*/
(function(){
	//put GLOBAL variables here
	let userNum = -1;
	let timeDelay = 500;
	
	
	//Onload function here
	window.onload = function(){
		document.getElementById("userIn").value = "";
		setInterval( convertAll, timeDelay - 10);
		
		
	};
	
	//Other functions here
	function updateUserNum(){
		userNum = document.getElementById("userIn").value;
	}
	
	function decToHex(){
		let hexBox = document.getElementById("hexBox");
		
		let num = userNum;
		let tempNum = num;
		let result = -1;
		let remainder = -1;
		let strResult = "";
		let listOf = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
		
		if (num < 0){
			decBox.value = "Error";
		}
		
		while(result != 0){
				result = Math.floor(tempNum / 16);
				remainder = tempNum % 16
				tempNum = result
				strResult += listOf[remainder]
		}
		hexBox.value = reverseString(strResult);
	}

	function decToOct(){
		let octBox = document.getElementById("octBox");
		
		let num = userNum;
		let tempNum = num;
		let result = -1;
		let remainder = -1;
		let strResult = "";
		let listOf = ["0", "1", "2", "3", "4", "5", "6", "7"]
		
		if (num < 0){
			decBox.value = "Error";
		}
		
		while(result != 0){
				result = Math.floor(tempNum / 8);
				remainder = tempNum % 8
				tempNum = result
				strResult += listOf[remainder]
		}
		octBox.value = reverseString(strResult);
		
	}
	
	function decToDec(){
		let decBox = document.getElementById("decBox");
		
		let num = userNum;
		let tempNum = num;
		let result = -1;
		let remainder = -1;
		let strResult = "";
		let listOf = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
		
		if (num < 0){
			decBox.value = "Error";
		}
		
		while(result != 0){
				result = Math.floor(tempNum / 10);
				remainder = tempNum % 10
				tempNum = result
				strResult += listOf[remainder]
		}
		decBox.value = reverseString(strResult);
		
	}
	
	
	
	function decToBin(){
		let binBox = document.getElementById("binBox");
		
		let num = userNum;
		let tempNum = num;
		let result = -1;
		let remainder = -1;
		let strResult = "";
		let listOf = ["0", "1"]
		
		if (num < 0){
			decBox.value = "Error";
		}
		
		while(result != 0){
				result = Math.floor(tempNum / 2);
				remainder = tempNum % 2
				tempNum = result
				strResult += listOf[remainder]
		}
		
		
		binBox.value = reverseString(strResult);
		
	}

	function reverseString(str){
		let splitter = str.split("");
		let reversed = splitter.reverse();
		let finalResult = reversed.join("");
		
		return finalResult;
	}


	function convertAll(){
		updateUserNum();
		decToHex();
		decToDec();
		decToOct();
		decToBin();
		
	}


})();
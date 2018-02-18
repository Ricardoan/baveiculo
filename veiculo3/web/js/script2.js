// JavaScript Document
/*
var arr = new Array();
arr[0] = new Array ("Selecione");
arr[1] = new Array ("Marca do Carro","Ford","Chevrolet","Fiat","Volkswagem","Peugeot","Hyundai",
"Audi","Citroen","Renault","Jeep","KIA","Suzuky","Toyota","Mercedes_Benz","Ferrari");
arr[2] = new Array ("Marca da Moto","Honda","Yamaha","Suzuky","BMW","Kawasaki","Ducati","kasinski","Harley_Davidson");
arr[3] = new Array ("taguatinga","ceilandia","brasilandia");
arr[4] = new Array ("taguatinga","ceilandia","brasilandia");

function change(combo1)
{
	var comboValue = combo1.value;	
	document.forms["form1"].elements["combo2"].options.length=0;
	for (var i = 0;i<arr[comboValue].length;i++)
	{
		var option = document.createElement ('option');
		option.setAttribute("value",i+1);
		option.innerHTML = arr[comboValue][i];
		document.forms["form1"].elements["combo2"].appendChild(option);	
		
	}
}

*/

function populate1(s1,s2)
{
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if (s1.value == "Carro"){
		var optionArray = ["Marca|Marca","Ford|Ford","Chevrolet|Chevrolet","Fiat|Fiat","Volkswagem|Volkswagem","Honda|Honda","Peugeot|Peugeot","Hyundai|Hyundai","Audi|Audi"
		,"Citroen|Citroen","Renault|Renault","Jeep|Jeep","KIA|KIA","Suzuky|Suzuky","Toyota|Toyota","Mercedes_Benz|Mercedes_Benz","Ferrari|Ferrari"];	
	}
	if (s1.value == "Moto"){
		var optionArray = ["Marca|Marca","Honda|Honda","Yamaha|Yamaha","Suzuky|Suzuky","BMW|BMW","Kawasaki|Kawasaki","Ducati|Ducati","kasinski|kasinski","Harley_Davidson|Harley_Davidson","Dafra|Dafra"];	
	}
	if (s1.value == "Caminhão"){
		var optionArray = ["Marca|Marca","c_Ford|Ford","c_Mercedes_Benz|Mercedes_Benz","c_Scania|Scania","c_Volkswagen|Volkswagen","Volvo|Volvo","Iveco|Iveco","c_Chevrolet|Chevrolet","Fiat|Fiat"];	
	}
	
	for(var option in optionArray){ /*Seleciona a marca e faz a listagem*/
		var pair = optionArray[option].split("|");
	    var newOption = document.createElement("option");
		newOption.value = pair[0];  
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
	
}



function populate2(s1,s2)
{
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if (s1.value == "Ford"){/*Carro da Ford*/
		var optionArray = ["Modelo|Modelo","Ford_Ka|Ford_ka","ka+|ka+","Fiesta|Fiesta","Focus|Focus","Ranger|Ranger","Pampa|Pampa","Verona|Verona","Corcel|Corcel","Courier|Courier","Del_Rey|Del_Rey","Ecosport|Ecosport","Edge|Edge","Scort|Scort","Explorer|Explorer","F1000|F1000","F250|F250","Fusion|Fusion","Galaxie|Galaxie","Ka_Sedan|Ka_Sedan","Mondeo|Mondeo","Pajero|Pajero"];
	}
	if (s1.value == "c_Ford"){/*Caminhão da Ford*/
		var optionArray = ["Modelo|Modelo","C814|C814","Cargo 1119|Cargo 1119","Cargo 1319|Cargo 1319","Cargo 2422|Cargo 2422","Cargo 4432|Cargo 4432","Cargo 815|Cargo 815","Cargo 816|Cargo 816","F350|F350","F4000|F4000"];	
	}
	
	
	
	
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
	    var newOption = document.createElement("option");
		newOption.value = pair[0];  
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
	
}

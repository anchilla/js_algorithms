var palindrom = 'ana';
let first;
let last;
function checkPalindrom(word){
	first = 0;
	last = word.length - 1;
	while(first <= last){
		if(word[first] !== word[last]){console.log("nije"); return false; }
		first++;
		last--;

	}
		console.log("jeste");
	return true;
}
checkPalindrom(palindrom);
checkPalindrom("palindrom");


//IMAS ZADATI NIZ I SUMU, PROVERI DA LI NEKI ELEMTI DAJU TU SUMU KAD SE SABERU
let new_array = [];
//i<array.length, ne moze <= jer indexi pocinju od 0
// j= i+1
//ne sabiras i+j, nego array[i]+array[j]
function checkSum(array, sum){
	for(let i=0; i<array.length; i++){
		for(let j=i+1; j<array.length; j++){
			if((array[i]+array[j])==sum) {
				console.log("i "+i);
				console.log("j "+j);
				new_array.push(array[i]);
				new_array.push(array[j]);
			}
			
		}
	}
	console.log(new_array);
}
checkSum([1,2,3], 3);

//SEARCHING
//TRAZENJE INDEXA ODREDJENE VREDNOSTI U NIZU
//zapravo ti uz indexOf (includes isto) metodu ne treba for jer ona vec sama
// pretrazi ceo niz
let array_numbers = [8,5,38,50,2,18];
let index_found;
function findIndex(number){
	//for (var i = 0; i <array_numbers.length; i++) {
		index_found = array_numbers.indexOf(number);
	//}
	if(index_found!==-1)
		console.log("indeks je:"+index_found);
	else
		console.log("nije nadjeno");
}
findIndex(2);

//LINEAR SORTING
//BUBBLE SORT - poredimo dve vrednosti istovremeno i veca ide posle (na kraj
// niza)

function bubbleSort(array){
	for(var i=0; i<array.length; i++)
	{
		if(array[i] > array[i +1]){
		//mora ova let da se doda, jer onda ce svaki kome se dodeli vrednost 
			// array[i] da se ponavlja je njega stavimo da je array[i+1]
			let temp = array[i];
		array[i] = array[i+1];
		array[i+1] = temp;
	}
	}
	console.log(array);
}
bubbleSort([6, 3, 9, 16, 23, 18, 11])

//SELECTION SORT - stavljaju se manje vrednosti napred
function selectionSort(array){
	for(var i=0; i<array.length; i++)
	{
		//samo je ovo drugacije
		if(array[i+1] < array[i]){
		//mora ova let da se doda, jer onda ce svaki kome se dodeli vrednost 
			// array[i] da se ponavlja je njega stavimo da je array[i+1]
			let temp = array[i];
		array[i] = array[i+1];
		array[i+1] = temp;
	}
	}
	console.log(array);
}
selectionSort([6, 3, 9, 16, 23, 18, 11])

//INSERTION SORT
const arr = [3,2,1,4,6,5,7,9,8,10]
function insertionSort(array){
//pocinje se od drugog
	for(var i=1; i<array.length; i++){
		let temp = array[i];
	let j = i-1;
	console.log("prvi");
	while((j>-1) && (temp<array[j])){
		//on se zadrzi u ovoj petlji jer proveravamo jedan isti elemnt temp
		//i njega premestamo u petlji kontinualno ako treba i veci je od vise
		//drugih elemenata, i zato smanjujemo j-- posle jer proveravamo sve 
		//prethodene elemente koje smo vec sortirali
		console.log("i je: "+i);
		console.log("j je: "+j);
		//ako je manji od prethodnog onda ide napred
		array[j+1] =array [j]; 
		j--;
	}
	//ovo se radi da ne bi u petlji stavljao da je isti svaki put kad se 
	// ispuni ovaj - ovo je kad se smanji j sa j--, znaci manji je od ovog 
	// istog array[j+1] u while petlji
	array[j+1]=temp;
	console.log("drugi");
}
	console.log(array);

}
insertionSort(arr);

//proveri da li je prime number - ako se samo deli sa sobom i 1

function checkPrime(number){
var delilac = 2;
var primal=true;
	while (delilac<number && primal==true){

	if (number%delilac !== 0){
	console.log("ostatak "+(number%delilac));

		primal=true;
		delilac++;
	}else{
		primal = false;
	}
}
console.log("primal je: "+primal+", "+number);
if(primal) return true;
}
checkPrime(3);
checkPrime(8);

function checkPrimesInNumber(number){
var delilac = 2;
var primBrojevi = [];
	while (number>2){
	if((number%delilac == 0)){//znaci da ga sadrzi
	//&& (checkPrime(delilac)==true) - ovo ti ne znaci nis u uslovu, je on 
		//mora da se prekine nekako, a to radis tako sto smanjujes number
	primBrojevi.push(delilac);
	number = number/delilac; //ovde samnjis number, podelis ga s prim br. 
	// i ono sto ostane ce biti za drugi delilac dok ne bude sve manji, od 2
	delilac++;
	}
}
console.log("primBrojevi niz: "+primBrojevi);
}
checkPrimesInNumber(12);

//FIND nTH FIBONNACHI NUMBER - napravis fibonaci niz do zadatog broja
function makeFibonachi(nth){
	var array = [0,1];
	//if(n<=2) return 1;
	//a+b = c
	for(var i = 2; i<=nth; i++){
		//stavila si  array[i-1] + array[i]->ovaj mora da bude -2, jer i
		// jos ne postoji, moras da ga napravis. Ovako ce biti [1]+[2]->koji
		// ne postoji
		var c = array[i-1] + array[i-2];
	
	array.push(c);
}
console.log("Fibonaci je: "+array);
}

makeFibonachi(8);

//REMOVE DUPLICATES FROM ARRAY
function removeDuplicates(array){
	var new_array = [];
	for (var i = 0; i <= array.length; i++) {
		//for (var j = 1; j < array.length; j++) {
	if(!new_array.includes(array[i])){
		new_array.push(array[i]);
	//if(array[i].equals(array[j])){
		//delete array[i];
	}

}
console.log("niz je: "+new_array);
}
removeDuplicates([4,6,4,2,0,2,7]);

//SWAP NUMBERS WITHOUT TEMP
function swap (a, b){
	var first =a;
	var second = b;
	console.log("Numers are: "+second+", "+first);
}
swap(3,9);

//REVERSE STRING
function reverseString(string){
	var temp ="";
	var new_string ="";
	for(var i=string.length-1; i>=0; i--){
		new_string += string[i];
	}
	console.log("obrnuti string: "+new_string);
}
reverseString("weekend");
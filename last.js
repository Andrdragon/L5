// var arr = ["a","b","c","d","e"];
// console.log(arr[3]);
// console.log(arr[arr.length-1]);

// var string = "Мама мыла раму";
// var stringSearch = "мыла";
// if (string.indexOf(stringSearch) > -1) {
// 	console.log(true)
// }
// else{
// 	console.log(false)
// }

//var string ="мыла";
// var result = string.substr(0,6)
// console.log(result);

// var string ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit consequatur sunt adipisci reprehenderit modi quis, iste ipsum quod. Eveniet inventore veniam voluptatibus repellendus quibusdam magnam autem non rem, animi explicabo! ipsum dolor sit amet, consectetur adipisicing elit. Labore, veniam quidem molestias et dolor quia ad nostrum delectus. Nostrum omnis dolor aperiam velit veritatis facere debitis quisquam, aliquid suscipit excepturi. ipsum dolor sit amet, consectetur adipisicing elit. Dolorum cum, aperiam praesentium. Aliquid debitis alias, nam officia unde quod excepturi, sint et esse aspernatur numquam, voluptatem illo, saepe voluptas eum! ipsum dolor sit amet, consectetur adipisicing elit. Impedit facere suscipit doloremque nobis iusto fuga. Suscipit illo, ipsa error assumenda ut nemo numquam quis quos voluptate maxime, sed dicta ducimus.";
// var ipsum = "ipsum";
// var array = [];
// for (var i = 0; i < string.length; i++) {
// var index = string.indexOf(ipsum, i);
// if(index == -1) {break}
// array.push(index);
// i = index
// }
// console.log(array);

// function helloWorld(){
// 	//alert("Hello,World!");
// var hello = "hello";
//  hello = "hello";
// 	console.log(hello);
// }
// helloWorld();
// console.log(hello);

// var string = "Some string";
// function myFunc (){
// 	var string = "String 2"
// }
// myFunc();
// console.log(string);


// var num = prompt("Введите число","");
// function myFunc (arg){
// 	num = num * num
// }
// myFunc();
// alert(num);

// var result = prompt("Введите число","");
// kv(result);
// function kv(number){
// 	if (number.indexOf(",")>-1){
// 		alert("Ahtung")
// 	}
// 	alert(number * number)
// }

check();
function check(){
	var result = prompt("Введите число","")
	if(result.indexOf(",") >-1 ){
		alert("You are STUPID");
		check();
	}
	else{
		kv(result)
	}
}
function kv(number){
	alert(number * number)
}
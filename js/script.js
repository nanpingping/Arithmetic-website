var answered=false;
var Ans;
var id = 10;
function display(a){
	if(document.getElementById('screen').value === "*"||document.getElementById('screen').value === "/"){
		document.getElementById('screen').value = "";
	}
	if(answered){
		document.getElementById('screen').value = "";
		answered=false;
	}
	document.getElementById('screen').value += a;

	var v = document.getElementById('screen').value;
	var n = v.length;
	var last_char = v.charAt(n - 2);
	if((last_char === '+'&& a === '+')||(last_char === '-'&& a === '-')||(last_char === '*'&& a === '*')||(last_char === '/'&& a === '/')){
		//v.slice(0,n-2);
		document.getElementById('screen').value =v.slice(0,n-1);
	}
	if((last_char === '+'&& a === '-')||(last_char === '+'&& a === '*')||(last_char === '+'&& a === '/')){
		//v.slice(0,n-2);
		document.getElementById('screen').value =v.slice(0,n-1);
	}
	if((last_char === '-'&& a === '+')||(last_char === '-'&& a === '*')||(last_char === '-'&& a === '/')){
		//v.slice(0,n-2);
		document.getElementById('screen').value =v.slice(0,n-1);
	}
	if((last_char === '*'&& a === '-')||(last_char === '*'&& a === '+')||(last_char === '*'&& a === '/')){
		//v.slice(0,n-2);
		document.getElementById('screen').value =v.slice(0,n-1);
	}
	if((last_char === '/'&& a === '+')||(last_char === '/'&& a === '-')||(last_char === '/'&& a === '*')){
		//v.slice(0,n-2);
		document.getElementById('screen').value =v.slice(0,n-1);
	}
	
}
function audioPlay(a){
    a = encodeURI(a);
    var audio = "<audio autoplay=\"autoplay\">" + "<source src=\"http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=2&text=" + a + "\" type=\"audio/mpeg\">" + "<embed height=\"0\" width=\"0\" src=\"http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=2&text="+ a +"\">" + "</audio>";
    $('a').append(audio);
}

function bkspace () {
	var a = document.getElementById('screen').value;
	// Testing ground
	// console.log(a);

	var n = a.length;
	// console.log(n);

	// To print the last char '('
	var last_char = a.charAt(n - 1);
	// console.log(last_char);

	// // This works for cos, sin, tan, log
	// // var chars_trig = a.charAt(n - 4);
	// // console.log(chars_trig);
	var last_chars = a.slice(n-4, n);
	// console.log(last_chars);


	// // This works for arcsin, arccos, arctan
	// // var chars_arc = a.charAt(n -7);
	// // console.log(chars_arc);
	var last_arc = a.slice(n-7, n);
	// console.log(last_arc);


	// // This works for sinh, cosh
	// // var chars_hyp = a.charAt(n - 5);
	// // console.log(chars_hyp);
	var last_hyp = a.slice(n-5, n);
	// console.log(last_hyp);


	if ( (last_arc == 'arcsin(') || (last_arc == 'arccos(') || (last_arc == 'arctan(') ) {
		// console.log(last_arc);
		a = a.substr(0, n-7);
		document.getElementById('screen').value = a;
		// console.log(a);

	} else if ( (last_hyp == 'sinh(') || (last_hyp == 'cosh(') ) {
		// console.log(last_hyp);
		a = a.substr(0, n-5);
		document.getElementById('screen').value = a;
		// console.log(a);

	} else if ( (last_chars == 'cos(') || (last_chars == 'sin(') || (last_chars == 'tan(') || (last_chars == 'log(') ) {
		// console.log(last_chars);
		a = a.substr(0, n-4);
		document.getElementById('screen').value = a;
		// console.log(a);

	} else{
		a = a.substr(0, a.length - 1);
		document.getElementById('screen').value = a;

	}
}

function cls_screen () {
	document.getElementById('screen').value = "";
	document.getElementById('ans').value = "";
	id = 10;
}

function cls_screen2 () {
	document.getElementById('screen').value = "";
}

function ans (){
	
	var ans = document.getElementById('screen').value;

	// var ans2 = document.getElementById('hidden_screen').value;
	// var n = ans.length;
	// if(((ans.charAt(n - 2) === '+')&&(ans.charAt(n - 3) === '+'))||((ans.charAt(n - 2) === '-')&&(ans.charAt(n - 3) === '-'))
	// ||((ans.charAt(n - 2) === '*')&&(ans.charAt(n - 3) === '*'))||((ans.charAt(n - 2) === '/')&&(ans.charAt(n - 3) === '/'))){
	// 	document.getElementById('ans').value = "运算非法";
	// }

	if (ans === "") {
		document.getElementById('ans').value = "0";
		audioPlay("等于" + 0);
	}
	else {
		// alert(ans);
		Ans = eval(ans);
		document.getElementById('ans').value = Ans;
		audioPlay("等于" + Ans);
	}
	answered=true;	
}

function sin () {
	var a = document.getElementById('screen').value;
	var n = a.length;
	var s = a.slice(0,n-3)+'';
	document.getElementById('ans').value = Math.sin(s * Math.PI / 180);
}

function arcsin(){
	var a = document.getElementById('screen').value;
	var n = a.length;
	var s = a.slice(0,n-6)+'';
	document.getElementById('ans').value = Math.asin(s);
}


function cos (a) {
	var a = document.getElementById('screen').value;
	var n = a.length;
	var s = a.slice(0,n-3)+'';
	document.getElementById('ans').value = Math.cos(s * Math.PI / 180);
}

function arccos () {
	var a = document.getElementById('screen').value;
	var n = a.length;
	var s = a.slice(0,n-6)+'';
	document.getElementById('ans').value = Math.acos(s);
}

function tan (a) {
	var a = document.getElementById('screen').value;
	var n = a.length;
	var s = a.slice(0,n-3)+'';
	// return (Math.sin(a * Math.PI / 180)) / (Math.cos(a * Math.PI / 180));
	document.getElementById('ans').value = Math.tan(s * Math.PI / 180);
}

function arctan () {
	var a = document.getElementById('screen').value;
	var n = a.length;
	var s = a.slice(0,n-6)+'';
	document.getElementById('ans').value = Math.atan(s);
}

function Hex () {
	var a = document.getElementById('screen').value;
	var s = a+'';
	var result = parseInt(s,id).toString(16);
	id = 16
	document.getElementById('ans').value = result;
	Ans = result;
}

function Dec () {
	var a = document.getElementById('screen').value;
	var s = a+'';
	var result = parseInt(s,id).toString(10);
	id = 10;
	document.getElementById('ans').value = result;
	Ans = result;
}

function Oct () {
	var a = document.getElementById('screen').value;
	var s = a+'';
	var result = parseInt(s,id).toString(8);
	id = 8;
	document.getElementById('ans').value = result;
	Ans = result;
}

function Bin () {
	// var a = document.getElementById('screen').value;
	// var result = Number.parseInt(a,16);
	var a = document.getElementById('screen').value;
	var s = a+'';
	var result = parseInt(s,id).toString(2);
	id = 2;
	document.getElementById('ans').value = result;
	Ans = result;
}

function sqrt (a) {
	a = Number(a);
	return Math.sqrt(a);
}

function cbrt (a) {
	a = Number(a);
	return Math.cbrt(a);
}

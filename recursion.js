/*
1
Create a function called sum 
that takes a single parameter n, 
and return the sum of all integers up to n starting from 0

Ex: sum(2); => 2 + 1 + 0 => 3 
Ex: sum(5); => 5 + 4 + 3 + 2 + 1 + 0 => 15

*/
function sum(n) {
 if (n === 0)
 {	return 0;
 }
 return n + sum(n-1);
}

console.log(sum(5));

/*
2
Create a function called factorial 
that takes a single parameter n, 
and return the product of all integers up to n starting from 1

Ex: factorial(2); => 2 * 1 => 6 
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24 

*/
function factorial(n) {
	if ( n === 1)
	{
		return 1;
	}
	return n * factorial(n-1);
  // your code here
}
console.log(factorial(5));


/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space

Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/
function repeatStr (str, n)
{
	if (n === 0)
		return "";
	return str +" " + (repeatStr(str,n-1));
}

console.log(repeatStr("to",5));


/*
4
Create a function called fibon
that takes 1 parameter a number,
and return the fibonacci for this number

Ex: fibon(7); => 21
Ex: fibon(2); => 2
Ex: fibon(1); => 1
Ex: fibon(0); => 1

fib(n): 1 1 2 3 5 8 13 21
        | | | | | |  |  |
n:      0 1 2 3 4 5  6  7
*/
var b = 1;
var a = 1;
var sum = 0;
function fibon (m)
{
	if (m === 1)
	{
		var x = sum;
		sum = 0;
		a = 1;
		b = 1;
		return x;
	}
	// n = sum;
	// sum = sum + n;
	sum = a + b;
	b = a;
	a = sum;
	return fibon(m-1);
}
console.log(fibon(6));

// function fibonac(num)
// {
// 	if (num === 0)
// 		return 0;
// 	return fibonac(num - 1)+fibonac( num -2);
// }
// console.log(fibonac(6));
/*


/*
5
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/

function sum2(n1,n2)
{
	if (n2 === n1)
		return n2;
	return n2 + sum2(n1, n2-1);
}
console.log(sum2(4,5));

/*
6
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
Important: the stop condition should be [somthing=== 0]
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/
var x = 0;
function repeatStr2 (str1, str2)
{
	if (x === 0)
		return "";
	
	return str1 +" " + (repeatStr2(str1,str2.slice(0,-1)));
}


console.log(repeatStr2("to","ccc"));
/*
str
*/
function multiof(num1,num2,num3){
	if(num3 === 0)
		return num1;
	return num2 *multiof(num1,num2,num3-1);
}
console.log(multiof(6,2,4));
/*
*/
console.log("rashed")

function muti(num1,num2){

	if(num1 === num2)
		return num1;
	return num2*muti(num1,num2-1);

}
console.log(muti(3,6));
/*
9
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should dint have extra space at the end or comma
** Important: the stop condition should [num1===num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"*/
function numberBetwwenUs (num1,num2 )
{
	if (num1 === num2-1 )
	{
		return  ""	
	} 	
	if(num1 ===num2-2)
		return  (num1+1)+numberBetwwenUs(num1+1,num2);
	else
	    return (num1+1)+"," +numberBetwwenUs(num1+1,num2);
}
console.log(numberBetwwenUs( 2 , 8 ));

/*
11
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum
multiplication2(5,4) => 20
multiplication2(2,8) => 16
multiplication2(7,6) =>  42
*/

function multiplication2 (n1 , n2 )
{
	if (n2 ===1){
		return n1;
	}
return n1+ multiplication2(n1,n2-1);
}

console.log(multiplication2(5,4));
/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1
mod2(2,8) => 2
mod2(7,4) => 3
*/
function mod2(num1,num2){
	if (num1 < num2)
		return num1;
	return  mod2(num1-num2,num2);
}
console.log(mod2(5,4));
console.log(mod2(2,8));
/*
/*
12
Write a function called mirror
that takes one parameter a string
and return the reversed string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
** Important: You should dint have extra space at the end
mirror("school") => "loohcs"
mirror("car") => "rac"
mirror("maDrasa") => "asarDam"
*/
function mirror(str1){
	if(str1.length === 0)
	{
		return "";
	}
	
	return str1[str1.length-1]+ mirror(str1.slice(0,-1));
}
console.log(mirror('car'));
console.log(mirror("school"));
/*
13
Write a function called mirrorCaseAlso
that takes one parameter a string
and return the reversed string order
and the lower case to upper case
and the upper case to lower case
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
** Important: You should dint have extra space at the end
mirrorCaseAlso("sChOol") => "LOoHcS"
mirrorCaseAlso("THOR") => "roht"
mirrorCaseAlso("BaBa") => "AbAb"
*/
function mirrorCaseAlso(str1){
if(str1.length === 0)
	{
		return "";
	}
	if(str1[str1.length-1] >= 'a')
	return str1[str1.length-1].toUpperCase()+ mirrorCaseAlso(str1.slice(0,-1));
else
	return str1[str1.length-1].toLowerCase()+ mirrorCaseAlso(str1.slice(0,-1));
	
}
console.log(mirrorCaseAlso("BaBa"));
/*
14
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
repeatChar("schOol","o") => 2
repeatChar("school","a") => 0
repeatChar("School","s") => 1
try more case by yourself
*/
function repeatChar(str1,str2){
	if(str1.length===0){
		return 0;
	}
	if(str1[str1.length-1].toUpperCase() === str2[0].toUpperCase())
		return 1+repeatChar(str1.slice(0,-1),str2);

	return repeatChar(str1.slice(0,-1),str2);
}
console.log(repeatChar("schOol","o"));
console.log(repeatChar("School","s"));
console.log(repeatChar("school","a"));
/*
15
Write a function called repeatChar2
that takes two parameters
and return the times that this char
wit case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
repeatChar2("schOol","o") => 1
repeatChar2("school","a") => 0
repeatChar2("School","S") => 1
try more case by yourself
*/
function repeatChar2(str1,num)
{
if(str1.length===0){
		return 0;
	}
	if(str1[str1.length-1]=== num[0])
		return 1+repeatChar2(str1.slice(0,-1),num);

	return repeatChar2(str1.slice(0,-1),num);
}
console.log(repeatChar2("schOol","o"))
console.log(repeatChar2("school","a"))
console.log(repeatChar2("School","S"))
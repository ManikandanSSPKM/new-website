




























/* 

Number of "." used in a console.log is called chaining function...


we can convert str to int/number rather than it is sentence::

s='32.8943Mani';
num = 5;
console.log(Number(s))
Number(false) // 0
Number(True) // 1
Number.isInteger(val/var) 
num.toString() // 0/p the val '5' as str
Number.parseFloat(s) // 0/p : 32.8943
Number.parseFloat(s).toFixed(2) // tofixed reduce the point val to "2" 



add num to str ::

console.log(s+"3") // o/p : Mani3
console.log(Number(s)+3) // o/p : NaN (i.e:: Not a Number)




alert("hi mani") // alert the user when visits site with ok button

confirm("Are your male?") // shows ok and close button 

prompt("hi mani type something") // shows text box to type something from user... 

typeof() // results the dataType of a val/exp used/given

ex :: 
typeof('mani') // string
typeof(45) // int/number
typeof(45.0) // int/number ""eventhough the value if float""

Strings Function :: // if it is string the output will be in white color otherwise it will be in blue/violet 

let s='mani';
let m='mani is typing' or 'mani,is,typing'
s.length()
s.toUpperCase()
s.toLowerCase()
s.slice(startval,endval)
s.replace(valchange, valTOchange)
s.concat(" spaces",2ndVAL);
s.trim() // reduce unnecessary spaces
s.charAt('val') // index/pos num to be defined 
m.split(",") / m.split(" ")

Math Functions ::

Math.floor() // reduces float val to previous least val " 4.3/4.5/4.8 -> 4"

Math.ceil() //reduces float val to next higher val " 4.1/4.3/4.5/4.8 -> 5"

Math.PI()
Math.pow()
Math.min()
Math.max()
Math.trunc() // prints nly int val 
Math.round() // prints nly int val

If Statements ::

if() { }
else if() { }
else() { }

Switch Statments ::

switch (exp/value) 
{
  case val/alpha/num 1 :
    console.log / store value in var 
    break
  case val/alpha/num 2 :
    console.log / store value in var 
    break
    .
    .
    .
  default :
     console.log / store value in var
     "no need of break"
}

Conditional (Ternary) Operator ::

syntax:: if 'expression/value' ? 'value IF True' : 'Value IF False' 

*/
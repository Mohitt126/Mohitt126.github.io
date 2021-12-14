let mul = function (a){
    a = document.getElementById('number1').value;
    let mul2 =  function(b){
         b = document.getElementById('number2').value;
         let mul3 = function (c){
          c = document.getElementById('number3').value;
         let pro = document.getElementById('Result').value = a*b*c;
         console.log(pro);
         }
         return mul3;
     }
     return mul2;
 }
 mul()()();
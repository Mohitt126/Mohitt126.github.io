let calc={
    Num1:0,
    Num2:0,
    result:0,

    'sum': function(a ,b){

       this. Num1=a;
        this.Num2=b;


     this. result=this.Num1+this.Num2;

     return this.result;
    },


    'mul': function(c,d){
        this.Num1=c;
        this.Num2=d;
        this.result=this.Num1*this.Num2;
        return this.result;
   },


   'div': function(x,y){
    this.Num1=x;
     this.Num2=y;
    this.result=this.Num1 / this.Num2;
    return this.result;
   },


  'mod': function(p,q){
    this.Num1=p;
        this.Num2=q;
    this.result=this.Num1 % this.Num2;
    return this.result;
   },


   'dif': function(i,j){
    this.Num1=i;
    this.Num2=j;
    this.result=this.Num1-this.Num2;
    return this.result;
},

};

//SHOWING ALL THE FUNCTIONALITY OF CALCULATOR 1 BY ONE

//THIS IS SUM 
console.log("SUM FUNCTION");
console.log(calc.sum(10,42));

//THIS IS MULTIPLICATION
console.log("MULTIPLY FUNCTION")
console.log(calc.mul(6,12));




//THIS IS MODULE
console.log("MODULE FUNCTION");
console.log(calc.dif(4,13));

//THIS IS SUBSTRACTION
console.log("SUBTRACTION FUNCTION");
console.log(calc.dif(2,1));

//THIS IS DIVISION FUNCTION
console.log("DIVISION FUNCTION");
console.log(calc.div(42,6)); 
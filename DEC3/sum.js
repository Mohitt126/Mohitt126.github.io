let sum=function(a){
    let sum2=function(b){
        let sum3=function(c){


        let result=a+b+c;
        console.log(result);
    }
    return sum3;
    }
    return sum2;
}

sum(20)(40)(60);
0 comments on commit a4668f3
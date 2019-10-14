//STEP 1
function halfNumber(num){
    "use strict";
    var result = num /2 ;
    window.console.log("Half of "+num+" is "+result+".");
    return result;
}
//STEP 2
function squareNumber(num){
    "use strict";
    var result = num * num;
    window.console.log("The result of squaring the number "+num+" is "+result+".");
    return result;
} 
//STEP 3
function percentOf(num1, num2){
    "use strict";
    var result = (num1 / num2) * 100;
    window.console.log(num1+" is "+result+"% of "+num2+".");
    return result;
}
//STEP 4
function findModulus(num1, num2){
    "use strict";
    var result = num1 % num2;
    window.console.log(result+ " is the modulus of "+num1+" and "+num2);
    return result;
}
//STEP 5
function getSum(numstr){
    "use strict";
    var sum = 0 ;
    var len = numstr.length;
    for(var i = 0; i < len; i++){
        sum += parseInt(numstr[i]);
    }
    window.console.log("The sum of the given input is:"+sum);

}
var numstr = window.prompt("Enter numbers delimited by commas: ");
numstr = numstr.split(',');
getSum(numstr);
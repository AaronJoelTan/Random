import {show, sum} from 'rune';

// function sum_integers(a,b){
//     //Original function
//     return a > b 
//         ? 0
//         : a + sum_integers(a+1,b);
// }
// display(sum_integers(1,3));


// To do it in a simpler way using sum method
// function identity(x){
//     return x;
// }

// function next(x){
//     return x + 1;
// }
// function sum_integers(a,b){
//     return sum(identity,a,next,b);
// }

// display(sum_integers(1,3));




function simple(a){
    return a + 2;
}
const random = simple;
// The random variable is a pointer to the simple function. When it takes an 
// argument, this argument goes to the function. Essentially, the random
// variable puts the argument into a return statement somewhere, in this case it is
// a + 2

// display(random(3));



// Like in the case below, my_sum variable takes 2 arguments, and they have to go
// to a return statement, in this case, it is return a + b. You need a function to 
// take that value and return
const my_sum = (a,b) => a + b;
// display(my_sum(1,2));

// Trying lambda function

function my_complex2(x){
    function my_sum(y){
        return x + y;
    }
    return my_sum;
}

const whyman = my_complex2(5);
// display(whyman(2));


//Trying higher order function, sum of integers from a to b

function identity(x){
    return x;
}

function next(x){
    return x+1;
}
function sum1(term,a,next_order,b){
    return a > b ? 0 : a + sum1(term,next_order(a),next_order,b);
}


function sum_integer(a,b){
    
}
display(sum1(identity,1,next,5));
















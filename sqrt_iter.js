function cubert_iter(guess,value){
    const quotient = (value/(guess*guess) + (2*guess))/3;
    return very_good(guess,quotient) ? guess : cubert_iter(average(guess,quotient),value);
}

function sqrt_iter(guess,value){
    // If value/guess close enough to guess (<0.001) then we return the guess
    // otherwise, we will find the average of the guess and the value/guess
    // and call the function again, this time with guess argument being 
    // the average (since it is closer to the actual value).
    const quotient = value/guess;
    return very_good(guess,quotient) ? guess : sqrt_iter(average(guess,quotient),value);
}

function very_good(guess, interested){
    return math_abs(guess-interested) < 0.001 ? true : false;
}

function average(value1,value2){
    return (value1+value2)/2;
}

cubert_iter(1,125);
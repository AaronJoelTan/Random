function spiral(thickness, depth) {
    /* 
    Base case is returning a picture of the hook and blank
    
    Once the hook and blank is returned, it will be quarter-turned right and stacked together with the 
    picture of the previous recursion.
    
    The thickness of each recursion step will be 1/5 of the (1-thickness), where 1-thickness is the remaining
    space after the initial recursion.
    */
    return depth === 1 ? stack_frac(thickness,hook(thickness),blank) : stack_frac(thickness,hook(thickness),quarter_turn_right(spiral((1-thickness)*1/5,(depth -1))));
}


function hook(thickness){
    /*
    This function aims to return the basic hook based on the thickness given.
    The hook used comprises of 2 parts, the upper square and the lower smaller
    short_end. 
    
    The short end is calculated with the thickness of the next recursion in mind.
    
    From the spiral function above, the thickness of next hook is (1-thickness) * 1/5
    
    Since the short end is half of the thickness of hook, like if thickness is 1/2,
    the short end is 1/4, short end is (1/2 * ((1-thickness)*1/5))
    
    So the length of blank is 1-short_end.
    
    From there we can get the hook picture to be return using stack_frac.
    */
    const short_end = beside_frac((1-(1/2 * ((1-thickness)*1/5))),blank,square);
    return stack_frac(1/2,square,short_end);
}

// Test
show(spiral(1 / 5, 20));

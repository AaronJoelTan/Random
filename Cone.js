function cone(n, rune){
    /*
    This function will call cone_iter with the relevant values and return the 
    final product.
    */
    return cone_iter(n,rune,2,scale(1/n,rune));
}

function cone_iter(n,rune,multiplier,product){
    /*
    The product is the 3D rune, the rune and n are constants and multiplier
    increments by 1. Since the distance between each circle are equal,
    for each successive iteration, the overlay frac is (m-1)/m, where 
    m is multiplier, eg 1/2,2/3,3/4.
    */
   
    return multiplier > n ? product
    : cone_iter(n,rune,multiplier+1,overlay_frac((multiplier-1)/(multiplier),product,scale(multiplier/n,rune)));
}

// Tests
show(cone(4, circle));
// hollusion(cone(15, circle));

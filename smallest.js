// function smallest(xs) {
// return accumulate((x, y) => x < y ? x : y,
//                          head(xs), tail(xs));
// }

function accumulate(f, initial, xs) {
return is_null(xs) ? initial
              : head(xs) < accumulate(f, initial, tail(xs))
                    ? head
                    : accumulate(f, initial, tail(xs));
}

const xs = list(2,1,2,3);
display_list(accumulate((x, y) => x < y ? x : y,
                         head(xs), tail(xs)));
                         
                         
x   accumulate(y)                      
1 2 3 
1.   2 3
1.   2    3
1.   2.   3.  2 ("base case where y is 2")
1.   2.   3.  compare x < 2 which is 3<2, false so return 2
1.   2.   2.   now compare 2 < 2, false so return 2
1.   2      compare 1<2 so true so return 1
1. smallest

eval_s

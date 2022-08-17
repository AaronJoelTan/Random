import { heart,sail,show } from "rune";

function random(value){
    return value*2;
}

function repeating_pattern(n,func,value){
    //This function aims to take it a value n which is the no of time the
    //func will be used recursively, acting on value 
    return n === 1 ? func(value) : func(repeating_pattern((n-1),func,value));
}

repeating_pattern(4,random,3);
let a = 1;
let b = 2;
let c = 3;
let res;

if(a > b && a > c){
	res = a
}else if(b > a && b > c){
	res = b
}else{
	res = c
}

console.log(res);
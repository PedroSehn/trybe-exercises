let plau = [2, 3, 6, 7, 10, 1];
let biggest = 0;


function verify(x){

	for(let i in x){
		if(x[i] > biggest){
			biggest = i;
		}else{
			biggest = biggest;
		}
	}
	return( console.log(biggest) )
}
verify(plau)

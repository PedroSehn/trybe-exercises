let plau = [2, 4, 6, 7, 10, 0, -3];
let biggest = 0;
let minor = 0;


function verify(x){

	for(let i in x){
		if(x[i] > biggest){
			biggest = i;
		}else{
			biggest = biggest;
		}

		minor = biggest


		if(x[i] < minor){
			minor = i;
		}else{
			minor = minor;
		}




	}
	return( console.log(minor) )
}
verify(plau)

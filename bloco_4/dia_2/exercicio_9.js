letuce = [];
halfLetuce = [];
number = 0;

for(i =0; i < 26; i++){
	let y = number++
	letuce.push(y)
}

console.log(letuce)


for(x = 0; x < letuce.length; x++){
	let z = (letuce[x] / 2)
	halfLetuce.push(z)
	
}

console.log(halfLetuce)
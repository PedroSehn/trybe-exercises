let player = {
	name :'Marta',
	lastName: 'Silva',
	fullName: 'Marta Silva',
	age : 34,
	medals : { golden :2, silver: 3},
	bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

console.log('A jogadora ' + player.name + " " + player.lastName + ' tem '  + player.age + " anos.");
console.log('A jogadora ' + player.fullName + ' foi eleta a melhor do mundo 6 vezes.');
console.log('A jogadora tem possui ' + player.medals.golden + " medalhas de outro e "+ player.medals.silver + ' de prata.')
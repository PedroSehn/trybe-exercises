const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };


//dragon script
const dragonsFury = () => {
  dragon.damage = Math.floor(Math.random() * (15) + 1) + dragon.strength;
  console.log(`Dragão -> ${dragon.damage} de dano`);
}
dragonsFury();


//warrior script
const warriorsPower = () =>{
 let minDammege = warrior.strength;
 let maxDammeg = warrior.strength * warrior.weaponDmg;
  warrior.damage = Math.floor(Math.random() * (maxDammeg)) + minDammege;
  
  if(warrior.damage < 30){
    warrior.damage = 30;
  }
  
  console.log(`Guerreiro -> ${warrior.damage} de dano`);
}
warriorsPower();


//mage script
const magesPower = () => {
  
}

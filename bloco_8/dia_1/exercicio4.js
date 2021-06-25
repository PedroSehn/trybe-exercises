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
  let minDmg = mage.intelligence;
  let maxDmg = mage.intelligence * 2;
  let noManaMsg = 'Mago tá sem mana, fudeu';
 
  mage.damage = {};
  mage.damage['dano'] = 1;
  mage.damage['noMana'] = mage.mana < 15;
  
  
  if(mage.damage['noMana'] === false){
    mage.damage['dano'] =  Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);
    mage.mana -= 15;
  }else{
    mage.damage['dano'] = noManaMsg;
  }

  console.log(mage.mana);
  console.log(mage.damage);

}
magesPower();

const dndCharacter = {
    nom: 'Gabrare le Barbare',
    age: 42,
    race: 'Human',
    gender: 'Male',
    lvl: '10',
    experience: 64200,
    maxLife: 60,
    currentLife: 60,
    maxSpellSlotCount: 0,
    currentSpellSlotCount: 0,
    backstory: 'Beast',
    weaponType: 'Bare hands',
    armorType: 'Pan',
    armor: 12,
    intellect: 4,
    strength: 32,
    agility: 16,
    gold: 2,
}

class DndCharacter {
    constructor(nom, age, race, gender, lvl, experience, maxLife, currentLife, maxSpellSlotCount, currentSpellSlotCount, backstory, weaponType, armorType, armor, intellect, strength, agility, gold) {
        this.nom = nom;
        this.age = age;
        this.race = race;
        this.gender = gender;
        this.lvl = lvl;
        this.experience = experience;
        this.maxLife = maxLife;
        this.currentLife = currentLife;
        this.maxSpellSlotCount = maxSpellSlotCount;
        this.currentSpellSlotCount = currentSpellSlotCount;
        this.backstory = backstory;
        this.weaponType = weaponType;
        this.armorType = armorType;
        this.armor = armor;
        this.intellect = intellect;
        this.strength = strength; 
        this.agility = agility;
        this.gold = gold;
    }

    attack() {
        return Math.round(Math.random() * 6) + this.strength;
    }

    castSpell(spellName) {
        if (this.currentSpellSlotCount > 0) {
            console.log(spellName);
            this.currentSpellSlotCount--;
        } else {
            console.log('No more spell slots available');
        }
    }

    rest() {
        this.currentLife = this.maxLife;
        this.currentSpellSlotCount = this.maxSpellSlotCount;
    }

    takeDamage() {
        this.currentLife + this.armor - dmg;
        if(this.currentLife <= 0){
            console.log(this.nom + 'Super Ded')

        }
    }

    pickPocket() {
        if(this.getRandomNumber(12) + this.agility > goldAmount){
            this.gold += goldAmount;
        }
        else{
            this.takeDmg(1)
        }
    }

    readMind(phrase){
        if(this.getRandomNumber(20) + this.intellect > phrase.length / 2){
            this.experience += phrase.length /2;
        }
        else{
            this.takeDamage(1);
        }
    }
}

let Gabrare = new DndCharacter('Gabrare le Barbare', 42, 'Humain', 'male', '10', 64200, 60, 60, 0, 0, 'beast', 'mains nues', 'Pan', 12, 4, 32, 16, 2);

console.log(Gabrare);
console.log(Gabrare.attack());
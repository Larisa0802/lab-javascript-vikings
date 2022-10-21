// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`
        if (this.health <= 0) return `${this.name} has died in act of combat`
    }
    battleCry() {
        return `Odin Owns You All!`
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`
        if (this.health <= 0) return 'A Saxon has died in combat'
    }

}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1)
        }

    }

    saxonAttack() {
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        const saxonFight = this.vikingArmy[randomSaxon].receiveDamage(this.saxonArmy[randomViking].strength)
        if (this.vikingArmy[randomSaxon].health <= 0) {
            this.vikingArmy.splice(randomSaxon, 1)
        }
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}

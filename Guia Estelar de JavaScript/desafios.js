/*let nota = 60


if(nota >= 90) {
    mfinal = "parabens, vc tirou A"
    console.log(mfinal)
  } else if(nota < 90 && nota >= 80) {
        mfinal = "parabens, vc tirou B"
        console.log(mfinal)
  } else if(nota < 80 && nota >= 70) {
        mfinal = "burro, vc tirou C"
        console.log(mfinal)
  } else if(nota < 70 && nota > 60) {
    mfinal = "burro, vc tirou D"
    console.log(mfinal)
  } else {
    mfinal = "burraço para caralho, vc tirou F"
    console.log(mfinal)
  }
*/

/*
let finanças = {
    receitas: [1000, 400, 600],
    despesas: [250, 750]
}

function sum(array) {
  let total = 0
  
  for(let value of array) {
    total = total + value
  }
  
  return total
}


function CalcBalance() {
  const receitaTotal = sum(finanças.receitas)
  console.log(receitaTotal)
  const despesaTotal = sum(finanças.despesas)
  const saldoTotal = receitaTotal - despesaTotal
  
  if(saldoTotal < 0) {
    console.log(`Saldo negativo, total de ${saldoTotal}`)
  } else {
    console.log(`Saldo positivo, total de ${saldoTotal}`)
  }
}

CalcBalance()
*/


/*
function transform(degree) {
    const celsiusExists = degree.toUpperCase().includes("C")
    const farExists = degree.toUpperCase().includes("F")

    if(!celsiusExists && !farExists) {
        throw new Error("Pfvr pare de inventar")
    }

    //F > C

    let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = (far) => (far - 32) * 5/9


    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = celsius => celsius * 9/5 + 32

        return formula(updatedDegree) + 'F'
    }

    return formula(updatedDegree) + "C"

}

try {
    transform("50g")
} catch (error) {
    console.log(error.message)
}
*/


/**
 * Using ES6-style classes
 * See below for an alternative ES5-prototype solution setup
 */


/*

 class User {
  constructor(name) {
    this._name = name;
    this.logged = false;
    this.lastLogged = null;
  }
  isLoggedIn() {
    return this.logged
  }
  getLastLoggedInAt() {
    return this.lastLogged
  }
  logIn() {
    this.logged = true;
    this.lastLogged = new Date()
  }
  logOut() {
    this.logged = false
  }
  getName() {
    return this._name;
  }
  setName(name) {
    this._name = name
  }
  canEdit(comment) {
    if (comment._author === this) {
      return true
    }
    return false
  }
  canDelete(comment) {
      return false
  }
}

class Moderator extends User {
  constructor (name) {
      super(name)
  }
  canEdit(comment) {
    if (comment._author === this) {
      return true
    }
    return false
  }
  canDelete(comment) {
    return true
  }
}

class Admin extends Moderator {
  constructor (name) {
    super(name)
  }
  canEdit(comment) {
    return true
  }
  canDelete(comment) {
    return true
  }
}

class Comment {
  constructor(author, message, repliedTo) {
      this._author = author;
      this._message = message;
      this.repliedTo = repliedTo
   
  }
  
  getMessage() {
    return this._message
  }
  setMessage(message) {
    this._message = message
  }
  getCreatedAt() {
    return new Date()
  }
  getAuthor() {
    return this._author
  }
  getRepliedTo() {
    return this.repliedTo
  }
  toString() {
    if (this.repliedTo == undefined) {
       console.log(this)
      return this._message + " by " + this._author.getName()
    } else {
     
      return this._message + " by " + this._author.getName() + " (replied to " + this.repliedTo._author.getName() + ")"
    }
  }
}*/

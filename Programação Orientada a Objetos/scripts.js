//Classes

//Encapsulamento

//Estrutural
let altura = 50
let largura = 60

function calcArea() {
    return altura * largura
}

let area = calcArea()

//Orientado a objetos
class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calcularArea()
    }

    #calcularArea() {
        return this.altura * this.largura
    }
}

//criar o objeto
let poligono = new Poligono(50, 60)
console.log(poligono.area) //utilizando o 'area' da classe

//Herança
class Veiculo {
    rodas = 4;

    mover(direcao){}
    virar(direcao){}
}

class Moto extends Veiculo {
    constructor() {
        super() //puxar atributos do pai
        this.rodas = 2
    }
}

//Polimorfimso
class Atleta {
    peso;
    categoria;

    constructor() {
        this.peso = peso
    }

    definirCategoria() {
        if (this.peso <= 50) {
            this.categoria = "infantil"
        }
        else if (this.peso <= 65) {
            this.categoria = "juvenil"
         }
        else {
        this.categoria = "adulto"
        }
    }
}

class Lutador extends Atleta {
    constructor(peso) {
        super(peso)
    }

    definirCategoria() {
        if (this.peso <= 54) {
            this.categoria = "pluma"
        }
        else if (this.peso <= 60) {
            this.categoria = "meio-leve"
        }
        else {
            this.categoria = "pesado"
        }
    }
}

//Abstração
class Parafuso { //Superclasse - Abstrada
    constructor() {
        if (this.constructor === Parafuso)
            throw new Error("Classe abstrata não pode ser instanciada")
    }
    get tipo() {
        throw new Error('Método "get tipo()" precisa ser implementado')
    }
}

class Fenda extends Parafuso {
    constructor() { super() }

    get tipo() {
        return "fenda"
    }
}

class Philips extends Parafuso {
    constructor() { super() }

    get tipo() {
        return "philips"
    }
}

class Allen extends Parafuso {}

//criar e usar
new Parafuso() // "Classe abstrata não pode ser instanciada"
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo)
console.log(allen.tipo) //'Método "get tipo()" precisa ser implementado'



class User {
    constructor(name) {
      this.name = name
    }
    isLoggedIn() {
      if (this.getLastLoggedInAt() == null) {
        return false
      }
      return true
    }
    getLastLoggedInAt() {
      return null
    }
    logIn() {
      if (this.isLoggedIn() == false) {
        return true
      }
    }
    logOut() {
      if (this.isLoggedIn() == false) {
        return true
      }
    }
    getName() {
      return this.name
    }
    setName(name) {
      this.name = name
    }
    canEdit(comment) {
      if (comment.author === this.name) {
        return true
      }
      return false
    }
    canDelete(comment) {}
  }
  
  class Moderator extends User {
    constructor(name) {
      super()
    }
    canEdit(comment) {
      if (comment.author === this.name) {
        return true
      }
      return false
    }
  }
  
  class Admin extends Moderator {
    constructor(name) {
      super()
    }
    canEdit(comment) {
      return true
    }
  }
  
  class Comment {
    constructor(author, message, repliedTo) {
      this.author = author;
      this.message = message;
      this.repliedTo = repliedTo;
    }
    getMessage() {}
    setMessage(message) {
      
    }
    getCreatedAt() {
      return new Date()
    }
    getAuthor() {
      return this.author
    }
    getRepliedTo() {
      if (!this.repliedTo) {
        return null
      }
      return this.repliedTo
    }
    toString() {}
  }
  
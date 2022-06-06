//comentario em linha
//o codigo abaixo escreve alguma mensagem no devtools
console.log('Bem vindos ao tititti') //alguma coisa
/* tambem posso utilizar esta para fazer comentarios 
em bloco */


/*========= DATA TYPES =============
primitive / primitive value
structural
structural primitive

primitivos:
    string
    number
    boolean
    undefined
    symbol
    BigInt

estruturais
    object
        array
        map
        set
        date
        ...
    function

primitivo estrututal / structural root primitive
null

*/


/* String
    Cadeia de caracteres
    ""
    ''
    `` permite escrever multilinhas e incluir expressoes dentro da propria string
*/

/*
    Numeros

    inteiros 33
    reais - float 12.5
    NoN not a number
    Infinity infinito
*/

console.log(12.5 + 45)

/*
boolean

somente 2 valores
verdadeiro ou false
true or false
utilizado para criar condicionais e caminhos para a aplicação

*/
console.log(false)

/*
undefined
    indefinido

null
    nulo
    objeto que nao possui nada dentro
    diferente de indefinido

*/

/*
object
    objeto
    propriedades / atributos
    funcionalidades / metodos
    { prorpriedade: "valor" }
*/

console.log({
    name: "Roberto",
    idade: 23,
    andar: function() {
        console.log("andar")
    }
})

/*
array (vetores)
    uma lista
    agrupamento de dados

    [Roberto, 23]

*/

console.log([
    "Roberto",
    23
])


/* ======= VARIABLES ===============

nomes simbolicos para receber algum valor
atalhos de codigo
identificadores
3 palavras reservadas para criar variaveis
    var
    let
    const
*/

// var
var clima = "quente"
clima = "frio" //alterando variavel, reatribuindo valor
console.log(clima)

// let
let clima = "quente"
clima = "frio" 
console.log(clima)

//const - nao pode alterar seu valor durante a aplicação
const clima = "quente"
clima = "frio"
console.log(clima)

/* tipos dinamicos
JS é uma liguagem fracamente tipada e dinamica
variaveis nao precisam ter um tipo previamente definido
podemos mudar o conteudo da variavel
o tipo existe a partir do momento em que vc atribui um valor à variavel
*/
let clima = "quente" 
console.log(typeof clima)

/* Scope
escopo determina a visibilidade de alguma variavel no JS

* block statement
{
    aqui dentro é um bloco e posso colocar qualquer código
} aqui fechamos o bloco

o bloco também criará um novo escopo, chamado de block-scoped
*/

{
    let x = 0
    console.log(x)
}

// o var é global e também local, e poderá funcionar fora de um escopo de bloco

//hoisting - elevação - joga a var para cima

console.log("existe x depois do bloco? ", x) 

{
    var x = 0
}

console.log("existe x depois do bloco? ", x)

// const e let sao locais e so funcionam no escopo onde foram criadas

console.log("existe x depois do bloco? ", y) 

{
    let y = 0
    console.log("existe y? ", y)
}

console.log("existe x depois do bloco? ", y)

/* Criando nomes de variaveis

JS é case-sensitive
JS aceita cadeia de caracteres unicode

posso:
    iniciar com esses caracteres especiais: $ _
    iniciar com letras
    colocar acentos
    letras minusculas e maiusculas fazem diferença

nao posso:
    iniciar com numeros
    colocar espaços vazios no nome

ideal:
    criar nomes que fazem sentido
    que expliquem o que a variavel é ou faz
    camelCase
    snake_case
    escrever em inglês
*/


// ========== PRATICANDO =========== 

//var assignment
// var name

var name = "Roberto"

//agrupamento de declarações
let age, isHuman

age = 23
isHuman = true
// multiplos argumentos na função
console.log(name, age, isHuman)

//escrita de texto + variaveis
// concatenando valores
console.log("o " + name + " tem " + age + " anos.")

//interpolando valores com template literals
console.log(`o ${name} tem ${age} anos`)

// Object

const person = {
    name: "Roberto",
    age: 23,
    weight: 70.1,
    isAdmin: true

}

console.log(person.name) //coleta somente o valor da propriedade desejada

//arrays

const animals = [
    "lions",
    "monkey",
    {
        name: "cat",
        age: 4
    }
]

//acessar valores dentro do array

console.log(animals[2])


// ================= FUNCTIONS ==================

//reutilizar linhas de codigos criada anteriormente

//declaration - declaração da função - function statement
function createPhrases() {
    console.log("Frase motivacional 1")
    console.log("Frase motivacional 2")
    console.log("Frase motivacional 3")
}

//executar a função - run, execute, invoke
createPhrases()

console.log("Fim do programa")

//declarar funções dentro de variáveis
//parametros (parameters)
// function expression
//anonymous function

const sum = function(number1, number2){
    let total = number1 + number2
    return total 
}

sum(2,3) //passando argumentos para a função

let number1 = 10
let number2 = 15

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
sum(number1, number2)

// function scope

let subject

function createThink() {
    subject = "study"
    return subject
}

console.log(subject)
console.log(createThink())
console.log(subject)

// function hoisting - tem que ser escrito da forma abaixo, se forem utilizadas variaveis vai dar erro

sayMyName()

function sayMyName() {
    console.log(`Roberto`)
} 

//arrow fuction
//substitui a expressão const sayMyName = function() {}

const sayMyName = (name) => {
    console.log(name)
}

sayMyName(`Roberto`)


//callback function - uma função que está passando como parâmetro para outra função

function sayMyName(name) {
    console.log(name)
    name()
} 

sayMyName(
    () => {
        console.log(`estou em uma callback`)
    }
) 

/* function() constructor
   expressao new
   criar um novo objeto
   this keyword
*/

function Person(name) {
    this.name = name
}
const mayk = new Person("Mayk")

console.log(mayk)



//======================= MANIPULANDO DADOS =================

/* Prototype
    prototype-based language
    prototype chain
    __proto__
*/

"Roberto".length

// Type conversion (typecasting) vs type coersion
//alteração de um tipo de dado para outro

console.log(Number('9') + 5) //conversion
console.log('9' + 5) //coercion

//manipulando strings e numeros
//transformando string em numero e numero em string

let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

//contando caracteres e digitos

let word = "palmeiras"
console.log(word.length)
let number = 1234
console.log(String(number).length)

//manipulando strings e numeros
// transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula

let number = 4516.5656
console.log(number.toFixed(2).replace(".", ","))

//transforme letras minusculas em maiusculas. Faça o contrario disso tb

let word = "Palmeiras"
console.log(word.toLowerCase())

//verificar se um texto possui uma palavra específica

let phrase = "Eu quero viver!"
console.log(phrase.includes("Amor"))

let phrase = "Eu quero viver um amor!"
console.log(phrase.includes("amor"))

//manipulando strings e arrays

// separe um texto que contem espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços coloque _

let phrase = "Eu quero viver um amor!"
let myArray = phrase.split(" ")
let phraseWithUnderScore = myArray.join("_")
console.log(phraseWithUnderScore)

//Manipulando arrays

//criando array com o constructor

let myArray = new Array('a', 'b', 'c')
console.log(myArray)

//contar elementos do array
console.log(["a", "b", "c"].length)

//transformar uma cadeia de caracteres em elementos de um array

let word = "manipulação"
console.log(Array.from(word))

//exercicios
let techs = ["html", "css", "js"]

//adicionar um item no fim
console.log(techs.push("nodejs"))

//adicionar no começo
techs.unshift("sql")

//remover do fim
techs.pop()

//remover do começo
techs.unshift()

//pegar somente alguns elementos do array
console.log(techs.slice(1, 2))

//remover um ou mais itens em qualquer posição do array
techs.splice(1, 2)

//encontrar posição do elemento no array
let index = techs.indexOf("css")
techs.splice(index, 1)


//==================== EXPRESSÕES E OPERADORES ====================

/*
expressoes e operadores
    expressions
    operators
        binary
        unary
        ternary
*/
let number = 1
console.log(++number)
//ou
console.log(--number)

/*
new
    left-hand-side expression
    criar um novo objeto
*/

let name = new String("Roberto")
let age = new Number(23)
let date = new Date("2022-05-12")

/*
operadores unários 
typeof
delete
*/

const person = {
    name: "Roberto",
    age: 23
}
delete person.age

console.log(person)

//Operadores artiméticos

//multiplicação *
console.log(3.2 * 5)

//divisão /
console.log(12 / 2)

//soma +
console.log(34 + 67)

//subtração -
console.log(10 - 23)

//resto da divisão %
let remainder
remainder = 11 % 3
console.log(remainder)

//incremento ++
let increment = 0
increment++
console.log(increment)

//decrement
let decrement = 0
--decrement
console.log(decrement)

//exponencial **
console.log(3 ** 3)


// Grouping operator ()

let total = (2 + 3) * 5

//operadores de comparação
//irá comparar valores e retornar um boolean como resposta à comparação

let one = 1
let two = 2

//igual a ==

console.log(two == 1)
console.log(one == "1")

// != diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != "1")

// === estritamente igual a
console.log(one === "1")
console.log(one === 1)


// === estritamente diferente de (compara os valores e os tipos)
console.log(one !== "1")
console.log(one !== 1)

// > maior que

// >= maior igual a 

// < menor que

// <= menor igual a

//operadores de atribuição (assignment)
let x
console.log(x)

//assignment
x = 1
console.log(x)

//addition assignment
x += 2 //x = x + 2

// subtraction assignment
x -= 1

//multiplication assignment
x *= 2

//division assignment
x /= 2

//remeinder, exponenciation
x %= 2
x **= 2

// operadores lógocps (logical operators)

// - 2 valores booleano, quando verificadores, resultarão em verdadeiro ou falso

let pao = true
let queijo = true

//AND &&
console.log(pao && queijo)

//OR ||
console.log(pao || queijo)

//NOT !
console.log(!pao)

// Operador condicional (ternário)

//dependendo da condição, nós receberemos valores diferentes

//condição então valor 1 se não valor 2
//condition ? value1 : value2

//cafe top
let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? "Café pika" : "café mixuruca"

console.log(niceBreakfast)

//maior de 18
let age = 16
const canDrive = age >= 18 ? "Pode dirigir" : "Não pode dirigir"

// Operador de string (string operator)

// comparison (comparação)
console.log("a" == "b")

//concatenation
//retorna a união de duas strings
console.log("a" + "a")

/*
Falsy
quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

false
0
-0
""
null
undefined
NaN
*/
console.log(0 ? 'verdadeiro' : "falso")

/*
Truthy
Quando o valor é considerado true em contextos onde um booleano é obrigatório

true
{}
[]
1
3.23
"0"
"false"
-1
Infinity
-Infinity
*/
console.log({} ? 'verdadeiro' : "falso")

/*
operator precedence
precedência de operadores
    grouping ( )
    negação e incremento ! ++ --
    multiplicação e divisão * /
    adição e subtração + -
    relacional < <= > >=
    igualdade == != === !==
    AND &&
    OR ||
    condicional ? :
    assignment = += -= *=
*/

//==================== CONTROL FLOW ================

//If... Else

let temp = 36.5

if(temp >= 37.5) {
    console.log("Febre alta")
} else if(temp < 37.5 && >= 37) {
    console.log("Febre baixa")
} else {
    console.log("Sem febre")
}

//switch

let expression: 'a'

switch(expression) {
    case 'a':
        //codigo
        break
    case 'b': 
        //codigo para expressao b
        break
    default:
        break
}

//throw

function sayMyName (name = '') {
    if (name === '') {
        throw "Nome é necessário"
    }
    console.log('depois do erro')
}

// try... catch

try {
    sayMyName()

} catch(e) {
  console.log(e)

}

//======================== ESTRUTURAS DE REPETIÇÃO ===============

//for
//break - para a execução do loop
//continue - pula a execução do momento

for(let i = 0; i < 10; i++) {
    console.log(i)
}

for(let i = 100; i > 0; i--) {
    if(i === 50) {
        break
    }
}


//While

let i = 0
while(i < 10) {
    console.log(i)

    i++
}

//For... of
//para pelas variaveis de algum elemento

let nam = "roberto"

for(let char of nam) {
    console.log(char)
}

//for... in
//passa por todas as propriedades de um objeto

let person = {
    name: 'italo';
    age: 35,
    weight: 70
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}

//============= EXERCÍCIOS =====================


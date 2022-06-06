// getElementById()
//const element = document.getElementById('meu-bloco')
//console.log(element)


//  getElementByClassName()
//  pode selecionar diversos elementos que possuem o msm class name
//const element = document.getElementsByClassName('one')
//console.log(element)

// getElementByTagName()
//const element = document.getElementsByTasgName('meta')
//console.log(element)

//const element = document.querySelector('.query')
//console.log(element)

//const element = document.querySelectorAll('.one')
//console.log(element)

//***Manipulando elementos***

//const element = document.querySelector('h1')

//element.textContent += 'Hello, world!'

//element.innerHTML = 'Hello, world!'

//element.innerHTML = 'Hello, world! <small>!!!</small>'

//const element = document.querySelector('input')

//element.value = 'valor que eu quiser'

/*const header = document.querySelector('header')

header.setAttribute('id', 'header')
const headerID = document.querySelector('#header')
console.log(headerID)

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')
header.removeAttribute('class')*/


//*******Manipulando estilos e classes*********

//const element = document.querySelector('body')

//element.style.backgroundColor = '#f9f3D2'

/* element.classList.add('active', 'green', 'red')
console.log(element.classList)
element.classList.remove('red')
console.log(element.classList)
element.classList.toggle('active')
console.log(element.classList) */

//******Navegando pelos elementos*********

//const body = document.querySelector('body')
//console.log(body.parentNode)

//const h1 = document.querySelector('h1')
//console.log(h1.parentElement)

//const element = document.querySelector('body')

//console.log(element.childNodes)

//console.log(element.children)

//console.log(element.firstChild)

//console.log(element.firstElementChild)

//console.log(element.nextSibling)

//***********Criando e adicionando elementos na página*******

//const div = document.createElement('div')
//div.innerText = 'Novo elemento criado'

//const body = document.querySelector('body')
//body.prepend(div)

//const body = document.querySelector('body')
//const script = body.querySelector('script')

//body.insertBefore(div, script)
//body.insertBefore(div, script.nextElementSibling)

//************Eventos*******************

/*function print() {
    console.log('print')
} */

//const input = document.querySelector('input')

//input.onkeydown = function() {
//    console.log('rodei')
//}

//const h1 = document.querySelector('h1')

//h1.addEventListener('mouseover', print)

//function print() {
//    console.log('print')
//}

//h1.onclick = print

//const input = document.querySelector('input')

//input.onkeydown = function(event) {
//    console.log(event.currentTarget.value)
//}

//*******Exercicio*********


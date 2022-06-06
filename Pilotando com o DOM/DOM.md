# Documento Object Model (DOM)

- É o HTML convertido para um Objeto JavaScript
- API qie representa e interage com o HTML
- Estrutura de dados do tipo árvore, criada pelo browser
- Propriedades e métodos

# Para que?

- JS usa o DOM para se conectar ao HTML
- Manipular o HTML com o JS
- Você só programa em WEB pq existe a DOM

# Seletores

## getElementById(element)
Seleciona elemento pela ID

## getElementByClassName(HTMLCollection)
pode selecionar diversos elementos que possuem o msm class name
 s
## getElementByTagName(HTMLCollection)
Seleciona elementos que possuem determinada tag

## querySelector(element)
Seleciona o elemento pelo seletor CSS

## querySelectorAll(Nodelist)
seleciona todos os elementos que tenham o atributo informado (nodelist)

## nodelist vs html collection
Depende da necessidade da situação

==============================================================

# Manipulando conteúdos

## .textContent
utilizado para alterar o conteudo de texto da tag html

## .innerText
altera o texto interno do elemento

## .innerHTML
troca conteudo html interno

## value
como manipular valores recebidos, tanto receber quanto atribuir

## element.setAttribute
utilizado para manipular atributos dos elementos

## .getAttribute
retorna atributo informado

## .removeAttribute
remove atributo selecionado

================================================================

# Manipulando estilos e classes

## .style
permite que se coloque css em linha ou retorne o estilo do elemento

## .classList
- .add adiciona classe
- .remove remover classe
- .toggle metodo que pesquisa o estado da classe: se existir, ele remove, se não existir, ele adiciona, como um interruptor


==================================================================

# Navegando pelos elementos pais

## .parentNode e parentElement
retorna os elementos de origem de determinado elemento (nó pai ou elemento pai)

## pegando elementos filhos
- .childNodes pega os filhos do elementos em formato de nodelist
- .children HTMLcollection que traz nesse formato os elementos filhos eliminando os espaços vazios
- .fistChild ou firstElementChild retorna o primeiro filho/elemento filho
- lastChild ou lastElementChild mesma função, mas com o ultimo elemento filho

## buscando irmãos
- .nextSibling ou .nextElementSibling proximo elemento irmão
- .previousSibling ou previousElementSibling elemento irmão anterior

=================================================================

# Criando e adicionando elementos na pagina

- createElement cria novo elemento na pagina
- append ou prepend adiciona o novo elemento após/antes o elemento informado
- insertBefore(elemento novo, nó de referência) adiciona elemento antes de determinado elemento
    utilizar o nextElementSibling no segundo elemento para simular o insertAfter

==================================================================

# Eventos

- eventos são adicionados nas tags html pela propriedade 'on---' seguido da função

## Eventos de teclado

- 'onkey---' seguido da função, realiza função por conta da ação do teclado

## Adicionando eventos via JS

- addEventListener função que recebe dois argumentos, tipo do evento e função que vai executar

- elemento.evento (h1.onclick) possui a msm função, porém, diferentemente o eventlistener, ele nao empilha as funções, executa somente a ultima

## Argumentos event

- function(event) pode-se retornar informações com o event.key---
    event.currentTarget.value
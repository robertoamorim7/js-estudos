Objetos

Todo objeto possui:
Propriedades e funcionalidades: cor, peso, tamanho / escrever, clicar, arrastar
Estado e comportamentos: destampada, de ponta cabeça, etc.

Abstratos vs Mundo real

Mundo real para objetos: pessoa, aluno, produto, carrinho de compras

Porém, alguns objetos na programação não sao faceis de se identificar, pois são abstratos, como, por exemplo: autentificação, autorização.

Nem todo objeto do mundo real fará parte do seu sistema.

# Classes

Na POO, as classes funcionam como um molde para os objetos. Os objetos são criados a partir de uma classe e muitos deles podem ser feitos na mesma classe.
Ex: máquina de biscoito:
    instâncias (objetos criados através da classe)

# Classe em JS

A classe no JS é uma Syntatical Sugar, uma maneira mais organizada de escrever prototypes. Tudo é protótipo que herda propriedades.

# Encapsulamento

Dirigir carros vs conhecer motor do carro

- Colocar numa cápsula
- Agrupamento de funções e variáveis
- Esconder detalhes de implementação
- Camada de segurança para os atributos e métodos

# Estruturada vs Orientada a objetos

## Estruturada:
- Processa a entrada e manipulação dos dados, até a saída
- Uso de sequencias, estruturas de repetições e condições
- Uso de uma rotina maior, ou sub-rotinas
- Não existem restrições às variáveis

## Orientada a objetos
- Surge para trazer um cuidado ao uso estruturado
    não elimina por completo o uso estruturado
- Conceitos como objetos e classes
- Cuidados com variáveis e rotinas (encapsulamento)
- Melhor reuso de código (herança)

# Herança

Os objetos podem herades ou estender características bases de outros objetos, tudo que tem no pai, o filho tem.
- Cópia de atributos e métodos de outra classe
- Um objeto pode estender de outro objeto que pode estender de outro objeto, tornando fácil a reutilização do código

# Polimorfismo

Quando um objeto estende de outro (herança), talvez haja a necessidade de reescrever uma ou mais características (atributos ou métodos) ness novo objeto.
Recriaremos então um método ou mais da classe herdada.
Polimorfismo significa muitas formas.

# Abstração

Template ou identidade de uma classe que será construída no futuro
- Atributos e métodos podem ser criados na classe de Abstração (Superclasse) MAS
- A implementação dos métodos e atributos só poderá ser feita na classe que irá herdar essa Abstração
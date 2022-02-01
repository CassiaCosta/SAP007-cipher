# Cifra de César

## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

- Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto com cifra: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
- A letra A será D
- A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

Este projeto foi a primeira aplicação web do _bootcamp_. Nela o usuário
poderá cifrar e decifrar um texto indicando a chave de deslocamento (_offset_).

O tema foi escolhido para aqueles que são apaixonados pela "telinha preta com comandos verdades", simulando uma área para aqueles que queiram se sentir como Hackers ao enviar ou desvendar mensagens criptografadas. Sinta-se livre para sua imaginação te guiar, seja; você pensando em alguma situação de vida real em que seja
necessário cifrar uma mensagem. Algumas ideias de
exemplo:

- Ferramenta de mensagens internas de uma organização
  em uma zona de conflito.
- Mensagens secretas para alguma pessoa, etc.

## 4. Considerações gerais

- Este projeto foi resolvido individualmente.
- O projeto foi entregue subindo o código no GitHub (commit/push) e o
  deploy será feito no GitHub Pages. 
- Tempo para completar foi de: 2 semanas.

## 5. Critérios de aceitação mínimos do projeto

Usar o alfabeto simples (somente maiúsculas e sem ç):

- A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

Critério principal concluído com sucesso.

### Interface do usuário (UI)

A interface permite ao usuário:

- Eleger um _offset_ indicando quantas posições de deslocamento de caracteres
  quer que a cifra utilize.
- Inserir uma mensagem (texto) para ser cifrada.
- Ver o resultado da mensagem cifrada.
- Inserir uma mensagem (texto) para ser decifrada.
- Ver o resultado da mensagem decifrada.

### "Deployar", instalar e executar

- `REAME.md`: deve explicar como "deployar", instalar e executar a aplicação,
  assim como uma introdução a aplicação, suas funcionalidades e as decisões que
  foram tomadas.


## 6. Hacker Edition

Além do critério principal, o projeto aceita os critérios de letras minúsculas e caracteres especiais como: espaço e pontuação.

## 7. Considerações técnicas

A lógica do projeto foi implementada inteiramente em JavaScript. Nesse
projeto **NÃO** foi utilizadas bibliotecas ou frameworks, só vanilla
JavaScript, HTML5 e CSS3.
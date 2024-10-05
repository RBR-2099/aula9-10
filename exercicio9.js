/*3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console*/


let listaDeTarefas = []
resposta1 = prompt ('Qual a primeira tarefa que você precisa realizar hoje?')
resposta2 = prompt ('Qual a segunda tarefa que você precisa realizar hoje?')
resposta3 = prompt ('Qual a terceira tarefa que você precisa realizar hoje?')
listaDeTarefas.push (resposta1, resposta2, resposta3)
console.log (listaDeTarefas)
resposta4 = prompt ('Qual o índice da tarefa que você já realizou?')
listaDeTarefas.splice (resposta4,1)
console.log (listaDeTarefas)

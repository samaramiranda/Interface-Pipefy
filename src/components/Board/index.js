import React, { useState } from 'react';
import produce from 'immer'; //para manipular estados como se fossem vetores
import BoardContext from './context';
import { loadLists } from '../../services/api' //pega os dados da api

import List from '../List';

import { Container } from './styles';

const data = loadLists(); //carrega os dados da api

export default function Board() {
const [lists, setLists] = useState(data); //estado para guardar dados da posição dos cards na lista

  function move(fromList, toList, from,to) { //de onde quero mover o card e para onde
    setLists(produce(lists, draft => { //crio um rascunho no draft com as alterações e passo para a list
      const dragged = draft[fromList].cards[from];
   
      draft[fromList].cards.splice(from, 1); //removendo o item arrastado da lista
      draft[toList].cards.splice(to, 0, dragged); //colocando o item em uma nova lista
    }))
  }

  return (
    <BoardContext.Provider value={{ lists, move }}> {/*para atualizar o valor do list*/}
      <Container>
        {/*para percorrer a lista como um vetor e retornar outros lists e os dados deles*/}
        {lists.map((list, index )=> <List key={list.title} index={index} data={list}></List>)} {/*Estou pegando os dados que estão dentro da lista*/}
      </Container>
    </BoardContext.Provider>
  );
}

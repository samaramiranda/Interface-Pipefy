import React, { useRef, useContext } from 'react'; //useRef para criar referencia. UseContext serve para acessar informações de um contexto
import { useDrag, useDrop } from 'react-dnd'; //biblioteca para usar o drag n'drop

import BoardContext from '../Board/context';

import { Container, Label } from './styles';

export default function Card( {data, index, listIndex} ) { /*pegando os dados dos cards*/
  const ref = useRef();
  const { move } = useContext(BoardContext); //pegando a função move do contexto
  
  const [{ isDragging }, dragRef] = useDrag({ //para poder arrastar o item. 
    item: { type: 'CARD', index, listIndex}, //todo elemento arrastavel precisa ter um tipo
    //coletar informaçoes do drag, como se o usuario está arrastando o item ou não
    collect: monitor => ({ //guarda todas informações do item no momento
      isDragging: monitor.isDragging(), //isDragging é quando o card está sendo arrastado
    }),
  });

  const [, dropRef] = useDrop({ //para poder soltar o item
    accept: 'CARD',//quais os tipos de drags que ele pode receber
    hover(item, monitor) { //função chamada quando eu passar um card por cima de outro. Item é qual cart estou arrastando
      const draggedListIndex = item.listIndex; 
      const targetListIndex = listIndex; //lista que está recebendo o novo item

      const draggedIndex = item.index;//index do item que está sendo carregado
      const targetIndex = index; //para qual item estou arrastando
    
      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex){
        return; //se o usuário está arrastando o card para cima dele mesmo não faz nada
      };

      const targetSize = ref.current.getBoundingClientRect(); //retornando o tamanho do elemento
      const targetCenter = (targetSize.bottom - targetSize.top) /2; //calculando o ponto central do card

      const draggedOffset = monitor.getClientOffset(); //verifica o quanto do item arrastei 
      const draggedTop = draggedOffset.y - targetSize.top;

      //se o item que estou arrastando veio antes do item que recebeu o arraste em cima, e a posição do dragget for menor que o centro do card
      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      };

      //se o item que estou arrastando veio depois do item que recebeu o arraste em cima, e a posição do dragget for maior que o centro do card
      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      };

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
    
      item.index = targetIndex; //mudando o index do item que foi movido
      item.listIndex = targetListIndex; //mudando o index da lista para onde o item foi arrastado
    }
  });

  dragRef(dropRef(ref));
  
  return (
    <Container ref={ref} isDragging={isDragging}> {/*dragRef é a referencia que preciso passar no elemento que quero que seja arrastado*/}
      <header>
        {data.labels.map(label => <Label key={label} color={label} ></Label>)} {/*map para percorrer o valor de labels*/}
      </header>
      <p>{data.content}</p>
      { data.user && <img src={data.user} alt=""></img>} {/*imagem do avatar*/}
    </Container>
  );
};

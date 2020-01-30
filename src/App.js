import React from 'react';
import { DndProvider } from 'react-dnd'; //para o drag n'drop funcionar
import HTML5Backend from 'react-dnd-html5-backend';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Board from './components/Board';


function App() {
  return (
    <DndProvider backend={HTML5Backend}> {/*vai utilizar a api de html do html5 */}
    <Header></Header>
    <Board></Board>

    <GlobalStyle></GlobalStyle>
    </DndProvider>
  );
}

export default App;

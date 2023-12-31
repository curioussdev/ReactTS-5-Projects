import React, { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item'; 

const App = () => {
  const [ list, setList ] = useState<Item[]>([
    { id: 1, name: '0Comprara Pão', done: false},
    { id: 2, name: 'Comprar Carro', done: false},
    

  ]);
  
  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Terefas</C.Header>

        {/* Area de adicionar tarefas*/}

        { list.map((item, index) => (
          <div >{item.name}</div>
        ))}
        
      </C.Area>
    </C.Container>
  );
};

export default App;
import { useState } from 'react';
import { ListItem } from './components/ListItem';

import { Item } from './types/Item';

import * as C from './App.styles';

const App = () => {
  const [list, setList] = useState<Item[]>([ 
    { id: 1, name: 'Comprar o pão na padaria', done: false },
    { id: 2, name: 'Lavar o carro', done: true },
  ]); 

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App;

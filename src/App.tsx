import React, { useState } from 'react';
import styled from 'styled-components';
import Item from './components/item';

function App() {
  const [itemsList, setItemsList] = useState<Array<string>>(["Item1", "Item2"]);
  const [currentItem, setCurrentItem] = useState<string>("");

  const Header = styled.div`
    font-size: 48px;
    color: blue;
    font-weight: bold;
    text-align: center;
  `;

  return (
    <div>
      <Header>
        To Do List:
      </Header>

      {itemsList.map((txt) => {
        return <Item text={txt} list={itemsList} setList={setItemsList} />;
      })}

      <hr />

      <input type="text" value={currentItem} onChange={(event) => {
        setCurrentItem(event.target.value);
      }} />
      <button onClick={() => {
        let temp = [...itemsList];
        temp.push(currentItem);
        setItemsList(temp);
      }}>Add</button>
    </div>
  );
}

export default App;

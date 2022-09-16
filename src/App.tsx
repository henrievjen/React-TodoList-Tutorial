import React from 'react';
import styled from 'styled-components';
import Item from './components/item';

function App() {
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

      <Item text="Do homework" />
      <Item text="Do something" />
      <Item text="Do 1" />
      <Item text="Do 2" />

      <hr />

      <input type="text" />
      <button>Add</button>
    </div>
  );
}

export default App;

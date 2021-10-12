import React, { useEffect, useState } from 'react';
import { Counters, /*  Movies, */ NavBar } from './Components';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const resetItems = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ];

  const cart = useState(resetItems),
    [Items, setItems] = cart;

  const onDelete = (id) => setItems((Items) => Items.filter((item) => item.id !== id));

  const onReset = () => setItems(resetItems);

  const onChange = (corrent, add) => {
    const temp = [...Items];
    const index = Items.indexOf(corrent);
    add ? temp[index].value++ : temp[index].value--;
    setItems(temp);
  };

  return (
    <div>
      <NavBar Items={Items.filter((item) => item.value > 0)} />
      <main className="container">
        <Counters onReset={onReset} onChange={onChange} onDelete={onDelete} Items={Items} />
      </main>
      {/* <Movies /> */}
    </div>
  );
}

export default App;

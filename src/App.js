import { cloneDeep } from 'lodash';
import React, { useState } from 'react';
import './App.css';
import AddButton from './components/AddButton';
import MainContainer from './components/MainContainer';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [listType, setListType] = useState('todo');
  const [cards, setCards] = useState({
    'todo': [],
    'doing': [],
    'done':[],
  });

  return (
    <div className = "App">
        <h1 className = 'heading'>Trello</h1>
        <AddButton
          title={title}
          description={description}
          listType={listType}
          setTitle={setTitle}
          setDescription={setDescription}
          setListType={setListType}
          onSave={() => {
            const newCards = cards;
            newCards[listType].push({
              title,
              description,
            });
            setCards(cloneDeep(newCards));
          }}
        />
        <MainContainer cards={cards} />
    </div>
  );
}

export default App;

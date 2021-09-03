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
  const [open, setOpen] = useState(false);
  const [error,setError] = useState('');
  const [previousListType,setPreviousListType] = useState('');
  const [index,setIndex] = useState(-1);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setTitle('');
        setDescription('');
        setListType('todo');
        setError('');
        setOpen(false);
    };
    
    const handleSave = () => {
      const newCards = cards;
      if(index >= 0)
        newCards[previousListType].splice(index,1);
      newCards[listType].push({
        title,
        description,
      });
      setCards(cloneDeep(newCards));
      setTitle('');
      setDescription('');
      setListType('todo');
      setError('');
      setIndex(-1);
      setOpen(false);
  };

  return (
    <div className = "App">
        <h1 className = 'heading'>Trello</h1>
        <div className = 'add' onClick={handleClickOpen}>
          Add New Card   
        </div>
        <AddButton
          title={title}
          description={description}
          listType={listType}
          setTitle={setTitle}
          setDescription={setDescription}
          setListType={setListType}
          handleClose={handleClose}
          handleSave={handleSave}
          open={open}
          error={error}
          setError={setError}
        />
        <MainContainer 
          cards={cards}
          setTitle={setTitle}
          setDescription={setDescription}
          setListType={setListType}
          setOpen={setOpen} 
          setPreviousListType={setPreviousListType}
          setIndex={setIndex}
        />
    </div>
  );
}

export default App;

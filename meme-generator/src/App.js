import React from 'react';
import './App.css';
import Meme from './Meme';
import AddMemeForm from './AddMemeForm';
import {useSelector, useDispatch} from 'react-redux';



function App() {

  const memes = useSelector(store => store.memes);
  const dispatch = useDispatch();

  function addMeme(NewMeme){
    dispatch({type: "ADD_MEME", meme: NewMeme});
  }

  function deleteMeme(id){
    dispatch({type: "REMOVE_MEME", id});
  } 

  const memeComponents = memes.map(meme => (
    <Meme
      key={meme.id}
      topText={meme.topText}
      bottomText={meme.bottomText}
      url={meme.url}
      deleteMeme={() => deleteMeme(meme.id)}
    />
  ));


  return (
    <div className="App">
      <AddMemeForm  addMeme={addMeme}/>
      {memeComponents}
    </div>
  );
}

export default App;

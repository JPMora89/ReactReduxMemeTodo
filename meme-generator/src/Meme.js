import React from 'react';
import './Meme.css';


function Meme({deleteMeme, topText, bottomText, url, id}) {
    function handleDeleteMeme(){
        deleteMeme(id);
    }   


return (
    <div id="foo" className="Meme">
      <div className="container">
        <span className="top-text">{topText}</span>
        <img src={url} alt="a meme" />
        <span className="bottom-text">{bottomText}</span>
        <button id="meme_deleteBtn" onClick={handleDeleteMeme}>
          DELETE
        </button>
      </div>
    </div>
  );
}
export default Meme;
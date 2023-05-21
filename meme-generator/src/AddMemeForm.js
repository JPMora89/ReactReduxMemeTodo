import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './AddMemeForm.css';

const DEFAULT_FORM = {
    topText: "",
    bottomText: "",
    url: ""
}

function AddMemeForm({addMeme}) {
    const [form, setForm] = useState(DEFAULT_FORM);

    function handleSubmit(evt){
        evt.preventDefault();
        addMeme({...form, id: uuid()});
        setForm(DEFAULT_FORM);
    }   

    function handleChange(evt){
        const {name, value} = evt.target;
        setForm(f => ({...f, [name]: value}));
    }

    return (
        <div>
            <h1>Add Meme</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="topText">Top Text</label>
                <input
                    id="topText"
                    name="topText"
                    type="text"
                    value={form.topText}
                    onChange={handleChange}
                />
                <label htmlFor="bottomText">Bottom Text</label>
                <input
                    id="bottomText"
                    name="bottomText"
                    type="text"
                    value={form.bottomText}
                    onChange={handleChange}
                />
                <label htmlFor="url">Image URL</label>
                <input
                    id="url"
                    name="url"
                    type="text"
                    value={form.url}
                    onChange={handleChange}
                />
                <button id="form_submit">Add Meme</button>
            </form>
        </div>
    );
}

export default AddMemeForm;
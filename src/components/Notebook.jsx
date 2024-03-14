import React, { useState } from 'react';
import Styles from './Notebook.module.css'
import Notepad from './Notepad';

const Notebook = () => {
    // State to store the user's notes
    const [notes, setNotes] = useState('');

    // Function to handle saving the notes
    const saveNotes = () => {
        localStorage.setItem('notes', notes);
        history.push('/');
    };

    // Function to load the saved notes
    const loadSavedNotes = () => {
        const savedNotes = localStorage.getItem('notes');
        if (savedNotes) {
            setNotes(savedNotes);
        }
    };

    // Render the notebook interface
    return (
        <div id={Styles.notebook}>
            <textarea id={Styles.note} value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
            <button onClick={saveNotes} className={Styles.btnSave}>Save</button>
            <button onClick={loadSavedNotes} className={Styles.btnLoad}>Downlord</button>
            <Notepad notes={notes} setNotes={setNotes}/>
        </div>
    );
};

export default Notebook;
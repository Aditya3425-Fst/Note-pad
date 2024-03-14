import React, { useEffect, useState } from 'react';
import Styles from './Home.module.css';

const Homepage = () => {
  const [savedNotes, setSavedNotes] = useState('');

  useEffect(() => {
    const notes = localStorage.getItem('notes');
    if (notes) {
      setSavedNotes(notes);
    }
  }, []);

  return (
    <div className={Styles.card}>
      <div className={Styles.cardContent}>
        <h3>Saved Notes :--</h3>
        <p>{savedNotes}</p>
      </div>
    </div>
  );
};

export default Homepage;


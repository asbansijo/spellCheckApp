import React, { useState, useEffect } from 'react';

const customDictionary = {
  teh: 'the',
  wrok: 'work',
  fot: 'for',
  exampl: 'example',
};

const SpellCheckAutoCorrection = () => {
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  useEffect(() => {
    const checkSpelling = (text) => {
      const words = text.split(' ');
      for (let word of words) {
        const lowerCaseWord = word.toLowerCase();
        if (customDictionary[lowerCaseWord]) {
          setSuggestion(`Did you mean: ${customDictionary[lowerCaseWord]}?`);
          return;
        }
      }
      setSuggestion('');
    };

    checkSpelling(text);
  }, [text]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        placeholder="Enter text..."
        value={text}
        onChange={handleChange}
        rows="4"
        cols="50"
      ></textarea>
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
};

export default SpellCheckAutoCorrection;

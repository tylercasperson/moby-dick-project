import React, { useRef, useState } from 'react';

const InputLabel = (props) => {
  const labelText = useRef('');
  const inputText = useRef('');

  const [newWord, setNewWord] = useState('');

  const onFocus = (ref) => {
    ref.current.classList.add('active');
  };

  const onBlur = (ref, input) => {
    if (input.current.value === '') {
      ref.current.classList.remove('active');
    }
  };

  const onEnter = (e) => {
    if (inputText.current.value !== '') {
      if (e.key === 'Enter') {
        props.array.push(inputText.current.value);
        setNewWord(inputText.current.value);
        inputText.current.value = '';
      }
    }
  };

  return (
    <div style={{ position: 'relative', margin: '30px 0', width: '30vw' }}>
      <label ref={labelText} htmlFor='inputText'>
        {props.label}
      </label>
      <input
        onFocus={() => onFocus(labelText)}
        onBlur={() => onBlur(labelText, inputText)}
        onKeyDown={(e) => onEnter(e)}
        onKeyDownCapture={props.onEnter}
        ref={inputText}
        type='text'
        id='inputText'
        new-word={newWord}
      />
    </div>
  );
};

export default InputLabel;

import React, { useRef } from 'react';

const InputLabel = (props) => {
  const labelText = useRef('');
  const inputText = useRef('');

  const onFocus = (ref) => {
    ref.current.classList.add('active');
  };

  const onBlur = (ref, input) => {
    if (input.current.value === '') {
      ref.current.classList.remove('active');
    }
  };

  return (
    <div style={{ position: 'relative', margin: '40px 0' }}>
      <label ref={labelText} htmlFor='inputText'>
        {props.label}
      </label>
      <input
        onFocus={() => onFocus(labelText)}
        onBlur={() => onBlur(labelText, inputText)}
        ref={inputText}
        type='text'
        id='inputText'
      />
    </div>
  );
};

export default InputLabel;

import React from 'react';
import InputLabel from './InputLabel';
import ListItem from './ListItem';

const ExcludeList = (props) => {
  return (
    <div
      style={{
        width: '30vw',
        margin: '0vw 10vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <InputLabel label={'Add a word to be excluded'} array={props.array} onEnter={props.onEnter} />
      <ul
        style={{
          position: 'relative',
          height: '49vh',
          width: '100%',
          marginBottom: 0,
          padding: '10px',
          boxSizing: 'border-box',
          background: 'rgba(0, 0, 0, 0.1)',
          boxShadow: 'inset 0 0 15px rgba(0, 0, 0, 0.2)',
          borderRadius: '5px',
          overflowY: 'scroll',
        }}
      >
        {props.array.map((i, index) => (
          <ListItem key={index} word={i} className={'hide'} content={<>Count this word </>} />
        ))}
      </ul>
    </div>
  );
};

export default ExcludeList;

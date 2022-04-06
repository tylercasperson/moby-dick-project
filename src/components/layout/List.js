import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
  return (
    <div>
      <ul
        style={{
          position: 'relative',
          height: '40vh',
          width: '30vw',
          margin: '100px auto 0',
          padding: '10px',
          boxSizing: 'border-box',
          background: 'rgba(0, 0, 0, 0.1)',
          boxShadow: 'inset 0 0 15px rgba(0, 0, 0, 0.2)',
          borderRadius: '5px',
          overflowY: 'scroll',
        }}
      >
        {props.array.map((i, index) => (
          <ListItem key={index} rank={index + 1} word={i.word} count={i.count} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default List;

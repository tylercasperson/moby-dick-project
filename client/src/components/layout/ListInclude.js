import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
  return (
    <div style={{ boder: '1pt solid black', height: '60vh' }}>
      <ul
        style={{
          position: 'relative',
          height: '100%',
          width: '30vw',
          margin: '2vmin',
          padding: '10px',
          boxSizing: 'border-box',
          background: 'rgba(0, 0, 0, 0.1)',
          boxShadow: 'inset 0 0 15px rgba(0, 0, 0, 0.2)',
          borderRadius: '5px',
          overflowY: 'scroll',
        }}
      >
        {props.array.map((i, index) => (
          <ListItem
            key={index}
            rank={index + 1}
            word={i.word}
            count={i.count}
            index={index}
            content={
              <>
                Exclude this word <br />
                from being counted
              </>
            }
            onClick={props.onClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;

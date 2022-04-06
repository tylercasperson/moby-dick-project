import React from 'react';
import plus from '../icons/plus.png';
import Tooltip from './Tooltip';

const ListItem = (props) => {
  return (
    <li className='listItem'>
      <span className='rank' style={{ width: '15%', textAlign: 'left' }}>
        {props.rank}
      </span>
      <span className='word' style={{ width: '50%' }}>
        {props.word}
      </span>
      <span className='count' style={{ width: '20%', textAlign: 'right' }}>
        {props.count}
      </span>
      <span className='plusIconArea' style={{ width: '15%', textAlign: 'right' }}>
        <Tooltip
          content={
            <>
              Exclude this word <br />
              from being counted
            </>
          }
          direction='left'
        >
          <img src={plus} alt='plus' className='plusIcon' />
        </Tooltip>
      </span>
    </li>
  );
};

export default ListItem;

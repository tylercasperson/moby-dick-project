import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListInclude from '../layout/ListInclude';
import ListExclude from '../layout/ListExclude';
import { listParseFile } from '../data/actions/parserActions';

const ListArea = () => {
  const dispatch = useDispatch();

  const getFromState = useSelector((state) => state);
  const { stopWords } = getFromState.stopWords;
  const { uniqueArr } = getFromState.uniqueArr;

  const [lock, setLock] = useState(true);

  let uniqueStopWords = [...new Set(stopWords)].filter((i) => i !== '').sort();

  const onClick = (e, arr) => {
    let selectedIndex = e.target.attributes.index.value;
    arr.splice(selectedIndex, 1);
    setLock(true);
  };

  const onEnter = (e) => {
    let arr = [];

    if (e.key === 'Enter') {
      setTimeout(() => {
        let selectedWord = e.target.attributes['new-word'].value;
        stopWords.push(selectedWord);

        Array.from(
          e.target.parentElement.parentElement.parentElement.children[0].children[0].children
        ).map((i) => {
          return arr.push(i.children[1].innerText);
        });
        if (arr.includes(selectedWord)) {
          uniqueArr.splice(arr.indexOf(selectedWord), 1);
        }
        setLock(true);
      }, 100);
    }
  };

  useEffect(() => {
    dispatch(listParseFile());
  }, [dispatch]);

  useEffect(() => {
    if (lock) {
      setLock(false);
    }
  }, [lock]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '70vh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      {uniqueArr && (
        <ListInclude array={uniqueArr.slice(0, 100)} onClick={(e) => onClick(e, uniqueArr)} />
      )}
      {stopWords && <ListExclude array={uniqueStopWords} onEnter={(e) => onEnter(e)} />}
    </div>
  );
};

export default ListArea;

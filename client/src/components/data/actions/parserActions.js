import axios from 'axios';
import {
  LIST_PARSER_REQUEST,
  LIST_PARSER_SUCCESS,
  LIST_PARSER_FAIL,
  LIST_STOP_WORDS_REQUEST,
  LIST_STOP_WORDS_SUCCESS,
  LIST_STOP_WORDS_FAIL,
  COUNT_WORDS_REQUEST,
  COUNT_WORDS_SUCCESS,
  COUNT_WORDS_FAIL,
} from '../constants/parserConstants';

export const listParseFile = () => async (dispatch) => {
  try {
    dispatch({ type: LIST_PARSER_REQUEST });

    const { data } = await axios.post('/api/parseFile');
    var fileData = data;

    dispatch({
      type: LIST_PARSER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LIST_PARSER_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }

  try {
    dispatch({ type: LIST_STOP_WORDS_REQUEST });

    const { data } = await axios.post('/api/parseFile/parseStopWords');
    var stopWords = data;

    dispatch({
      type: LIST_STOP_WORDS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LIST_STOP_WORDS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }

  try {
    dispatch({ type: COUNT_WORDS_REQUEST });

    let uniqueArr = [];
    let uniqueWords = [];

    fileData.map((i) => {
      if (i.length !== 1) {
        if (stopWords.indexOf(i) === -1) {
          if (uniqueWords.indexOf(i) === -1) {
            uniqueArr.push({ word: i, count: 1 });
            uniqueWords.push(i);
          } else {
            uniqueArr.find(({ word }) => word === i).count++;
          }
        }
      }
      return uniqueArr;
    });

    uniqueArr.sort((a, b) => {
      return b.count - a.count;
    });

    dispatch({
      type: COUNT_WORDS_SUCCESS,
      payload: uniqueArr,
    });
  } catch (error) {
    dispatch({
      type: COUNT_WORDS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

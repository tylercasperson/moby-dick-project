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

export const parseFileReducer = (state = { fileData: [] }, action) => {
  switch (action.type) {
    case LIST_PARSER_REQUEST:
      return { fileData: [] };
    case LIST_PARSER_SUCCESS:
      return { fileData: action.payload };
    case LIST_PARSER_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const parseStopWordsReducer = (state = { stopWords: [] }, action) => {
  switch (action.type) {
    case LIST_STOP_WORDS_REQUEST:
      return { stopWords: [] };
    case LIST_STOP_WORDS_SUCCESS:
      return { stopWords: action.payload };
    case LIST_STOP_WORDS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const countWordsReducer = (state = { uniqueArr: [] }, action) => {
  switch (action.type) {
    case COUNT_WORDS_REQUEST:
      return { uniqueArr: [] };
    case COUNT_WORDS_SUCCESS:
      return { uniqueArr: action.payload };
    case COUNT_WORDS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

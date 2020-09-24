import { DEFAULT } from '../actionTypes';

const defaultState = {
  value: '',
};

function defaultReducer(state = defaultState, action) {
  switch (action.type) {
    case DEFAULT:
      return {
        ...state,
        value: action.value,
      };
    default: return state;
  }
}

export default defaultReducer;

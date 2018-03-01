import {Map} from 'immutable';
import ACTIONS from '../consts/actionTypes';
import {combineReducers} from "redux";

function mainReducer(state = Map(), action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_SHOW_DAY:
      return state.set('showDay', !state.get('showDay'));
    case ACTIONS.TOGGLE_SHOW_MONTH:
      return state.set('showMonth', !state.get('showMonth'));
    case ACTIONS.TOGGLE_SHOW_YEAR:
      return state.set('showYear', !state.get('showYear'));
    case ACTIONS.CLEAR:
      return state.set('showDay', false).set('showMonth', false).set('showYear', false);
    default:
      return state;
  }
}

export default combineReducers({
  main: mainReducer
})
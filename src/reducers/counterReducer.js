import ActionTypes from '../Actions';

const initialState = {
  count: 1
}

export default function counterReducer ( state = initialState, action ) {
  switch(action.type) {
    case ActionTypes.ADD_COUNT:
      return {count: state.count + 1}
    case ActionTypes.SUBSTRACT_COUNT:
      return {count: state.count - 1} 
    default:
      return state
  }
}
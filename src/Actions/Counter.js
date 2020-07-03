import ActionTypes from '../Actions'

export const increaseCount = () => ({
  type: ActionTypes.ADD_COUNT
})

export const decreaseCount = () => ({
  type: ActionTypes.SUBSTRACT_COUNT
})
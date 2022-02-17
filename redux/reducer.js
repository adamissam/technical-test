const initialState = {
  pointOfSaleSelected:{}
};

const myReducer = (state = initialState, action) => {
 // Check to see if the reducer cares about this action
 if (action.type === 'point/selectPointOfSale') {
  // If so, make a copy of `state`
  return {
    ...state,
    // update the copy with the new value
    pointOfSaleSelected:action.payload
  }
}
// otherwise return the existing state unchanged
return state
};

export default myReducer;

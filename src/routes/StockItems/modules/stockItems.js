// ------------------------------------
// Constants
// ------------------------------------
export const ADD_STOCK_ITEM = 'ADD_STOCK_ITEM';

// ------------------------------------
// Actions
// ------------------------------------

export function addStockItem (newItem) {
  return function (dispatch) {
    // This is where we would usually make our server call.
    // Instead we are just going to go through the motions. To scale this solution we would simply need to change this to an actual POST and
    // then get the new stockItems from the response.
    dispatch({
      type: ADD_STOCK_ITEM,
      newItem
    })
  }
}

export const actions = {
  addStockItem
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  // get us started with some example items.
  stockItems : [
    {
      name: "TV",
      description: "Flat screen LCD tv",
      price: 400.00,
      availableDate: "09/13/2016",
      taxable: true
    },
    {
      name: "Grill",
      description: "Two burner gas grill",
      price: 250.00,
      availableDate: "09/15/2016",
      taxable: true
    }
  ]
};


export default function airportsReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_STOCK_ITEM:
      // We have to add the new item ourselved since we're not actually dealing with a server
      let newStockItems = state.stockItems.slice();
      newStockItems.push(action.newItem);
      return {
        ...state,
        stockItems: newStockItems
      };
    default:
      return state;
  }
}

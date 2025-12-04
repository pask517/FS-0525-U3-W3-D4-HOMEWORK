import { GET_SEARCHS } from "../actions"

const initialState = {
  search: [],
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCHS:
      return {
        ...state,
        search: [action.payload],
      }
    default:
      return state
  }
}
export default searchReducer

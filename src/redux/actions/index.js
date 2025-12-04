export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE"
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE"
export const GET_SEARCHS = "GET_SEARCHS"

export const addToFavouriteAction = (value) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: value,
  }
}

export const removeFromFavouriteAction = (value) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: value,
  }
}

export const getSearchsActions = (value) => {
  return {
    type: GET_SEARCHS,
    payload: value,
  }
}

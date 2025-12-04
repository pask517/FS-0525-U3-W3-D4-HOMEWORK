import { configureStore } from "@reduxjs/toolkit"

import favReducer from "../reducers/favReducer"
import searchReducer from "../reducers/searchReducer"

const store = configureStore({
  reducer: favReducer,
})

export default store

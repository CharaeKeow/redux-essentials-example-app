import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Posts!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      //push the payload - form data - into the state array. Despite this is mutating the state,
      //it is valid in createSlice due to it uses Immer. Don't use this outside createSlice though
      state.push(action.payload)
    }
  }
})

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
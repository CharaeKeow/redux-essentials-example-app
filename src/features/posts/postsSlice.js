import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Posts!', content: 'Hello!', user: '1' },
  { id: '2', title: 'Second Post', content: 'More text', user: '2' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        //push the payload - form data - into the state array. Despite this is mutating the state,
        //it is valid in createSlice due to it uses Immer. Don't use this outside createSlice though
        state.push(action.payload)
      },
      //create the id inside reducer so that the component would only need to send the title and content
      //payload. Also prevent duplication
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user: userId
          }
        }
      }
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload //assign variable according to payload
      const existingPost = state.find(post => post.id === id) //find the state in store
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    }
  }
})

export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer
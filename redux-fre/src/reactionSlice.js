import { createSlice } from '@reduxjs/toolkit'

function generateRandomArray() {
  const arr = []
  const randomIndexes = []

  while(randomIndexes.length < 3) {
      const number = Math.floor(Math.random() * 10)

      if(!randomIndexes.includes(number)) {
        randomIndexes.push(number)
      }
  }

  console.log(randomIndexes)

  for (let i = 0; i < 10; i++) {
    if (randomIndexes.includes(i)) {
      arr.push(0)
    } else {
      arr.push(1)
    }
  }

  return arr
}

const initialState = {
  squares: generateRandomArray(),
}



export const reactionSlice = createSlice({
  name: 'reaction',
  initialState,
  reducers: {},
    
})


export const {} = reactionSlice.actions

export default reactionSlice.reducer
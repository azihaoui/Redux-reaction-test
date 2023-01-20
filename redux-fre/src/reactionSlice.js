import { createSlice } from '@reduxjs/toolkit'

function generateRandomArray() {
  const arr = []
  const randomIndexes = []

  while(randomIndexes.length < 5) {
      const number = Math.floor(Math.random() * 25)

      if(!randomIndexes.includes(number)) {
        randomIndexes.push(number)
      }
  }

  console.log(randomIndexes)

  for (let i = 0; i < 25; i++) {
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
  record: [],
  startTime: new Date().getTime(),
}



export const reactionSlice = createSlice({
  name: 'reaction',
  initialState,
  reducers: {
    pressSquare:(state, action)=> {
        state.squares[action.payload] = 1

        if(!state.squares.includes(0)) {
            const timeToComplete = 
              (new Date().getTime() - state.startTime) / 1000
            console.log(timeToComplete);
            state.record = [timeToComplete, ...state.record]
            state.startTime = new Date().getTime()
            state.squares = generateRandomArray()
        }
    },
  },
    
})


export const {pressSquare} = reactionSlice.actions

export default reactionSlice.reducer
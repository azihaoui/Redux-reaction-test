import {useSelector} from 'react-redux'

function App() {
    const squares = useSelector((state)=> state.reaction.squares)
    console.log(squares)

    
  return (
    <div className="bg-red-500">
      <div className="bg-orange-500 grid grid-cols-5 gap-3 w-96 h-96">
          {squares.map((number, index) => (
            <div key={index} className="bg-blue-500"></div>
          ))}
        </div>
    </div>
  )
}

export default App

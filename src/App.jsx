/* eslint-disable no-unused-vars */
import './App.css'
import NumberList from './components/NumberList'

function App() {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div>
        <NumberList numbers={numbers}/>
      </div>
      
    </>
  )
}

export default App

import React, { useState } from 'react'

const App = () => {
  const [color, setcolor] = useState("black")
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div 
      className='w-full h-screen duration-200'
      style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-3xl px-3 py-2'>
          <button
            className='outline-none px-4 py-1 text-white font-semibold rounded-full shadow-lg'
            style={{backgroundColor: "black", border: selectedButton === 1 ? '2px solid white' : 'none'}}
            onClick={() => {
              handleButtonClick(1)
              setcolor("black")
            }}
          >Black</button>
          <button
            className='outline-none px-4 py-1 text-balck font-semibold rounded-full shadow-lg'
            style={{backgroundColor: "White", border: selectedButton === 2 ? '2px solid black' : 'none'}}
            onClick={() => {
              handleButtonClick(2)
              setcolor("white")
            }}
          >White</button>
          <button
            className='outline-none px-4 py-1 text-white font-semibold rounded-full shadow-lg'
            style={{backgroundColor: "red", border: selectedButton === 3 ? '2px solid black' : 'none'}}
            onClick={() => {
              handleButtonClick(3)
              setcolor("red")
            }}
          >Red</button>
          <button
            className='outline-none px-4 py-1 text-olive font-semibold rounded-full shadow-lg'
            style={{backgroundColor: "orange", border: selectedButton === 4 ? '2px solid black' : 'none'}}
            onClick={() => {
              handleButtonClick(4)
              setcolor("orange")
            }}
          >Orange</button>
          <button
            className='outline-none px-4 py-1 text-olive font-semibold rounded-full shadow-lg'
            style={{backgroundColor: "yellow", border: selectedButton === 5 ? '2px solid black' : 'none'}}
            onClick={() => {
              handleButtonClick(5)
              setcolor("yellow")
            }}
          >Yellow</button>
          <button
            className='outline-none px-4 py-1 text-white font-semibold rounded-full shadow-lg'
            style={{backgroundColor: "green", border: selectedButton === 6 ? '2px solid black' : 'none'}}
            onClick={() => {
              handleButtonClick(6)
              setcolor("green")
            }}
          >Green</button>
          <button
            className='outline-none px-4 py-1 text-white font-semibold rounded-full shadow-lg'
            style={{backgroundColor: "blue", border: selectedButton === 7 ? '2px solid black' : 'none'}}
            onClick={() => {
              handleButtonClick(7)
              setcolor("blue")
            }}
          >Blue</button>
          <button
            className='outline-none px-4 py-1 text-white font-semibold rounded-full shadow-lg'
            style={{backgroundColor: "indigo", border: selectedButton === 8 ? '2px solid black' : 'none'}}
            onClick={() => {
              handleButtonClick(8)
              setcolor("indigo")
            }}
          >Indigo</button>
          <button
            className='outline-none px-4 py-1 text-white font-semibold rounded-full shadow-lg'
            style={{backgroundColor: "violet", border: selectedButton === 9 ? '2px solid black' : 'none'}}
            onClick={() => {
              handleButtonClick(9)
              setcolor("violet")
            }}
          >Violet</button>
        </div>
      </div>
    </div>
  )
}

export default App


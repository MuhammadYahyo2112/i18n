import React from 'react'
import img from './assets/img.svg'

const App = () => {
  return (
    <>
    <header>
      <div>
        <img src={img} alt="" />

        <select>
          <option value="">English</option>
          <option value="">Russia</option>
          <option value="">Uzbek</option>
        </select>
      </div>

    </header>
    </>
  )
}

export default App
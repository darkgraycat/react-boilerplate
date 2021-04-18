import React from 'react'
import AnotherComponent from './AnotherComponent.jsx'
import style from '../css/style.css'

const App = () => {
  const items = ['react', 'webpack', 'babel', 'sass']
  return (
    <div>
      <h1 className={style.header}>Minimal React Boilerplate</h1>
      <h2 className={style.listElement}>includes:</h2>
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <AnotherComponent></AnotherComponent>
    </div>
  )
}

export default App
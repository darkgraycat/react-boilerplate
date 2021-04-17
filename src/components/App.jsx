import React from 'react'

const App = () => {
  const items = ['react', 'webpack', 'babel', 'sass']
  return (
    <div className="App">
      <h1>Minimal React Boilerplate</h1>
      <h2>includes:</h2>
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  )
}

export default App
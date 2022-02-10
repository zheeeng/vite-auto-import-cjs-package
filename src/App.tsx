// eslint-disable-next-line no-use-before-define
import React from 'react'
import MainLayout from './layouts/MainLayout'
import PageA from './views/PageA'
import PageB from './views/PageB'

// eslint-disable-next-line no-console
console.log(
  Application, ENV, Filter, DisplayObject, Graphics, InteractionEvent, Loader, Circle, Runner, settings, Sprite, Text, Ticker, EventEmitter
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <IconLogosReact style={{ fontSize: '3em' }}/>
      <header className="App-header">
        <p>
          <button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route path="/list" element={<PageA />} />
          <Route path="/detail/:id" element={<PageB />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

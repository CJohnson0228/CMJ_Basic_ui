import Badge from "./components/Badge"

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw' }}>
      <h2 style={{ fontSize: '24px' }}>Basic UI Kit - MUI clone</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '80%' }}>
        <Badge text='badge default' />
        <Badge text='badge w/appearance' appearance='red' />
        <Badge text='badge w/div styles' style={{ color: 'greenyellow', backgroundColor: 'indigo' }} />
      </div>
    </div>
  )
}

export default App

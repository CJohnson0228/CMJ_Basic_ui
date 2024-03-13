import { useState } from 'react'
import { ThemeProvider, useTheme } from './styles/ThemeProvider'
import { darkTheme } from './styles/theme/darkTheme'
import { lightTheme } from './styles/theme/lightTheme'
import Badge from './components/Badge'
import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'
import Checkbox from './components/Checkbox'
import CheckboxGroup from './components/CheckboxGroup'
import Heading from './components/Heading'
import styled from '@emotion/styled'

function App() {
  const [themeMode, setThemeMode] = useState<boolean>(true)

  const toggleThemeMode = () => setThemeMode(!themeMode)

  return (
    <ThemeProvider theme={themeMode ? darkTheme : lightTheme }>
      <div className="App" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: themeMode ? '#212121' : '#dedede',
        color: themeMode ? '#FFF' : '#000',
      }}>
        <h2 style={{ fontSize: '24px' }}>Basic UI Kit - MUI clone</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: '20px' }}>
          <Badge text='badge default' />
          <Badge text='badge w/color' color='red' />
          <Badge text='badge w/div styles' style={{ color: 'greenyellow', backgroundColor: 'indigo' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: '20px' }}>
          <Button label='Text Button' variant='text' />
          <Button label='Filled Button' variant="filled" color='green' shape='round' />
          <Button label='Outlined Button' variant='outlined' color='violet' shape='semi-round' />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: '20px' }}>
          <ButtonGroup>
            <Button label='One' />
            <Button label='Two' />
            <Button label='Three' />
          </ButtonGroup>
          <ButtonGroup variant='filled' shape='round' color='green'>
            <Button label='One' />
            <Button label='Two' />
            <Button label='Three' />
          </ButtonGroup>
          <ButtonGroup variant='outlined' shape='semi-round' color='violet'>
            <Button label='One' />
            <Button label='Two' />
            <Button label='Three' />
          </ButtonGroup>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: '20px' }}>
          <Checkbox />
          <Checkbox color='green' />
          <Checkbox color='violet' label='labeled' />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: '20px' }}>
          <CheckboxGroup vertical={false}>
            <Checkbox label='one' />
            <Checkbox label='two' />
            <Checkbox label='three' />
          </CheckboxGroup>
          <CheckboxGroup color='green' vertical={true}>
            <Checkbox label='one' />
            <Checkbox label='two' />
            <Checkbox label='three' />
          </CheckboxGroup>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: '20px' }}>
          <Heading>Heading One</Heading>
          <Heading>Heading Two</Heading>
          <Heading>Heading Three</Heading>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

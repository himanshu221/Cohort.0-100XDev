import { RecoilRoot } from 'recoil'
import './App.css'
import { InputComponent } from './components/Input'
import { TextDisplay } from './components/TextDisplay'

function App() {
  return (
    <RecoilRoot>
      <h1>Text Generator</h1>
      <div className='container'>
        <InputComponent />
        <TextDisplay />
      </div>
    </RecoilRoot>
  )
}

export default App

import {RecoilRoot} from 'recoil'
import './App.css'
import { InputComponent } from './components/input'
import { ProfileCard } from './components/ProfileCard'

function App() {

  return (
    <RecoilRoot>
      <div className='main'>
        <h2>Github Profile Card</h2>
        <InputComponent />
        <ProfileCard />
      </div>
    </RecoilRoot>
  )
}

export default App

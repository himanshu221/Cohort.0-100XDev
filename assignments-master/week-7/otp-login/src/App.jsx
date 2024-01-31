import { RecoilRoot } from 'recoil'
import './App.css'
import { LoginCard } from './components/OtpLogin'

function App() {

  return (
    <RecoilRoot>
      <LoginCard />
    </RecoilRoot>
  )
}

export default App

import './App.css'
import { RecoilRoot, useRecoilValue, useRecoilState} from 'recoil'
import { notificationAtom, totalNotificationSelector } from './store/atoms/Navbar'
import { useEffect } from 'react'
import axios from 'axios'

function App() {

  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  )
}

function Main() {
  const navBarCount = useRecoilValue(notificationAtom)
  const totolCount = useRecoilValue(totalNotificationSelector)

  // useEffect(() => {
  //   axios.get('https://sum-server.100xdevs.com/notifications')
  //     .then((resp) => {
  //       setNavBarCount(resp.data)
  //     })
  // },[])

  return <div>
    <button>Home</button>
    <button>Network ({navBarCount.network})</button>
    <button>Jobs ({navBarCount.jobs})</button>
    <button>Messaging ({navBarCount.messaging})</button>
    <button>Notifications ({navBarCount.notifications})</button>
    <button>TotalNotificationCount ({totolCount})</button>
  </div>
}

export default App

import {useRecoilValue, RecoilRoot, useRecoilValueLoadable} from 'recoil'
import './App.css'
import { todoAtomFamily } from './store/atoms/todo'

function App() {

  return (
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={1}/>
      <Todo id={2}/>
      <Todo id={2}/>
    </RecoilRoot>
  )
}

function Todo({id}) {
  const todoItem = useRecoilValueLoadable(todoAtomFamily(id))
  if(todoItem.state == 'loading'){
    return <div>
      Loading ...
    </div>
  }
  else if(todoItem.state == 'hasError'){
    return <div>
      Failed to fetch data from backend
    </div>
  }else{
    return <div>
    <h4>{todoItem.contents.title}</h4>
    <h3>{todoItem.contents.description}</h3>
  </div>
  }
}

export default App

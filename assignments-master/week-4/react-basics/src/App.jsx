import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter = 0;
function App() {
  return (
  <>
      <div>
        <input className="title" type="text" placeholder='Title' />
        <input className="description" type="text" placeholder='Description' /> <br></br>
        <button className='button' onClick={onClickHandler}>Add Todo</button>
      </div>
      <div className="output"></div>
  </>
  )
}

function onClickHandler() {
  const titleValue = document.querySelector('.title').value;
  const descValue = document.querySelector('.description').value;

  const div = document.createElement('div');
  div.setAttribute(
    'style',
    'padding: 40px;box-shadow: 0px 0px 5px rgba(0,0,0,0.30);border-radius: 5px;text-align: center'
  );

  const title = document.createElement('p');
  title.setAttribute('style', 'font-size: 15px');
  const titleText = document.createTextNode(titleValue);
  title.appendChild(titleText);

  const desc = document.createElement('p');
  desc.setAttribute('style', 'font-size: 15px');
  const descText = document.createTextNode(descValue);
  desc.appendChild(descText);

  const btn = document.createElement('button');
  btn.className = 'add-button';
  const buttonText = document.createTextNode('Mark as Done');
  btn.appendChild(buttonText);

  div.appendChild(title);
  div.appendChild(desc);
  div.appendChild(btn);
  div.id = counter;
  counter++;

  document.querySelector('.output').appendChild(div);
}

export default App

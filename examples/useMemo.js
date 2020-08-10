import React, { useState } from 'react';

const App = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');

  const handleClickText = () => {
    setText(text => text + '_ALLOHA')
  }

  const handleClickNumber = () => {
    setNumber(num => num + 1)
  }

  return (
    <div className="App">
      <button onClick={handleClickText}>add text</button>

      <button onClick={handleClickNumber}>add number</button>
      <Text text={text}/>
      <Number number={number}/>
    </div>
  );
}

const Text = React.memo(({ text = '' }) => {
  console.log('text rerendered');
  return <div>{text}</div>
})
// const Text = ({ text = '' }) => {
//   console.log('text rerendered');
//   return <div>{text}</div>
// }

const Number = React.memo(({ number = '' }) => {
  console.log('number rerendered');
  return <div>{number}</div>
})
// const Number = ({ number = '' }) => {
//   console.log('number rerendered');
//   return <div>{number}</div>
// }


export default App;

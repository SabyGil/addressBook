import React from 'react';
import AddContact from './components/UserInput';
import Contacts  from './components/Contacts';
// let contacts = [
//   {
//     name: 'scott',
//     number: '111'
//   },
//   {
//     name: 'scott',
//     number: '222'
//   },
//   {
//     name: 'scott',
//     number: '333'
//   }
// ]
class App extends React.Component {
  render(){
    // debugger
  return (
      <div>
        <AddContact  />
        <Contacts />
      </div>
    );
  }
}

export default App;

import React from 'react';
import AddContact from './components/Contacts';
import AddressBook  from './components/Contact';
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
        <AddressBook />
      </div>
    );
  }
}

export default App;

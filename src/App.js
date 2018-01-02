import React from 'react';
// import AddContact from './components/AddContact';
import Main from './components/Main';
import Navbar from './components/Navbar';
// import { Navbar } from 'reactstrap';

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
const App = () => {
  return (
      <div>
        {/* <AddContact  /> */}
      <Navbar />
        <Main />
      </div>
    );
}

export default App;

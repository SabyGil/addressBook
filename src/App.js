import React from 'react';
// import AddContact from './AddContact';
import Main from './Main';
import Navbar from './Navbar';

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

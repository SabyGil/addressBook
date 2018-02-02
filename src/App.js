import React from 'react';
import Contacts  from './components/Contacts';
import Routes from './components/Router';

class App extends React.Component {
  render(){
  return (
      <div>
        <Routes />
        <Contacts />
      </div>
    );
  }
}

export default App;

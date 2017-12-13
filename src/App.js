import React from 'react';
import AddContact from './AddContact';

class App extends React.Component {
  constructor(){
    super();
      this.state= {
        info: [
        {
          name: 'Heriberto',
          number: '203.752.8089',
          address: '1817 Purdy'
        },
        {
          name: 'Sabs',
          number: '508-507-2209',
          address: 'tremont'
        }
      ]

    }


  }
  render() {
    return (
      <div>
        <AddContact info = {this.state.info} />
      </div>
    );
  }
}

export default App;

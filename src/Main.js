import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AddContact from './AddContact';
import AddressBook from './AddressBook';

const Main = () => (
  <main>
    <Switch>
      <Route exact path ='/' component={AddContact} />
      <Route exact path ='/addressbook' component={AddressBook} />
    </Switch>

  </main>
);

export default Main;

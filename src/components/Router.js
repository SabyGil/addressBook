import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navigation }  from './NavBar';
import AddContact from './UserInput';
import Contacts  from './Contacts';

 const Routes = () => (
   <main>
     <Navigation />
     <Switch>
       <Route exact path='/' component={AddContact}/>
       <Route exact path='/contacts' component={Contacts} />
     </Switch>
  </main>
);

export default Routes;

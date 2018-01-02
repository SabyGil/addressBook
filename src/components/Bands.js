import React, { Component } from 'react';
import AddressBook from './AddressBook';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Bands extends Component {
    render(){
       const bands= this.props.store.getState().bands.map((band, index)=>{
             return <AddressBook key={index} band={band} store={this.props.store} />
           });
        return(
            <ListGroup>
                {bands}
            </ListGroup>
        );
    }
};

export default Bands;

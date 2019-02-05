import React, { Component } from 'react';
import { Item } from './item'

class List extends Component {
    state = {
        items: []
      };
    render(){
        return(
            <Item />
        )
    }
}

export default List;
import React, { Component } from 'react';

import ListingComponent from './components/ListingComponent';

class ListingContainer extends Component {
    render() {
        return (
            <ListingComponent {...this.props} />
        );
    }
}

export default ListingContainer;
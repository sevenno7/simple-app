import React, { Component } from 'react';

import HomeComponent from './components/HomeComponent';

class HomeContainer extends Component {
    render() {
        return (
            <HomeComponent {...this.props} />
        );
    }
}

export default HomeContainer;
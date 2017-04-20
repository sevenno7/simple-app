import React, { Component } from 'react';

import NotFoundComponent from './components/NotFoundComponent';

class NotFoundContainer extends Component {
    render() {
        return (
            <NotFoundComponent {...this.props} />
        );
    }
}

export default NotFoundContainer;
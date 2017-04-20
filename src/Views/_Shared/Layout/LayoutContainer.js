import React, { Component } from 'react';

import LayoutComponent from './components/LayoutComponent';

class LayoutContainer extends Component {
    render() {
        return (
            <LayoutComponent {...this.props} />
        );
    }
}

export default LayoutContainer;
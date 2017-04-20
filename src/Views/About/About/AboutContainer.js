import React, { Component } from 'react';

import AboutComponent from './components/AboutComponent';

class AboutContainer extends Component {
    render() {
        return (
            <AboutComponent {...this.props} />
        );
    }
}

export default AboutContainer;
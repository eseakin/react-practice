'use strict';

import React from 'react';
import {render} from 'react-dom';
import Page2 from './page2.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <p>React test</p>
                <Page2 />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
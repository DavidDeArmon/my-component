import React from 'react';
import { render} from 'react-dom';
import MyComponent from '../../src/index.js';
import { AppContainer } from 'react-hot-loader';
const App = () => (
    <MyComponent />
);
render(<AppContainer><App /></AppContainer>, document.getElementById("root"));
module.hot.accept('../../src/index.js',()=>{
    const NextApp = require('../../src/index.js').default;
    render(<NextApp/>,document.getElementById("root"))
})
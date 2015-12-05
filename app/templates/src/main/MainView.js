import React from 'react';
import {connect} from 'react-redux';

const MainView = (props) => (<div>
    <pre>{JSON.stringify(props,null,2)}</pre>
</div>);

export default connect()(MainView);

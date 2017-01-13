import React, { Component } from 'react';



class MyConsole extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        return (
            <div>
                {console.log('console')}
            </div>
        );
    }
}

export { MyConsole };
export default MyConsole;

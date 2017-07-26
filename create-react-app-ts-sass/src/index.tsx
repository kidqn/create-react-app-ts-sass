import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './app.scss';

interface props {
 name: string,
}
export default class App extends React.Component<props, any> {
    render() {
        const{name} = this.props;
        return (
            <div>
                <h1>Hello World {name}</h1>
            </div>
        );
    }
}

ReactDOM.render(<App name={'dinhlam'} />, document.getElementById('root'))
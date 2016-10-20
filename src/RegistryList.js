import React from 'react';
import RegistryItem from './RegistryItem';
import store from './store';

export default class extends React.Component {

    constructor() {
        super();
        this.state = store.getState();
    }

    componentWillMount () {
        store.subscribe(() => this.setState(store.getState()));
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>My Registry</h1>
                {this.state.registryItems.map((item) => {
                    return(
                        <RegistryItem itemDetails={item}/>
                    )
                })}
            </div>
        );
    }

}
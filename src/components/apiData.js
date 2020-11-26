import React, { Component } from 'react';

class ApiData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch(' https://cors-anywhere.herokuapp.com/superheroapi.com/api/1741527979362433/70')
            .then(res => console.log(res))
            .then(json => {
                this.state = ({
                    isLoaded: true,
                    items: json
                })
            });
    }
    render() {

        let { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>;
        }

        else {
            return (
                <div className="superherodata">
                    Data has been loaded
                </div>
            );
        }
    }
}

export default ApiData;
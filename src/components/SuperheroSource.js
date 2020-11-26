import React, { Component } from 'react';

class SuperheroSource extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/superheroapi.com/api/1741527979362433/70')
            .then(res => res.text()).then(text => JSON.parse(text))
            .then(text => {
                this.setState({
                    items: text,
                    isLoaded: true
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        let { isLoaded, items } = this.state;
        console.log(items);
        if (!isLoaded) {
            return <div>Loading...</div>;
        }

        return (
            <div className="superherodata">
                loaded
            </div>
        );

    }
}

export default SuperheroSource;



/*
import React, { Component } from 'react';

class SuperheroSource extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://opentdb.com/api.php?amount=10')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json.results,
                    isLoaded: true
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        let { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>;
        }

        return (
            <div className="superherodata">
                { items.map(q => q.question)}
            </div>
        );

    }
}

export default SuperheroSource;
*/
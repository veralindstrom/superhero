import React, { Component } from 'react';
import BuildQuiz from './QuizData';
// hello testing
/*
class SuperheroSource extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch(`https://cors-anywhere.herokuapp.com/superheroapi.com/api/1741527979362433/${this.props.id}`)
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
            <>
        <h1>{items.name}</h1>
        <BuildQuiz name={items.name}/>
        </>
    
        );

    }
}
*/

const SuperheroSource = {
    apiCall(param) {
        return fetch(`https://cors-anywhere.herokuapp.com/superheroapi.com/api/1741527979362433/${param}`)
            .then(res => res.text()).then(text => JSON.parse(text))
            .catch(err => console.log(err));
    },
    getSuperheroById(id) { 
        return this.apiCall(id);       
    },
    getSuperheroByName(name){
        let st = "search/" + name;
        return this.apiCall(st); 
    }
}

export default SuperheroSource;

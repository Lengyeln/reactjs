import React, { Component } from 'react';
import axios from 'axios';


class Axios extends Component {
    constructor(){
        super();
        this.state = {
            //id: [],
            persons: [],
            users: [],
            store: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3002/getall')
            .then(res => {
                const persons=res.data;
                this.setState({persons});
            })
    }

    /*componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }*/

    /* componentDidMount(){
         axios.get('http://localhost:3002/searchNumber/787')
             .then(json => console.log(json.data.id))
     }*/

    render(){
        console.log("Consol text");

        return (
            <div>
                <div>{ this.state.persons.map(person => <li>{person.nev}</li>)}</div>

            </div>
        );
    }
}

export default Axios;



import React from 'react';
//import classes from './Header.css';
import './Header.css';

/*
class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>Header</h1>
            </div>
        )
    }
}

export default Header;*/

const header = (props) => {
    return(<div className="Header">
        <h1>Header</h1>
        <h2>hjj</h2>
    </div>);
};

export default header;
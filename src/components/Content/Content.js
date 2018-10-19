import React from 'react';
import './Content.css';
import ButtonExampleInverted from './ButtonExampleInverted';

import { Button, Segment } from 'semantic-ui-react';

class Content extends React.Component{
    render(){
        return(
            <div className="Content">
                <ButtonExampleInverted/>
                <h2>Content</h2>
                <p>The content text!!!</p>
                <p>The content text!!!</p>
                <p>The content text!!!</p>
                <p>The content text!!!</p>
            </div>
        )
    }
}

export default Content;
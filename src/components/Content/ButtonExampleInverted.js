import React from 'react'
import { Button, Segment } from 'semantic-ui-react';
import './ButtonExampleInverted.css';

const ButtonExampleInverted = () => {
    return(
        <div>
        <Segment inverted>
            <Button inverted>Standard</Button>
            <Button inverted color='red'>
                Red
            </Button>
            <Button inverted color='olive'>
                Olive
            </Button>
            <Button inverted color='blue'>
                Blue
            </Button>
            <Button inverted color='purple'>
                Purple
            </Button>
        </Segment>
    </div>);

}

export default ButtonExampleInverted;
import React from 'react';

import Axios from '../../Axios';

import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
} from 'semantic-ui-react'

import TableExampleSortable from './teszt';


const Layout = () => (
    <div>
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as='a' header>
                    <Image size='mini' src='/img/phone.png' style={{ marginRight: '1.5em' }} />
                    Telefonkönyv
                </Menu.Item>
                <Menu.Item as='a'>Új névjegy</Menu.Item>

                <Dropdown item simple text='Keresés'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Név keresés</Dropdown.Item>
                        <Dropdown.Item>Szám keresés</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Menu>

        <Container text style={{ marginTop: '7em' }}>
            <Header as='h1'>Semantic UI React Fixed Template</Header>
            <TableExampleSortable/>
            <p>This is a basic fixed menu template using fixed size containers.</p>
            <p>
                A text container is used for the main container, which is useful for single column layouts.
            </p>
            <Axios/>
        </Container>

        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '0em 0em ' }}>
            <Container textAlign='center'>
                <Divider inverted section />
                <List horizontal inverted divided link>
                    <List.Item as='a' href='#'>
                        Site Map
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Contact Us
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Terms and Conditions
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Privacy Policy
                    </List.Item>
                </List>
            </Container>
        </Segment>
    </div>
)

export default Layout;
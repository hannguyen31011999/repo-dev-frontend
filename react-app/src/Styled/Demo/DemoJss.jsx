import React, { Component } from 'react'
import { Button, SmallButton, DemoButton } from '../Component/Button';
import { StyleLink } from '../Component/Link';
export default class DemoJss extends Component {
    render() {
        return (
            <div>
                <Button primary>Click me</Button>
                <SmallButton>Click girl</SmallButton>
                <StyleLink>Click</StyleLink>
                <DemoButton backgound="green">Click scss</DemoButton>
            </div>
        )
    }
}

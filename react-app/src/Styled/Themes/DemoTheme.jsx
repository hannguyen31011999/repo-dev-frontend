import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components';
const configDarkTheme = {
    background: "#000",
    color: "white"
}
const configLightTheme = {
    background: "blue",
    color: "black"
}
export default class DemoTheme extends Component {
    state = {
        currentTheme: configDarkTheme
    }
    handleChangeTheme = (e) => {
        this.setState({
            currentTheme: e.target.value == 1 ? configDarkTheme : configLightTheme
        });
    }
    render() {
        const DivStyle = styled.div`
            color:${props => props.theme.color};
            background:${props => props.theme.background}
        `;
        return (
            <ThemeProvider theme={this.state.currentTheme}>
                <DivStyle>123</DivStyle>
                <select name="" id="" onChange={this.handleChangeTheme}>
                    <option value="1">Dark Theme</option>
                    <option value="2">Light Theme</option>
                </select>
            </ThemeProvider>
        )
    }
}

import React, { Component } from 'react'
import { Container } from '../Container/Container';
import { ThemeProvider } from 'styled-components';
import { ToDoListDarkTheme } from '../Themes/ToDoListDarkTheme';
import { DropDown } from '../TodoList/ComponentToDoList/Dropdown';
import { Heading1, Heading2 } from '../TodoList/ComponentToDoList/Heading';
import { TextField } from '../TodoList/ComponentToDoList/TextField';
import { TextButton, TableButton } from '../TodoList/ComponentToDoList/Button';
import { trTable, tdName, tdAction } from '../TodoList/ComponentToDoList/Table';
import './style.css';
export default class ToDoList extends Component {
    render() {
        return (
            <ThemeProvider theme={ToDoListDarkTheme}>
                <Container className="w-50">
                    <DropDown>
                        <option value="">Dark Theme</option>
                        <option value="">Light Theme</option>
                        <option value="">Primary Theme</option>
                    </DropDown>
                    <Heading1>To do list</Heading1>
                    <div className="task">
                        <TextField label="Task Name"></TextField>
                        <div className="btn-task">
                            <TextButton><i class="fa fa-plus"></i>Add Task</TextButton>
                            <TextButton><i class="fa fa-upload"></i>Update Task</TextButton>
                        </div>
                    </div>
                    <Heading2>Task to do</Heading2>
                    <table className="w-100">
                        <tbody>
                            <tr>
                                <tdName>1</tdName>
                                <tdAction>
                                    <TableButton><i class="fa fa-trash-alt"></i></TableButton>
                                    <TableButton><i class="fa fa-edit"></i></TableButton>
                                    <TableButton><i class="fa fa-check"></i></TableButton>
                                </tdAction>
                            </tr>
                            <tr>
                                <tdName>1</tdName>
                                <tdAction>
                                    <TableButton><i class="fa fa-trash-alt"></i></TableButton>
                                    <TableButton><i class="fa fa-edit"></i></TableButton>
                                    <TableButton><i class="fa fa-check"></i></TableButton>
                                </tdAction>
                            </tr>
                        </tbody>
                    </table>
                    <Heading2>Task complete</Heading2>
                    <table className="w-100">
                        <tbody>
                            <tr>
                                <tdName>1</tdName>
                                <tdAction>
                                    <TableButton><i class="fa fa-trash-alt"></i></TableButton>
                                    <TableButton><i class="fa fa-edit"></i></TableButton>
                                    <TableButton><i class="fa fa-check"></i></TableButton>
                                </tdAction>
                            </tr>
                            <tr>
                                <tdName>1</tdName>
                                <tdAction>
                                    <TableButton><i class="fa fa-trash-alt"></i></TableButton>
                                    <TableButton><i class="fa fa-edit"></i></TableButton>
                                    <TableButton><i class="fa fa-check"></i></TableButton>
                                </tdAction>
                            </tr>
                        </tbody>
                    </table>
                </Container>
            </ThemeProvider>
        )
    }
}

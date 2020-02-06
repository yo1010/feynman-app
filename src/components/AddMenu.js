import React, { Component } from 'react';
import { menuTopicInput } from '../actions/actions';
import styled from 'styled-components';
import store from '../store/store';

export default class AddMenu extends Component {
    constructor() {
        super();
        this.storeState = store.getState();
        this.state = {
            showMenu: false,
            topicInput: ""
        };
    }
    handleMenu = () => {
        if (this.state.showMenu === false) {
            this.setState({showMenu: true});
            console.log(this.state.showMenu);
        } else {
            this.setState({showMenu: false})
            console.log(this.state.showMenu);
        }
    };
    handleInputChange = (e) => {
        let inputString = e.target.value;
        this.setState({topicInput: inputString});
    };
    clearInput = (e) => {
        if (e.key == "Enter") {
            store.dispatch(menuTopicInput(this.state.topicInput));
            this.setState({topicInput: ""});
        }
    };
    render() {
        return (
            <MenuWrapper>
                <div className="buttonContainer">
                    <div className={this.state.showMenu ? "formContainer" : "hide formContainer"}>
                        <input type="text" placeholder="Title..." className="col inputTitle" 
                        onChange={this.handleInputChange} value={this.state.topicInput} onKeyDown={this.clearInput}/>
                        <input type="text" placeholder="Topic..." className="mt-1 col inputTopic" />
                    </div>
                    <button className="addButton mt-1" onClick={() => this.handleMenu()}>+</button>
                </div>
            </MenuWrapper>
        )
    }
}

const MenuWrapper = styled.div`
    .hide {
        display: none;
        padding: none;
        background: none;
    }
    .buttonContainer {
        position: fixed;
        bottom: 5%;
        right: 3%;
        width: 13rem;
        padding: 0.1rem;
    }
    .formContainer {
        width: 100%;
    }
    .addButton {
        transition: background-color 0.5s ease;
        background-color: steelblue;
        z-index: 9999;
        outline: none;
        border: none;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.4rem;
        padding-bottom: 0.5rem;
        border-radius: 50%;
        color: white;
        font-size: 1.2rem;
        float: right;
        animation: rotate-backwards;
        animation-duration: 0.5s;
    }
    .addButton:hover {
        animation: rotate-forward;
        animation-duration: 0.5s;
        transition: background-color 0.5s ease;
        background-color: slategrey;
    }
    input {
        background: steelblue;
        border: none;
        border: solid 1px;
        border-color: lightblue;
        padding: 0.3rem;
        border-radius: 3rem;
        text-indent: 0.5rem;
        outline: none;
        ::placeholder {
            color: white;
        }
    }
    .inputTitle {
        transform: scaleY(0);
        animation: show-menu 0.5s linear;
        animation-delay: 0.5s;
        animation-fill-mode: forwards;
        transform-origin: 0 100%;
        transition: transform .5s;
    }
    .inputTopic {
        animation: show-menu 0.5s linear;
        transform-origin: 0 100%;
        transition: transform .5s;
    }
    @keyframes show-menu {
        0% {transform: scaleY(0)}
        100% {transform: scaleY(1)}
    }
    @keyframes rotate-forward {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }
    @keyframes rotate-backwards {
        0% {transform: rotate(360deg)}
        100% {transform: rotate(0deg)}
    }
`
import React, { Component } from 'react';
import { menuTopicInput } from '../actions/actions';
import styled from 'styled-components';
import store from '../store/store';

export default class AddMenu extends Component {
    constructor() {
        super();
        this.inputObject = {};
        this.storeState = store.getState();
        this.state = {
            showMenu: false,
            topicInput: "",
            titleInput: "",
            titleEntered: false,
            topicEntered: false
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
        let inputString = e.target.value.toLowerCase();
        if (e.target.className.includes("inputTitle")) {
            this.setState({titleInput: inputString});
        } else if (e.target.className.includes("inputTopic")) {
            this.setState({topicInput: inputString})
        }
    };
    clearInput = (e) => {
        if (e.key === "Enter") {
            if (e.target.className.includes("inputTitle")) {
                this.inputObject = {};
                this.inputObject.knownArray = [];
                this.inputObject.learnArray = [];
                this.inputObject.reviseArray = [];
                this.inputObject.title = this.state.titleInput;
                this.inputObject.title = this.inputObject.title[0].toUpperCase() + this.inputObject.title.slice(1);
                this.setState({titleInput: "", titleEntered: true});
                console.log('entered')
            } 
            if (e.target.className.includes("inputTopic")) {
                if (this.state.titleEntered === true) {
                    this.inputObject.topic = this.state.topicInput;
                    this.inputObject.topic = this.inputObject.topic[0].toUpperCase() + this.inputObject.topic.slice(1);
                    this.setState({topicInput: "", topicEntered: true});
                    store.dispatch(menuTopicInput(this.inputObject));
                    this.setState({titleEntered: false, topicEntered: false})
                } else {
                    window.alert('Title needs to be entered')
                }
            }
        }
    };
    render() {
        return (
            <MenuWrapper>
                <div className="buttonContainer">
                    <div className={this.state.showMenu ? "formContainer" : "hide formContainer"}>
                        <input type="text" placeholder={this.props.placeholder1} className={this.state.titleEntered ? "col inputTitle entered" : "col inputTitle"}
                        onChange={this.handleInputChange} value={this.state.titleInput} onKeyDown={this.clearInput}/>
                        <input type="text" placeholder={this.props.placeholder2} className={this.state.topicEntered ? "mt-1 col inputTopic entered" : "mt-1 col inputTopic"}
                        onChange={this.handleInputChange} value={this.state.topicInput} onKeyDown={this.clearInput} />
                        <div className={this.props.cardMenu ? "selectorContainer mt-1 row" : "hide"}>
                            <div className="col">
                                <div className="row mx-0">
                                    <div className="ml-auto mr-0 row">
                                        <div className="dots dotKnow mr-1"></div>
                                        <div className="dotText">known</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row mx-0">
                                    <div className="ml-2 mr-0 row">
                                        <div className="dots dotRevise mr-1"></div>
                                        <div className="dotText">revise</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row mx-0">
                                    <div className="ml-2 mr-0 row">
                                        <div className="dots dotLearn mr-1"></div>
                                        <div className="dotText">learn</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="addButton mt-1" onClick={() => this.handleMenu()}>+</button>
                </div>
            </MenuWrapper>
        )
    }
}

const MenuWrapper = styled.div`
    .entered {
        background: mediumseagreen;
    }
    .hide {
        display: none;
        padding: none;
        background: none;
    }
    .buttonContainer {
        position: fixed;
        bottom: 4%;
        right: 2%;
        width: 13.5rem;
        padding: 0.1rem;
    }
    .formContainer {
        width: 100%;
    }
    .row {
        padding: 0;
        margin: 0;
    }
    .col {
        padding: 0;
        margin: 0;
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
        animation: show-menu 0.2s linear;
        animation-delay: 0.2s;
        animation-fill-mode: forwards;
        transform-origin: 0 100%;
        transition: transform .5s;
    }
    .inputTopic {
        animation: show-menu 0.2s linear;
        transform-origin: 0 100%;
        transition: transform .5s;
    }
    .dots {
        height: 15px;
        width: 15px;
        border-radius: 50%;
        margin-top: 0.35rem;
    }
    .dotKnow {
        border: solid 2px mediumseagreen;
    }
    .dotKnow:hover {
        background: mediumseagreen;
        cursor: pointer;
    }
    .dotRevise {
        border: solid 2px gold;
    }
    .dotRevise:hover {
        background: gold;
        cursor: pointer;
    }
    .dotLearn {
        border: solid 2px crimson;
    }
    .dotLearn:hover {
        background: crimson;
        cursor: pointer;
    }
    .dotText {
        color: steelblue; 
    }
    @keyframes show-menu {
        0% {transform: scaleY(0)}
        100% {transform: scaleY(1)}
    }
    @keyframes rotate-forward {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(180deg)}
    }
    @keyframes rotate-backwards {
        0% {transform: rotate(180deg)}
        100% {transform: rotate(0deg)}
    }
`
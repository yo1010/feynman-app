import React, { Component } from 'react';
import store from '../store/store';
import styled from 'styled-components';
import AddMenu from './AddMenu';
import { Link } from 'react-router-dom';
import { getOpenCard, getFirebaseData } from '../actions/actions';

export default class Home extends Component {
    constructor() {
        super();
        this.storeState = store.getState();
        this.keyCounter = 0;
        this.state = {
            menuTopicInput: []
        };
    };
    componentDidMount() {
        store.subscribe(() => {
            this.storeState = store.getState();
            this.setState(() => {
                return {
                    menuTopicInput: this.storeState.menuTopicInput, ...this.state.menuTopicInput
                }
            })
        });
    };
    render() {
        console.log(this.state.menuTopicInput)
        return (
            <HomeWrapper>
                <div className="row ml-1">{
                    this.state.menuTopicInput.map(item => {
                        if (item.title !== undefined && item.topic !== undefined) {
                            return (
                                <Link className="cardLink" to={`/${item.title}`} key={`cardLink ${this.state.menuTopicInput.indexOf(item)}`}>
                                    <div className="note" key={`cardItem ${this.state.menuTopicInput.indexOf(item)}`} onClick={() => store.dispatch(getOpenCard(item))}>
                                        <div className="noteHeader">
                                            <h1 align="center">{item.title}</h1>
                                        </div>
                                        <div className="noteFooter">
                                            <h2 align="center" className="noteTopic">{item.topic}</h2>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                })}</div>
                <AddMenu placeholder1="Title..." placeholder2="Topic..."/>
            </HomeWrapper>
        );
    }
}

const HomeWrapper = styled.div`
    .note {
        position: relative;
        width: 10rem;
        height: 10rem;
        border: solid 2px steelblue;
        border-radius: 5%;
        box-shadow: 1px 1px 3px;
        color: steelblue;
        font-weight: bold;
        margin: 1rem;
        align-text: center;
        h1 {
            font-size: 1.1rem;
            color: white;
        }
        h2 {
            font-size: 1rem;
            color: steelblue;
            font-weight: bold;
            margin-top: 0.5rem;
            padding-left: 0.3rem;
            padding-right: 0.3rem;
        }
        transition: box-shadow 0.5s;
    }
    cardLink {
        text-decoration: none;
    }
    .note: hover {
        box-shadow: 2px 2px 4px;
        cursor: pointer;
        .noteHeader {
            background: steelblue;
        }
    }
    .noteHeader {
        background: slategrey;
        border-top-right-radius: 5.5px;
        border-top-left-radius: 5.5px;
        border: none;
        padding-bottom: 0.1rem;
        transition: background 0.5s;
    }
    .noteFooter {
        position: absolute;
        float:left;
        background: none;
        border-top: solid 2px steelblue;
        border-right: solid 2px steelblue;
        bottom: 0rem;
        left: 0rem;
        border-top-right-radius: 5.5px;
        border-bottom-left-radius: 5.5px;
        padding-right: 0.1rem;
        padding-left: 0.1rem;
    }
`

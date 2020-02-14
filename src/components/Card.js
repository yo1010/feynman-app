import React, { Component } from 'react';
import AddMenu from './AddMenu';
import store from '../store/store';
import Section from './Section';
import Word from './Word';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Card extends Component {
    constructor() {
        super();
        this.storeState = store.getState();
    }
    componentDidMount() {
        store.subscribe(() => {
            this.storeState = store.getState();
            console.log(this.storeState);
        })
    }
    render() {
        return (
            <CardWrapper>
                <div className="row cardHeader">
                    <div className="cardTitle mx-auto">Title: <span className="nameColor">{this.storeState.openCard.title}</span></div>
                    <div className="cardTopic mx-auto">Topic: <span className="nameColor">{this.storeState.openCard.topic}</span></div>
                </div>
                <div className="row flexbox">
                    <Section id="section-1" className="section col knownSection" header="Known">
                        <Word id="word-1" className="word" draggable="true"><p>Word one</p></Word>
                    </Section>
                    <Section id="section-2" className="section col learnSection" header="Learn">
                        <Word id="word-2" className="word" draggable="true"><p>Word two</p></Word>
                        <Word id="word-4" className="word" draggable="true"><p>Word four</p></Word>
                        <Word id="word-5" className="word" draggable="true"><p>Word five</p></Word>
                        <Word id="word-6" className="word" draggable="true"><p>Word six</p></Word>
                        <Word id="word-7" className="word" draggable="true"><p>Word seven</p></Word>
                    </Section>
                    <Section id="section-3" className="section col reviseSection" header="Revise">
                        <Word id="word-3" className="word" draggable="true"><p>Word three</p></Word>
                    </Section>
                </div>
                <AddMenu placeholder1="Concept..." placeholder2="Comment..." cardMenu={true} />
                <Link to="/"><button className="homeButton"><i className="fas fa-home"></i></button></Link>
            </CardWrapper>
        )
    }
}

const CardWrapper = styled.div`
    padding-left: 0.5rem;
    padding-right: 0.7rem;
    .cardHeader {
        background: grey;
        box-shadow: 0px 1px 2px darkgrey;
    }
    .homeButton {
        position: fixed;
        bottom: 4%;
        left: 2%;
        padding: 0.1rem;
        transition: background-color 0.5s ease;
        background-color: steelblue;
        z-index: 9999;
        outline: none;
        border: none;
        padding-left: 0.9rem;
        padding-right: 0.9rem;
        padding-top: 0.4rem;
        padding-bottom: 0.5rem;
        border-radius: 50%;
        color: white;
        font-size: 1.2rem;
    }
    .homeButton:hover {
        background-color: slategrey;
    }
    .cardTitle {
        color: white;
        font-size: 1rem;
    }
    .nameColor {
        color: skyblue;
    }
    .cardTopic {
        color: white;
        font-size: 1rem;
    }
    .knownSection {
        color: mediumseagreen;
    }
    .learnSection {
        color: gold;
    }
    .reviseSection {
        color: crimson;
    }
`

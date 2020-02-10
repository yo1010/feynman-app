import React, { Component } from 'react';
import styled from 'styled-components';

export default class Section extends Component {
    drop = (e) => {
        e.preventDefault();
        const word_id = e.dataTransfer.getData("word_id");
        const word = document.getElementById(word_id);
        word.style.display = "block";
        e.target.appendChild(word);
    }
    dragOver = (e) => {
        e.preventDefault();

    }
    render() {
        return (
            <SectionWrapper
                id={this.props.id}
                className={this.props.className}
                onDrop={this.drop}
                onDragOver={this.dragOver}
            >
                <div className="sectionHeader"><h1>{this.props.header}</h1></div>
                {this.props.children}
            </SectionWrapper>
        )
    }
}

const SectionWrapper = styled.div`
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    height: 100vh;
    padding: 0.5rem;
    .sectionHeader {
        color: steelblue; 
        border-bottom: solid 2px steelblue;
        margin-bottom: 1rem;
        width: 100%;
        h1 {
            font-size: 2rem;
            margin-left: 0.5rem;
        }
    }
`
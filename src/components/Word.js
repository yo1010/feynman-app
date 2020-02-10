import React, { Component } from 'react';
import styled from 'styled-components';

export default class Word extends Component {
    dragStart = (e) => {
        const target = e.target;
        e.dataTransfer.setData("word_id", target.id);
        setTimeout(() => {
            target.style.display = "none";
        }, 0);
    };
    
    dragOver = (e) => {
        e.stopPropagation();
    };
    render() {
        return (
            <WordWrapper
                id={this.props.id}
                draggable={this.props.draggable}
                onDragStart={this.dragStart}
                onDragOver={this.dragOver}
            >
                {this.props.children}
            </WordWrapper>
        )
    }
}

const WordWrapper = styled.div`
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.7rem;
    margin-bottom: 0.5rem;
    border: solid 1px steelblue; 
    box-shadow: 1px 1px 2px steelblue;
    text-align: center;
    &:hover {
        box-shadow: 2px 2px 4px steelblue;
        cursor: pointer;
    }
`
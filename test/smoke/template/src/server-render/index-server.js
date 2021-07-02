// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import logo from '../images/image.png';
// import { a } from '../tree-shaking/tree-shaking';

const React = require('react');
// const ReactDOM = require('react-dom');
const logo = require('../images/image.png');
// const a = require('../tree-shaking/tree-shaking');

// for (const i of [1, 2, 3]) {
//     console.log(i);
//     console.log('i', i);
// }

class Search extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            text: null,
        };
    }

    loadComponent() {
        import('../dynamic/dynamic.js').then((text) => {
            this.setState({
                text: text.default,
            });
        });
    }

    render() {
        // const funcA = a();
        const { text } = this.state;
        return (
            <div className="search-text">
            {
                    text ? <text /> : null
                }
            <img src={logo} onClick={this.loadComponent.bind(this)} />
                {/* Search 內容 改變
                {' '}
                { funcA } */}

          </div>
        );
    }
}

module.exports = <Search />;
